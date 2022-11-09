import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {
leaveRequestForm!:FormGroup;
  constructor(private leave:LeaveService, private router:Router, private fb:FormBuilder) { }
  ngOnInit(): void {
     
    this.leaveRequestForm = this.fb.group({
      'LeaveType':['',Validators.required],
      'LeaveDays':['',Validators.required],
      'FromDate':['',Validators.required],
      'LeaveReason':['',Validators.required],
      'LeaveStatus':['In-Process'],
      'EmployeeId':[localStorage.getItem("userId")]
    })

    // console.log(this.leaveRequestForm.value)

    }
    onRequest(){
      this.leave.leaveRequest(this.leaveRequestForm.value).subscribe((res:Response)=>{
        console.log(res);
        this.ngOnInit();
        
      },
      err=>{
        console.log(err)
      })
    }
  }




