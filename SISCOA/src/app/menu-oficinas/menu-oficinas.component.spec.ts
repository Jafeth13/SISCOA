import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOficinasComponent } from './menu-oficinas.component';

describe('MenuOficinasComponent', () => {
  let component: MenuOficinasComponent;
  let fixture: ComponentFixture<MenuOficinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOficinasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuOficinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
