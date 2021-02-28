import { TestBed } from '@angular/core/testing';

import { FechaFormatC#Service } from './fecha-format-c#.service';

describe('FechaFormatC#Service', () => {
  let service: FechaFormatC#Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FechaFormatC#Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
