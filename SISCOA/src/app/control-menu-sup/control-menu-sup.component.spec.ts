import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlMenuSupComponent } from './control-menu-sup.component';

describe('ControlMenuSupComponent', () => {
  let component: ControlMenuSupComponent;
  let fixture: ComponentFixture<ControlMenuSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlMenuSupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlMenuSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
