import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableByStatusSupComponent } from './table-by-status-sup.component';

describe('TableByStatusSupComponent', () => {
  let component: TableByStatusSupComponent;
  let fixture: ComponentFixture<TableByStatusSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableByStatusSupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableByStatusSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
