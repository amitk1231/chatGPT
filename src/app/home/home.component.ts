import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { interval, take, takeUntil, timer } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NewDialogComponent } from '../new-dialog/new-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private notificatioS: NotificationService, private dialog: MatDialog) {}
  imageUrl: string = 'assets/images/sun.png';
  imageUrl2: string = 'assets/images/moon.png';
  btnStatus: boolean = false;

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
  changeTitle(){
  }
  onAddField(){
    const dialogRef = this.dialog.open(NewDialogComponent, {
      width: '450px'
    });
  }

}
