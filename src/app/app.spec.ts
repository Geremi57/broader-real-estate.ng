// src/app/app.spec.ts
import { TestBed } from '@angular/core/testing';
import { App } from './app';  // Make sure this is the correct import
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],  // Only import the component, NOT provideRouter
      providers: [
        provideRouter([])  // provideRouter goes in providers array
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render content', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Check for something that actually exists in your app
    // You might need to adjust this selector based on your actual template
    expect(compiled.querySelector('router-outlet')).toBeTruthy(); 
    // Or check for any content:
    // expect(compiled.textContent).toBeTruthy();
  });
});