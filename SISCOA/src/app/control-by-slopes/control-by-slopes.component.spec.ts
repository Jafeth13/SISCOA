import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlBySlopesComponent } from './control-by-slopes.component';

describe('ControlBySlopesComponent', () => {
  let component: ControlBySlopesComponent;
  let fixture: ComponentFixture<ControlBySlopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlBySlopesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlBySlopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
