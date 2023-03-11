import { TestBed } from '@angular/core/testing';

import { CaputchaService } from './caputcha.service';

describe('CaputchaService', () => {
  let service: CaputchaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaputchaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
