import { TestBed } from '@angular/core/testing';

import { CurrentchartDemoService } from './currentchart-demo.service';

describe('CurrentchartDemoService', () => {
  let service: CurrentchartDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentchartDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
