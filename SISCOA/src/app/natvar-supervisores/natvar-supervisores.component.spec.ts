import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatvarSupervisoresComponent } from './natvar-supervisores.component';

describe('NatvarSupervisoresComponent', () => {
  let component: NatvarSupervisoresComponent;
  let fixture: ComponentFixture<NatvarSupervisoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatvarSupervisoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NatvarSupervisoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
