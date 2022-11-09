import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-add-new-designation',
  templateUrl: './add-new-designation.component.html',
  styleUrls: ['./add-new-designation.component.css']
})
export class AddNewDesignationComponent implements OnInit {
  addDesignationForm!:FormGroup;
  constructor(private des: DesignationService,private router: Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.addDesignationForm = this.fb.group({
        'DesignationName':['',Validators.required],
        'RoleName':['',Validators.required],
        'DepartmentName':['',Validators.required]
    })
  }

  addDesignation(){
    this.des.addDesignation(this.addDesignationForm.value).subscribe((res:Response)=>
    {
      console.log(res);
      this.router.navigate(['designation'])
    },
    err =>{
      console.log(err)
    })
  }

}
