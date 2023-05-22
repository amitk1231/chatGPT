import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  title = 'Reactive Form';
  maxDate = new Date();
  myForm: FormGroup;
  NAME_VALIDATOR = '[a-zA-Z]*';
  myControl: FormControl = new FormControl();
  valueChangesSubscription: Subscription;

  constructor(private dialog: MatDialog) {}

  // A validator is a function like required(), min(), max()
  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern(this.NAME_VALIDATOR),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern(this.NAME_VALIDATOR),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      desc: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9 ]*'),
      ]),
      dob: new FormControl(),
      gender: new FormControl(),
    });

    this.myForm.get('firstname').valueChanges.subscribe((data) => {
      // console.log(`Input field value changed: ${data}`);
    });

    this.myForm.markAsPristine();
    this.myForm.markAsUntouched();

    this.myForm.get(`email`).valueChanges.subscribe((data) => {
      // console.log(data));
    });
  }
  onSubmit() {
    console.log(this.myForm);
  }
}
