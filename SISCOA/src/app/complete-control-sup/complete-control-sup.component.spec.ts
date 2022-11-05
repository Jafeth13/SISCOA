import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteControlSupComponent } from './complete-control-sup.component';

describe('CompleteControlSupComponent', () => {
  let component: CompleteControlSupComponent;
  let fixture: ComponentFixture<CompleteControlSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteControlSupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteControlSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
