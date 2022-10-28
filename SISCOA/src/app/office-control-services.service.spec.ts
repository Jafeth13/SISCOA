import { TestBed } from '@angular/core/testing';

import { OfficeControlServicesService } from './office-control-services.service';

describe('OfficeControlServicesService', () => {
  let service: OfficeControlServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficeControlServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
