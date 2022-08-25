import { TestBed } from '@angular/core/testing';

import { NewProdectService } from './new-prodect.service';

describe('NewProdectService', () => {
  let service: NewProdectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewProdectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
