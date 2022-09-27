import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeRegisterComponent } from './office-register.component';

describe('OfficeRegisterComponent', () => {
  let component: OfficeRegisterComponent;
  let fixture: ComponentFixture<OfficeRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
