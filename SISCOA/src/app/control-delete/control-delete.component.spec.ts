import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDeleteComponent } from './control-delete.component';

describe('ControlDeleteComponent', () => {
  let component: ControlDeleteComponent;
  let fixture: ComponentFixture<ControlDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
