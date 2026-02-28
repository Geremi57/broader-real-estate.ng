import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero';
import { FeaturedPropertiesComponent } from '../../featured-properties/featured-properties';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,FeaturedPropertiesComponent],
  template: ` 
  <app-hero></app-hero> 
  <app-featured-properties></app-featured-properties>`,
  styleUrl: './home.css',
})
export class Home {}
