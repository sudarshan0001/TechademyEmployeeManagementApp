import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { designation } from 'src/app/models/designation';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
designations: designation[] = [];
  constructor(private des:DesignationService,private router: Router) { }

  ngOnInit(): void {
    this.des.getDesignations().subscribe((res:designation[])=>{
      this.designations = res
      console.log(this.designations)
    },
    err => {
      console.log(err)
    })
  }

  // designation(){
  //   this.router.navigate(['add-new-designation'])
  // }

  deleteDesignation(id: any){
    this.des.deleteDesignation(id).subscribe((res:Response)=>
    {
      console.log(res);
      this.ngOnInit();
    },
    err=>{
      console.log(err)
    })
  }

}
