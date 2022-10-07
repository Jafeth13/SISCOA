import { TestBed } from '@angular/core/testing';

import { ServicesControllersService } from './services-controllers.service';

describe('ServicesControllersService', () => {
  let service: ServicesControllersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesControllersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
