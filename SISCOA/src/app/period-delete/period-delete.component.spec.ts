import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodDeleteComponent } from './period-delete.component';

describe('PeriodDeleteComponent', () => {
  let component: PeriodDeleteComponent;
  let fixture: ComponentFixture<PeriodDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
