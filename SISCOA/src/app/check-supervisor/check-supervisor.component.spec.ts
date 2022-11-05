import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSupervisorComponent } from './check-supervisor.component';

describe('CheckSupervisorComponent', () => {
  let component: CheckSupervisorComponent;
  let fixture: ComponentFixture<CheckSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckSupervisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
