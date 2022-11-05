import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraDaySupComponent } from './extra-day-sup.component';

describe('ExtraDaySupComponent', () => {
  let component: ExtraDaySupComponent;
  let fixture: ComponentFixture<ExtraDaySupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraDaySupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraDaySupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
