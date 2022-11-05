import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlBySlopSupComponent } from './control-by-slop-sup.component';

describe('ControlBySlopSupComponent', () => {
  let component: ControlBySlopSupComponent;
  let fixture: ComponentFixture<ControlBySlopSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlBySlopSupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlBySlopSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
