import { TestBed } from '@angular/core/testing';

import { ApchartService } from './apchart.service';

describe('ApchartService', () => {
  let service: ApchartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApchartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
