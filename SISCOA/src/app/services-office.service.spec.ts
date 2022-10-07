import { TestBed } from '@angular/core/testing';

import { ServicesOfficeService } from './services-office.service';

describe('ServicesOfficeService', () => {
  let service: ServicesOfficeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesOfficeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
