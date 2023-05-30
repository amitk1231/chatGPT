import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.scss']
})
export class APICallComponent implements OnInit{
  constructor(private apiService: ApiServiceService){}
  users: any = [];
  isTableVisible: boolean = false;
  errorMessage: string;

  ngOnInit(): void {
    // this.fetchData();
  }
  fetchData(){
    this.apiService.getAllUsers().subscribe(data => {
    console.log(data);
    this.users = data;
    this.isTableVisible = true;
   },(err) => {
    this.errorMessage = err;
   })
  }

   
}
