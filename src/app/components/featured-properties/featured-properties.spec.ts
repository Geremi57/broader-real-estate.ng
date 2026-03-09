import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { FeaturedPropertiesComponent } from './featured-properties';

describe('FeaturedProperties', () => {
  let component: FeaturedPropertiesComponent;
  let fixture: ComponentFixture<FeaturedPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedPropertiesComponent],
      providers:[
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedPropertiesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
