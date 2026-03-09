import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ExploreCitiesComponent } from './explore-cities';

describe('ExploreCities', () => {
  let component: ExploreCitiesComponent;
  let fixture: ComponentFixture<ExploreCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreCitiesComponent],
      providers:[
        provideRouter([])
    ]
  }).compileComponents();

    fixture = TestBed.createComponent(ExploreCitiesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
