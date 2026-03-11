import { Routes } from '@angular/router';
import {HomeComponent } from './pages/home/home';
import { PropertiesComponent } from './pages/properties/properties';
import { PropertyDetailComponent } from './pages/properties/property-detail/property-detail';
import { AboutComponent } from './pages/about/about';
export const routes: Routes = [
    {
        path:"",
        component:HomeComponent,
    },
    {
        path: "properties",
        component: PropertiesComponent
    },
    {
        path:"properties/:id/:slug",
        component: PropertyDetailComponent
    },
    {
        path:"about",
        component:AboutComponent

    }
];
