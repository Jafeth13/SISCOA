import { TestBed } from '@angular/core/testing';

import { ServiceConditionService } from './service-condition.service';

describe('ServiceConditionService', () => {
  let service: ServiceConditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceConditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
