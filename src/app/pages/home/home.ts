import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero';
import { FeaturedPropertiesComponent } from '../../featured-properties/featured-properties';
import { WhoWeAreComponent } from '../../who-we-are/who-we-are';
import { HowItWorksComponent } from '../../how-it-works/how-it-works';
import { ExploreCitiesComponent } from '../../explore-cities/explore-cities';
import { BlogInsightsComponent } from '../../blog-insights/blog-insights';
import { FooterComponent } from '../../footer/footer';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,FeaturedPropertiesComponent,WhoWeAreComponent, HowItWorksComponent, ExploreCitiesComponent, BlogInsightsComponent, FooterComponent],
  template: `
  <app-hero></app-hero> 
  <app-featured-properties></app-featured-properties>
  <app-who-we-are></app-who-we-are>
  <app-how-it-works></app-how-it-works>
  <app-explore-cities></app-explore-cities>
  <app-blog-insights></app-blog-insights>
  <app-footer></app-footer>`,
  styleUrl: './home.css',
})
export class Home {}
