import { TestBed } from '@angular/core/testing';

import { ServicesRolService } from './services-rol.service';

describe('ServicesRolService', () => {
  let service: ServicesRolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesRolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
