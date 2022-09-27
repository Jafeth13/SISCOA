import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionRegisterComponent } from './permission-register.component';

describe('PermissionRegisterComponent', () => {
  let component: PermissionRegisterComponent;
  let fixture: ComponentFixture<PermissionRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermissionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
