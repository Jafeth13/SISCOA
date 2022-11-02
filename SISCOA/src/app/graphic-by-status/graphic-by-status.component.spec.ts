import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicByStatusComponent } from './graphic-by-status.component';

describe('GraphicByStatusComponent', () => {
  let component: GraphicByStatusComponent;
  let fixture: ComponentFixture<GraphicByStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicByStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
