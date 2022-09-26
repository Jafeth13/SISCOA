import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraDayComponent } from './extra-day.component';

describe('ExtraDayComponent', () => {
  let component: ExtraDayComponent;
  let fixture: ComponentFixture<ExtraDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
