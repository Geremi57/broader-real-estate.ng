import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero';
import { FeaturedPropertiesComponent } from '../../featured-properties/featured-properties';
import { WhoWeAreComponent } from '../../who-we-are/who-we-are';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,FeaturedPropertiesComponent,WhoWeAreComponent],
  template: ` 
  <app-hero></app-hero> 
  <app-featured-properties></app-featured-properties>
  <app-who-we-are></app-who-we-are>`,
  styleUrl: './home.css',
})
export class Home {}
