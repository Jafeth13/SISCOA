import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePermisionComponent } from './see-permision.component';

describe('SeePermisionComponent', () => {
  let component: SeePermisionComponent;
  let fixture: ComponentFixture<SeePermisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeePermisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeePermisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
