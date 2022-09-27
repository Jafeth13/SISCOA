import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionRegisterComponent } from './condition-register.component';

describe('ConditionRegisterComponent', () => {
  let component: ConditionRegisterComponent;
  let fixture: ComponentFixture<ConditionRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
