import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  employeeData:any;
  
  constructor(private api:ApiService) {
    
   }

  ngOnInit(): void {
 this.api.getUserDetail()
  .subscribe(res=>{
    this.employeeData=res;
  })
  
   
  }

}
