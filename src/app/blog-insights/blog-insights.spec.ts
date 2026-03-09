import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogInsightsComponent } from './blog-insights';

describe('BlogInsights', () => {
  let component: BlogInsightsComponent;
  let fixture: ComponentFixture<BlogInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogInsightsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogInsightsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
