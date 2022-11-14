import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeConditionalComponent } from './see-conditional.component';

describe('SeeConditionalComponent', () => {
  let component: SeeConditionalComponent;
  let fixture: ComponentFixture<SeeConditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeConditionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
