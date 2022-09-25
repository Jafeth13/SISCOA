import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddControlsOfficesComponent } from './add-controls-offices.component';

describe('AddControlsOfficesComponent', () => {
  let component: AddControlsOfficesComponent;
  let fixture: ComponentFixture<AddControlsOfficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddControlsOfficesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddControlsOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
