import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public notificationSubject = new Subject<string>();

  constructor() { }


  sendNotification(data){
    // console.log(`Console at line 15`);
    this.notificationSubject.next(data);
  }
}
