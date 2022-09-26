import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteControlFillComponent } from './complete-control-fill.component';

describe('CompleteControlFillComponent', () => {
  let component: CompleteControlFillComponent;
  let fixture: ComponentFixture<CompleteControlFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteControlFillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteControlFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
