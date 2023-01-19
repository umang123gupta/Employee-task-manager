import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit  { 

  employeeData:any;
  date :Date=new Date();
  previousDate :Date=new Date();
  

  constructor(private api:ApiService){}

ngOnInit(): void {
  
  this.api.getUserDetail()
  .subscribe(res=>{
    this.employeeData=res;
  })
  this.previousDate.setDate(this.previousDate.getDate()-1);

  this.previousDate.setDate(this.previousDate.getDate()+2);
}

}
