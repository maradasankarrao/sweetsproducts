import { TestBed } from '@angular/core/testing';

import { ServicesweetshopService } from './servicesweetshop.service';

describe('ServicesweetshopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesweetshopService = TestBed.get(ServicesweetshopService);
    expect(service).toBeTruthy();
  });
});
