import { TestBed } from '@angular/core/testing';

import { FilterServicesService } from './filter.service';

describe('FilterServicesService', () => {
  let service: FilterServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
