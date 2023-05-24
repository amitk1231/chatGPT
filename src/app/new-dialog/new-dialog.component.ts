import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { AddField } from '../model/add-field';
import { Inject } from '@angular/core';
import { NestedDialogComponent } from '../nested-dialog/nested-dialog.component';
@Component({
  selector: 'app-new-dialog',
  templateUrl: './new-dialog.component.html',
  styleUrls: ['./new-dialog.component.scss'],
})
export class NewDialogComponent implements OnInit {
  form: FormGroup;
  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<NewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddField
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      type: new FormControl(''),
      dataset: new FormControl(''),
      datatable: new FormControl(''),
      name: new FormControl(''),
      desc: new FormControl(''),
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
  onNextPage() {
    const dialogRef = this.dialog.open(NestedDialogComponent, {
      width: '350px',
    });
  }
}
