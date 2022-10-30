import { TestBed } from '@angular/core/testing';

import { ActivityServicesService } from './activity-services.service';

describe('ActivityServicesService', () => {
  let service: ActivityServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
