import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {

  public loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private http :HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
   loginAdmin(){
    this.http.get<any>("http://localhost:3000/admin")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['admin-dashboard'])
      }else{
        alert("user not found");
      }
    },err=>{
      alert("something went wrong");
    })
  }

}
