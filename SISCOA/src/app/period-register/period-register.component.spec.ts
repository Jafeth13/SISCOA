import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodRegisterComponent } from './period-register.component';

describe('PeriodRegisterComponent', () => {
  let component: PeriodRegisterComponent;
  let fixture: ComponentFixture<PeriodRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
