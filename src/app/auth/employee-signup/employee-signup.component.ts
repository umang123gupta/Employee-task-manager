import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder}from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-signup',
  templateUrl: './employee-signup.component.html',
  styleUrls: ['./employee-signup.component.css']
})
export class EmployeeSignupComponent implements OnInit {

  public signupForm:FormGroup;

  constructor(private formbuilder:FormBuilder , private http :HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.formbuilder.group({
      firstname:[''],
      lastname:[''],
      phone:[''],
      doj:[''],
      email:[''],
      password:['']
    })
  }

  signupEmployee(){
    this.http.post<any>("http://localhost:3000/employees",this.signupForm.value)
    .subscribe(res=>{
      alert("Signup Successfull");
      this.signupForm.reset();
      this.router.navigate(['employee-auth']);
    },
    err=>{
      alert("something went wrong")
    })
  }
}
