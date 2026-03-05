import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCities } from './explore-cities';

describe('ExploreCities', () => {
  let component: ExploreCities;
  let fixture: ComponentFixture<ExploreCities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreCities],
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreCities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
