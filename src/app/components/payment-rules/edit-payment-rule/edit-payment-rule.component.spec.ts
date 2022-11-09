import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaymentRuleComponent } from './edit-payment-rule.component';

describe('EditPaymentRuleComponent', () => {
  let component: EditPaymentRuleComponent;
  let fixture: ComponentFixture<EditPaymentRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPaymentRuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPaymentRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
