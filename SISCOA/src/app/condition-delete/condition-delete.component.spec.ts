import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionDeleteComponent } from './condition-delete.component';

describe('ConditionDeleteComponent', () => {
  let component: ConditionDeleteComponent;
  let fixture: ComponentFixture<ConditionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
