import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DesignationComponent } from './components/designation/designation/designation.component';
import { AddNewDesignationComponent } from './components/designation/add-new-designation/add-new-designation.component';
import { LeaveRequestComponent } from './components/leave/leave-request/leave-request.component';
import { LeaveHistoryComponent } from './components/leave/leave-history/leave-history.component';
import { PaymentRulesComponent } from './components/payment-rules/payment-rules/payment-rules.component';
import { AddPayemtRuleComponent } from './components/payment-rules/add-payemt-rule/add-payemt-rule.component';
import { EditPaymentRuleComponent } from './components/payment-rules/edit-payment-rule/edit-payment-rule.component';
import { WorkingHoursComponent } from './components/working-hours/working-hours/working-hours.component';
import { AddWorkingHourComponent } from './components/working-hours/add-working-hour/add-working-hour.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    AddEmployeeComponent,
    DesignationComponent,
    AddNewDesignationComponent,
    LeaveRequestComponent,
    LeaveHistoryComponent,
    PaymentRulesComponent,
    AddPayemtRuleComponent,
    EditPaymentRuleComponent,
    WorkingHoursComponent,
    AddWorkingHourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
