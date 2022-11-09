import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  getPaymentRules():Observable<payment[]>{
    return this.http.get<payment[]>(`https://localhost:44378/api/PaymentRules/All-Payment-Rules`)
  }

  deletePayent(id:any):Observable<Response>{
    return this.http.delete<Response>('https://localhost:44378/api/PaymentRules/Delete-Payment-Rule/'+id)
  }

  addPayment(payObj:any):Observable<Response>{
    return this.http.post<Response>(`https://localhost:44378/api/PaymentRules/Add-New-Payment-Rule`,payObj)
  }

  getByID(id:any):Observable<payment>{
    return this.http.get<payment>('https://localhost:44378/api/PaymentRules/Get-By-Id/'+id)
  }
}
