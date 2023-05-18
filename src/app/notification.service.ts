import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
    notificationSubject = new BehaviorSubject<string>('Greetings from Amit');

    sendNotification(data){
       this.notificationSubject.next(data);
    }
}
