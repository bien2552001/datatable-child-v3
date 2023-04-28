import { TestBed } from '@angular/core/testing';

import { Dtsu666Service } from './dtsu666.service';

describe('Dtsu666Service', () => {
  let service: Dtsu666Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dtsu666Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
