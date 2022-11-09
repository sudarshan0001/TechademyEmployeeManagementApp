import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkingHoursService } from 'src/app/services/working-hours.service';

@Component({
  selector: 'app-add-working-hour',
  templateUrl: './add-working-hour.component.html',
  styleUrls: ['./add-working-hour.component.css']
})
export class AddWorkingHourComponent implements OnInit {
addWorkingHour!:FormGroup;
  constructor(private workingHoursServices:WorkingHoursService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.addWorkingHour = this.fb.group({
      'YearMonth':['',Validators.required],
      'CompanyHours':['',Validators.required],
      'HoursWorked':['',Validators.required],
      'EmployeeId':['',Validators.required]
    })
  }

  addNewWorkingHour(){
    this.workingHoursServices.addWorkingHours(this.addWorkingHour.value).subscribe((result:Response)=>{
      console.log(result);
      this.router.navigate(['working-hours'])
    },
    err=>{
      console.log(err)
    })
  }

}
