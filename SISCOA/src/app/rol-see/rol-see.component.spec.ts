import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolSeeComponent } from './rol-see.component';

describe('RolSeeComponent', () => {
  let component: RolSeeComponent;
  let fixture: ComponentFixture<RolSeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolSeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
