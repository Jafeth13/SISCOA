import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlOficeComponent } from './control-ofice.component';

describe('ControlOficeComponent', () => {
  let component: ControlOficeComponent;
  let fixture: ComponentFixture<ControlOficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlOficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlOficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
