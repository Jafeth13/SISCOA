import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionUpdateComponent } from './condition-update.component';

describe('ConditionUpdateComponent', () => {
  let component: ConditionUpdateComponent;
  let fixture: ComponentFixture<ConditionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
