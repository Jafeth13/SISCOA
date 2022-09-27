import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeUpdateComponent } from './office-update.component';

describe('OfficeUpdateComponent', () => {
  let component: OfficeUpdateComponent;
  let fixture: ComponentFixture<OfficeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
