import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
employees: employee[] = [];
  constructor(private emp:EmployeeService, private router:Router,private opt: NavbarComponent) { }

  ngOnInit(){
    // this.opt.refresh();
    this.emp.employeeDetails().subscribe((result:employee[])=>{
      this.employees = result
      console.log(this.employees);
      console.log(result);
      console.log(typeof(this.employees))
// this.opt.refresh();
    },
    err =>{
      console.log(err)
    })
  }

  // addEmployee(){
  //   this.router.navigate(['add-new-employee'])
  // }

  deleteEmployee(id:any){
    this.emp.deleteEmp(id).subscribe((res)=>{
      // this.router.onSameUrlNavigation;
      console.log(res);
      this.ngOnInit();
    },
    err=>{
      console.log(err);
    })
  }

}
