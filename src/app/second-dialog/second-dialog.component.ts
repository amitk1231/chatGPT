import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../dialog-overview-example/dialog-overview-example.component';

@Component({
  selector: 'app-second-dialog',
  templateUrl: './second-dialog.component.html',
  styleUrls: ['./second-dialog.component.scss'],
})
export class SecondDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SecondDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
