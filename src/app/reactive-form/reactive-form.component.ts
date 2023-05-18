import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  }
  onSubmit() {
    console.log(this.myForm);
  }
}
