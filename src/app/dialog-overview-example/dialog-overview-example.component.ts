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
  fruit: string;
  name1: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SecondDialogComponent, {
      data: { name1: this.name1, fruit: this.fruit },
    });
    console.log('button clicked');
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.fruit = result;
    });
  }
}