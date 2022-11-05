import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeManagmentSupComponent } from './office-managment-sup.component';

describe('OfficeManagmentSupComponent', () => {
  let component: OfficeManagmentSupComponent;
  let fixture: ComponentFixture<OfficeManagmentSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeManagmentSupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeManagmentSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
