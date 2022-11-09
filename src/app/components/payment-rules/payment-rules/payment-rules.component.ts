import { Component, OnInit } from '@angular/core';
import { payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-rules',
  templateUrl: './payment-rules.component.html',
  styleUrls: ['./payment-rules.component.css']
})
export class PaymentRulesComponent implements OnInit {
payments: payment[] =[];
  constructor(private pay:PaymentService) { }

  ngOnInit(): void {
    this.pay.getPaymentRules().subscribe((result:payment[])=>{
      this.payments = result;
      console.log(this.payments)
    },
    err=>{
      console.log(err)
    })
  }

  deleteRule(id:any){
    this.pay.deletePayent(id).subscribe((result:Response)=>{
      console.log(result);
      this.ngOnInit();
    },
    err=>{
      console.log(err)
    })
  }

}
