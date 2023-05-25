import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  constructor(private router: Router, private userService: UserService) {}

  title: string = 'Sign-up Form';
  isActivated: boolean = false;
  formBuilder: FormBuilder;
  newUser: object;

  addUserForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    designation: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9 ]*'),
    ]),
  });

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

  onActivate() {
    this.userService.activatedEmitter.emit(true);
    console.log('Activated!');
  }

  onSubmit() {
    console.log(this.addUserForm.value);
    let Form1 = JSON.stringify(this.addUserForm.value);
    this.userService.addNewUser(Form1).subscribe((response: any) => {
      console.log(response);
      this.newUser = response;
    });
  }
}
