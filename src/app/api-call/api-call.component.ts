import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.scss'],
})
export class APICallComponent implements OnInit {
  users: any = [];
  constructor(private apiService: ApiServiceService) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isTableVisible: boolean = false;
  errorMessage: string;
  // dataSource: MatTableDataSource<>;

  fetchData() {
    this.apiService.getAllUsers().subscribe(
      (data) => {
        console.log(data);
        this.users = data;
        this.isTableVisible = true;
      },
      (err) => {
        this.errorMessage = err;
      }
    );
  }

  ngOnInit(): void {
    // this.fetchData();
  }
  ngAfterViewInit() {
    this.users.paginator = this.paginator;
  }
}
