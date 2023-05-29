import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SecondDialogComponent } from '../second-dialog/second-dialog.component';

export interface DialogData {
  fruit: string;
  name: string;
}

@Component({
  selector: 'app-dialog-overview-example',
  templateUrl: './dialog-overview-example.component.html',
  styleUrls: ['./dialog-overview-example.component.scss'],
})
export class DialogOverviewExampleComponent {
  fruit1: string;
  name1: string;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(SecondDialogComponent, {
      data: { name: this.name1, fruit: this.fruit1 },
    });
    console.log('Button clicked');
    dialogRef.afterClosed().subscribe((result) => {
      this.fruit1 = result;
      console.log('The dialog is closed.');
    });
  }
}
