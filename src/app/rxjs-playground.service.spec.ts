import { TestBed } from '@angular/core/testing';

import { RxjsPlaygroundService } from './rxjs-playground.service';

describe('RxjsPlaygroundService', () => {
  let service: RxjsPlaygroundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsPlaygroundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
