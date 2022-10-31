import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeControlFullComponent } from './see-control-full.component';

describe('SeeControlFullComponent', () => {
  let component: SeeControlFullComponent;
  let fixture: ComponentFixture<SeeControlFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeControlFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeControlFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
