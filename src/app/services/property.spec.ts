import { TestBed } from '@angular/core/testing';

import 

describe('Property', () => {
  let service: Property;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Property);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
