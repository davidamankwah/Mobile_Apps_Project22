import { TestBed } from '@angular/core/testing';

import { DceuService } from './dceu.service';

describe('DceuService', () => {
  let service: DceuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DceuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
