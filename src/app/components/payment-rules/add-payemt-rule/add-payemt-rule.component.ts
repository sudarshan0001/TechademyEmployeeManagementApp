import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-add-payemt-rule',
  templateUrl: './add-payemt-rule.component.html',
  styleUrls: ['./add-payemt-rule.component.css']
})
export class AddPayemtRuleComponent implements OnInit {
  addPaymentForm! : FormGroup;
  constructor(private pay:PaymentService,private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.addPaymentForm = this.fb.group({
      'PaymentRule':['',Validators.required]
    })
  }

  addRule(){
    this.pay.addPayment(this.addPaymentForm.value).subscribe((result:Response)=>{
      console.log(result);
      //alert(result)
      this.router.navigate(['payment-rules'])
    },
    err =>{
      console.log(err)
    })
  }


}
