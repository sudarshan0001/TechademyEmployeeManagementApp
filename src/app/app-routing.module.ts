import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddNewDesignationComponent } from './components/designation/add-new-designation/add-new-designation.component';
import { DesignationComponent } from './components/designation/designation/designation.component';
import { HomeComponent } from './components/home/home.component';
import { LeaveHistoryComponent } from './components/leave/leave-history/leave-history.component';
import { LeaveRequestComponent } from './components/leave/leave-request/leave-request.component';
import { LoginComponent } from './components/login/login.component';
import { AddPayemtRuleComponent } from './components/payment-rules/add-payemt-rule/add-payemt-rule.component';
import { EditPaymentRuleComponent } from './components/payment-rules/edit-payment-rule/edit-payment-rule.component';
import { PaymentRulesComponent } from './components/payment-rules/payment-rules/payment-rules.component';
import { AddWorkingHourComponent } from './components/working-hours/add-working-hour/add-working-hour.component';
import { WorkingHoursComponent } from './components/working-hours/working-hours/working-hours.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'home/add-new-employee', component:AddEmployeeComponent},
  {path:'designation', component:DesignationComponent},
  {path:'designation/add-new-designation',component:AddNewDesignationComponent},
  {path:'leave-request',component:LeaveRequestComponent},
  {path:'leave-history',component:LeaveHistoryComponent},
  {path:'payment-rules',component:PaymentRulesComponent},
  {path:'payment-rules/add-new-rule',component:AddPayemtRuleComponent},
  {path:'payment-rules/edit/:id',component:EditPaymentRuleComponent},
  {path:'working-hours',component:WorkingHoursComponent},
  {path:'working-hours/add-new-hour',component:AddWorkingHourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
