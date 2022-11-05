import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddControlSupComponent } from './add-control-sup.component';

describe('AddControlSupComponent', () => {
  let component: AddControlSupComponent;
  let fixture: ComponentFixture<AddControlSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddControlSupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddControlSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
