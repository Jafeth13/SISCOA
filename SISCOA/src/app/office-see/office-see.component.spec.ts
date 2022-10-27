import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeSeeComponent } from './office-see.component';

describe('OfficeSeeComponent', () => {
  let component: OfficeSeeComponent;
  let fixture: ComponentFixture<OfficeSeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeSeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
