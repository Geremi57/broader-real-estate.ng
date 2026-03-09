// Make sure you have the proper imports at the top of property.spec.ts
import { TestBed } from '@angular/core/testing';
import { PropertyService } from '../../../services/property';  // Adjust the path as needed

describe('PropertyService', () => {  // Changed from 'Property' to 'PropertyService'
  let service: PropertyService;  // Changed type to match the import

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});