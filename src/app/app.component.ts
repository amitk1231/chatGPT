import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chatGPT';
  links = [
    { path: '/home', label: 'Home', active: 'button-active' },
    { path: '/chat', label: 'Chat', active: 'button-active' },
    { path: '/signin', label: 'Signin', active: 'button-active' },
    { path: '/view-child', label: 'ViewChild', active: 'button-active'}
  ];
}
