import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero';
import { FeaturedPropertiesComponent } from '../../featured-properties/featured-properties';
import { WhoWeAreComponent } from '../../who-we-are/who-we-are';
import { HowItWorksComponent } from '../../how-it-works/how-it-works';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,FeaturedPropertiesComponent,WhoWeAreComponent, HowItWorksComponent],
  template: ` 
  <app-hero></app-hero> 
  <app-featured-properties></app-featured-properties>
  <app-who-we-are></app-who-we-are>
  <app-how-it-works></app-how-it-works>`,
  styleUrl: './home.css',
})
export class Home {}
