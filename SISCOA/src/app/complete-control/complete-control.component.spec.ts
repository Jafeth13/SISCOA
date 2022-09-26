import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteControlComponent } from './complete-control.component';

describe('CompleteControlComponent', () => {
  let component: CompleteControlComponent;
  let fixture: ComponentFixture<CompleteControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
