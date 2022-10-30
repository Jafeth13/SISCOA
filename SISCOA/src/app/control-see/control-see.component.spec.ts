import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSeeComponent } from './control-see.component';

describe('ControlSeeComponent', () => {
  let component: ControlSeeComponent;
  let fixture: ComponentFixture<ControlSeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlSeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
