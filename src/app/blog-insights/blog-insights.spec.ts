import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogInsights } from './blog-insights';

describe('BlogInsights', () => {
  let component: BlogInsights;
  let fixture: ComponentFixture<BlogInsights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogInsights],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogInsights);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
