import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { interval, take, takeUntil, timer } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NewDialogComponent } from '../new-dialog/new-dialog.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styles: ['body { background-color: aqua}']
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private notificatioS: NotificationService,
    private dialog: MatDialog,
    public userService: UserService 
  ) {}
  options: Array<string> = ['India', 'China', 'Sri Lanka'];
  imageUrl: string = 'assets/images/sun.png';
  imageUrl2: string = 'assets/images/moon.png';
  btnStatus: boolean = false;
  isActivated: boolean = false;
  users: any;

  ngOnInit(): void {
    const source$ = interval(1000);
    const timer$ = timer(4000);

    source$.pipe(takeUntil(timer$)).subscribe((count) => {
      console.log(count);
    });

    this.userService.activatedEmitter.subscribe((didActivate) => {
      this.isActivated = didActivate;
    });
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
    this.userService.createAndStorePost('Angular', 'A typescript framework');
  }

  sendMessage(data) {
    this.notificatioS.sendNotification(data.value);
  }
  changeTitle() {
    console.log('Title changed');
  }
  onAddField() {
    const dialogRef = this.dialog.open(NewDialogComponent, {
      width: '950px',
    });
  }

}
