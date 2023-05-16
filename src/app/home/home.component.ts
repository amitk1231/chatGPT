import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-home',
  template: `
  <p>
    Enter message: <input type="text" #message />
    <br><br>
    <button (click)="sendMessage(message)">Send Message</button>
  </p>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private notificationS: NotificationService){ }
   
  sendMessage(data: any){
     this.notificationS.sendNotification(data.value);
  }
}
