import { TestBed } from '@angular/core/testing';

import { PermisionServicesService } from './permision-services.service';

describe('PermisionServicesService', () => {
  let service: PermisionServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisionServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
