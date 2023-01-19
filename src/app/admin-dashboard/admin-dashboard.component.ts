import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from '../shared/employee-dashboard.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  formValue:FormGroup;
  employeeModelObj:EmployeeModel = new EmployeeModel();
  employeeData :any;
  showAdd:boolean;
  showUpdate:boolean;

  constructor(private formbuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
   this.formValue=this.formbuilder.group({
    firstname:[''],
    lastname:[''],
    email:[''],
    phone:[''],
    doj:[''],
    designation:[''],
    manager:[''],
    ctc:[''],
    password:[''],
    status:['']
   })
   this.getAllEmployee();
  }

  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

postEmployeeDetails(){
  this.employeeModelObj.firstname=this.formValue.value.firstname;
  this.employeeModelObj.lastname=this.formValue.value.lastname;
  this.employeeModelObj.email=this.formValue.value.email;
  this.employeeModelObj.phone=this.formValue.value.phone;
  this.employeeModelObj.doj=this.formValue.value.doj;
  this.employeeModelObj.designation=this.formValue.value.designation;
  this.employeeModelObj.manager=this.formValue.value.manager;
  this.employeeModelObj.ctc=this.formValue.value.ctc;
  this.employeeModelObj.password=this.formValue.value.password;
  this.employeeModelObj.status=this.formValue.value.status;

  this.api.postEmployee(this.employeeModelObj)
  .subscribe(res=>{
    console.log(res);
    alert("Employee Added Successfully");
    let ref=document.getElementById('cancel');
    ref?.click();
    this.formValue.reset();
    this.getAllEmployee();
  },
  err=>{
    alert("something went wrong");
  })
}

getAllEmployee(){
  this.api.getEmployee()
  .subscribe(res=>{
    this.employeeData=res;
  })
}

deleteEmployee(row:any){
  this.api.deleteEmployee(row.id)
  .subscribe(res=>{
    alert("Employee Deleted");
    this.getAllEmployee();
  })
}

onEdit(row:any){
  this.showAdd=false;
  this.showUpdate=true;

  this.employeeModelObj.id=row.id;
  this.formValue.controls['firstname'].setValue(row.firstname);
  this.formValue.controls['lastname'].setValue(row.lastname);
  this.formValue.controls['email'].setValue(row.email);
  this.formValue.controls['phone'].setValue(row.phone);
  this.formValue.controls['doj'].setValue(row.doj);
  this.formValue.controls['designation'].setValue(row.designation);
  this.formValue.controls['manager'].setValue(row.manager);
  this.formValue.controls['ctc'].setValue(row.ctc);
  this.formValue.controls['password'].setValue(row.password);
  this.formValue.controls['status'].setValue(row.status);
}

updateEmployeeDetails(){
  this.employeeModelObj.firstname=this.formValue.value.firstname;
  this.employeeModelObj.lastname=this.formValue.value.lastname;
  this.employeeModelObj.email=this.formValue.value.email;
  this.employeeModelObj.phone=this.formValue.value.phone;
  this.employeeModelObj.doj=this.formValue.value.doj;
  this.employeeModelObj.designation=this.formValue.value.designation;
  this.employeeModelObj.manager=this.formValue.value.manager;
  this.employeeModelObj.ctc=this.formValue.value.ctc;
  this.employeeModelObj.password=this.formValue.value.password;
  this.employeeModelObj.status=this.formValue.value.status;

  this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
  .subscribe(res=>{
    alert("Updated Successfully");
    let ref=document.getElementById('cancel');
    ref?.click();
    this.formValue.reset();
    this.getAllEmployee();
  })
}

}
