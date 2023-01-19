import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup}from '@angular/forms'
import { CommonService } from 'src/app/shared/common.service';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-employee-auth',
  templateUrl: './employee-auth.component.html',
  styleUrls: ['./employee-auth.component.css']
})
export class EmployeeAuthComponent implements OnInit {

  public loginForm :FormGroup;

  constructor(private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private api:ApiService
   ) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  loginEmployee(){
    this.http.get<any>("http://localhost:3000/employees")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success");
        // console.log(user);
        this.loginForm.reset();
        this.router.navigate(['employee-dashboard']);
        
        this.api.userDetail(user)
        .subscribe(res=>{
          return res;
        })
        
      }else{
        alert("user not found");
      }
    },err=>{
      alert("something went wrong");
    })
  }
}
