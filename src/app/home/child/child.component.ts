import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  constructor(private userService: UserService){}
  public onPassingData(): void{
    this.userService.myData = 'Data passed from child component';
  }
}
