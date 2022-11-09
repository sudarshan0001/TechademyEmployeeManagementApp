import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
addEmployeeForm! : FormGroup;
response : string = '';
  constructor(private emp:EmployeeService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.addEmployeeForm = this.fb.group({
      'EmployeeName' :['', Validators.required],
      'EmployeeEmail':['', Validators.required],
      'EmployeeGender':['',Validators.required],
      'EmployeeDOB':['',Validators.required],
      'EmployeeContact':['',Validators.required],
      'EmployeeAddress':['',Validators.required],
      'EmployeeDesignation':['',Validators.required],
      'EmployeeImage':['',Validators.required],
      'Password':['',Validators.required]
    })
  }

  onAddEmp(){
   // console.log(this.addEmployeeForm.value)
    this.emp.addEmp(this.addEmployeeForm.value).subscribe((res:Response)=>{
      this.response = res.toString();
      console.log(res);
      this.router.navigate(['home']);
    },
    err =>{
      console.log(err)
    })
  }

}
