import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-edit-payment-rule',
  templateUrl: './edit-payment-rule.component.html',
  styleUrls: ['./edit-payment-rule.component.css']
})
export class EditPaymentRuleComponent implements OnInit {
  editPaymentForm!:FormGroup;
paymentDetails: payment = {
  paymentId:0,
  paymentRule:''
};
  constructor(private route:ActivatedRoute,private pay:PaymentService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');
        if(id){
          this.pay.getByID(id).subscribe({
            next:(response)=>{
              this.paymentDetails=response;
              console.log(this.paymentDetails);
            }
          })
        }
      }
    })

this.editPaymentForm = this.fb.group({
  'PayementId':[this.paymentDetails.paymentId],
  'PaymentRule':[this.paymentDetails.paymentRule]
})

  }

}
