import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-notification-board',
  templateUrl: './notification-board.component.html',
  styleUrls: ['./notification-board.component.scss'],
})
export class NotificationBoardComponent implements OnInit {
  notificationMessage: string;
  constructor(private notificationS: NotificationService){}
  ngOnInit(): void {
    this.notificationS.notificationSubject.subscribe(d => {
      this.notificationMessage = d;
    })
  }
}
