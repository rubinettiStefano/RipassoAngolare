import { TestBed } from '@angular/core/testing';

import { ParloConBackendService } from './parlo-con-backend.service';

describe('ParloConBackendService', () => {
  let service: ParloConBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParloConBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
