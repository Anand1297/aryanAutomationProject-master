import { TestBed } from '@angular/core/testing';

import { MainProductsService } from './main-products.service';

describe('MainProductsService', () => {
  let service: MainProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
