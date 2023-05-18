import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { interval, take, takeUntil, timer } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private notificatioS: NotificationService) {}

  ngOnInit(): void {
    const source$ = interval(1000);  
    const timer$ = timer(4000);

    source$.pipe(takeUntil(timer$)).subscribe((count) => {
      console.log(count);
    });
  }

  sendMessage(data) {
    this.notificatioS.sendNotification(data.value);
  }
}
