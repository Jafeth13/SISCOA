import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlOficeNewComponent } from './control-ofice-new.component';

describe('ControlOficeNewComponent', () => {
  let component: ControlOficeNewComponent;
  let fixture: ComponentFixture<ControlOficeNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlOficeNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlOficeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
