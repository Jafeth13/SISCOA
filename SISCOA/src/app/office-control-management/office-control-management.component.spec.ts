import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeControlManagementComponent } from './office-control-management.component';

describe('OfficeControlManagementComponent', () => {
  let component: OfficeControlManagementComponent;
  let fixture: ComponentFixture<OfficeControlManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeControlManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeControlManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
