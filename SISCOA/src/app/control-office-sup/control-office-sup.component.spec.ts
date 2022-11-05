import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlOfficeSupComponent } from './control-office-sup.component';

describe('ControlOfficeSupComponent', () => {
  let component: ControlOfficeSupComponent;
  let fixture: ComponentFixture<ControlOfficeSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlOfficeSupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlOfficeSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
