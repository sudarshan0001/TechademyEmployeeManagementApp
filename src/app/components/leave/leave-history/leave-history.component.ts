import { Component, OnInit } from '@angular/core';
import { leave } from 'src/app/models/leave';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {
leaves: leave[] = [];
  constructor(private lea:LeaveService) { }

  ngOnInit(): void {
    this.lea.leaveHistory(localStorage.getItem("userId")).subscribe((res:leave[])=>{
      this.leaves = res
      console.log(this.leaves);
      console.log(typeof(this.leaves))
    },
    err=>{
      console.log(err)
    })
  }

  deleteLeave(id:any){

  }

  requestLeave(){

  }

}
