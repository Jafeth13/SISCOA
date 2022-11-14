import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePeriodComponent } from './see-period.component';

describe('SeePeriodComponent', () => {
  let component: SeePeriodComponent;
  let fixture: ComponentFixture<SeePeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeePeriodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
