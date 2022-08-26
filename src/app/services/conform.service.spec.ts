import { TestBed } from '@angular/core/testing';

import { ConformService } from './conform.service';

describe('ConformService', () => {
  let service: ConformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
