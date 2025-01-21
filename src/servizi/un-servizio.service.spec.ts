import { TestBed } from '@angular/core/testing';

import { UnServizioService } from './un-servizio.service';

describe('UnServizioService', () => {
  let service: UnServizioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnServizioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
