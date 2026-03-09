import { TestBed } from '@angular/core/testing';
import { PropertyService } from './property';  // Add this import - adjust path if needed

describe('PropertyService', () => {  // Changed from 'Property' to 'PropertyService'
  let service: PropertyService;  // Changed type to PropertyService

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyService);  // Changed to PropertyService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});