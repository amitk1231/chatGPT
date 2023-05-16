import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  constructor(private router: Router) {}

  title: string = 'Sign-up Form';

  signupForm1 = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    cpassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  signupUser() {
    console.log(this.signupForm1.value);
    alert('Successfully signed up');
    this.router.navigate(['/home']);
  }
  get name() {
    return this.signupForm1.get('name');
  }
  get email() {
    return this.signupForm1.get('email');
  }
  get password() {
    return this.signupForm1.get('password');
  }
}
