import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlUpdateComponent } from './control-update.component';

describe('ControlUpdateComponent', () => {
  let component: ControlUpdateComponent;
  let fixture: ComponentFixture<ControlUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
