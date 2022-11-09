import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { result } from 'src/app/models/result';
import { EmployeeService } from 'src/app/services/employee.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm! : FormGroup;
results: result[] = [];
invalidLogin: boolean = false;

  constructor(private emp:EmployeeService, private  fb:FormBuilder,private router:Router,private opt:AppComponent) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : ['',Validators.required],
      password: ['',Validators.required]
    })  }

    onlogin(){
      this.emp.login(this.loginForm.value).subscribe((res:result[])=>{
        this.results = res
        console.log(this.results);
        this.invalidLogin = false;
        this.router.navigate(['home']);
        const Token = (<any>res).token;
        localStorage.setItem("jwt",Token);
        const userId = (<any>res).userId;
        localStorage.setItem("userId",userId);
      },
      err =>
      {
        this.invalidLogin = true;
      })
    }

}
