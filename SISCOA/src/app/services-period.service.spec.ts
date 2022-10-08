import { TestBed } from '@angular/core/testing';

import { ServicesPeriodService } from './services-period.service';

describe('ServicesPeriodService', () => {
  let service: ServicesPeriodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesPeriodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
