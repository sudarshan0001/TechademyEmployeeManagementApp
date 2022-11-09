import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPayemtRuleComponent } from './add-payemt-rule.component';

describe('AddPayemtRuleComponent', () => {
  let component: AddPayemtRuleComponent;
  let fixture: ComponentFixture<AddPayemtRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPayemtRuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPayemtRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
