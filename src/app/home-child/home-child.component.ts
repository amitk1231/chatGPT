import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.scss'],
})
export class HomeChildComponent {
  constructor(private userService: UserService) {}

  // public onPassingData(): void {
  //   this.userService.myData = 'This data is coming from child component';
  // }
}
