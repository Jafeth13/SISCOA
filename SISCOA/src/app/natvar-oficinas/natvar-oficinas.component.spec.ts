import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatvarOficinasComponent } from './natvar-oficinas.component';

describe('NatvarOficinasComponent', () => {
  let component: NatvarOficinasComponent;
  let fixture: ComponentFixture<NatvarOficinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatvarOficinasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NatvarOficinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
