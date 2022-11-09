import { Component, OnInit } from '@angular/core';
import { workingHour } from 'src/app/models/working-hour';
import { WorkingHoursService } from 'src/app/services/working-hours.service';

@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrls: ['./working-hours.component.css']
})
export class WorkingHoursComponent implements OnInit {
hours: workingHour[] =[];
  constructor(private workingHourServices:WorkingHoursService) { }

  ngOnInit(): void {
    this.workingHourServices.getWorkingHours(localStorage.getItem("userId")).subscribe((result:workingHour[])=>{
      this.hours = result;
      console.log(this.hours);
    },
    err =>{
      console.log(err)
    })
  }

}
