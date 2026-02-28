import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Hero Section with Background Image -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <img
          src="/assets/hero-bg.jpg" 
          alt="Luxury property background" 
          class="w-full h-full object-cover"
        />
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-emerald-900/70 via-emerald-800/60 to-teal-900/70 mix-blend-multiply"></div>
        <!-- Animated overlay pattern -->
        <div class="absolute inset-0 opacity-10">
<div class="absolute inset-0 pattern-overlay"></div>        </div>
      </div>

      <!-- Content Container -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <!-- Badge -->
        <div class="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in-down">
          <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-2"></span>
          <span class="text-white/90 text-sm font-medium tracking-wide">PREMIUM REAL ESTATE</span>
        </div>

        <!-- Main Heading -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
          Discover Your <span class="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Dream Home</span>
        </h1>
        
        <!-- Subheading -->
        <p class="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          Luxury living meets comfort. Find the perfect property that matches your lifestyle.
        </p>

        <!-- Search Form Container -->
        <div class="max-w-5xl mx-auto animate-fade-in-up animation-delay-400">
          <form
            (ngSubmit)="onSearch()" 
            #searchForm="ngForm"
            class="bg-white/10 backdrop-blur-xl rounded-3xl p-1 shadow-2xl border border-white/20"
          >
            <div class="grid grid-cols-1 md:grid-cols-12 gap-1">
              
              <!-- Property Type Select (To Let/To Buy) -->
              <div class="md:col-span-3 relative group">
                <div class="relative bg-white/20 hover:bg-white/30 transition-all duration-300 rounded-2xl md:rounded-r-none overflow-hidden">
                  <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-400 to-teal-400"></div>
                  <select 
                    [(ngModel)]="searchParams.propertyType"
                    name="propertyType"
                    class="w-full h-16 pl-6 pr-10 bg-transparent text-white font-medium appearance-none cursor-pointer focus:outline-none"
                    style="background: transparent;"
                  >
                    <option value="to-let" class="bg-emerald-900 text-white">To Let</option>
                    <option value="to-buy" class="bg-emerald-900 text-white">To Buy</option>
                    <option value="shortlet" class="bg-emerald-900 text-white">Short Let</option>
                  </select>
                  <!-- Custom dropdown arrow -->
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg class="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Category Select -->
              <div class="md:col-span-3 relative group">
                <div class="relative bg-white/20 hover:bg-white/30 transition-all duration-300 rounded-2xl md:rounded-r-none overflow-hidden">
                  <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-400 to-teal-400"></div>
                  <select 
                    [(ngModel)]="searchParams.category"
                    name="category"
                    class="w-full h-16 pl-6 pr-10 bg-transparent text-white font-medium appearance-none cursor-pointer focus:outline-none"
                    style="background: transparent;"
                  >
                    <option value="residential" class="bg-emerald-900 text-white">Residential</option>
                    <option value="commercial" class="bg-emerald-900 text-white">Commercial</option>
                    <option value="industrial" class="bg-emerald-900 text-white">Industrial</option>
                    <option value="land" class="bg-emerald-900 text-white">Land</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg class="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Location Input with Icon -->
              <div class="md:col-span-4 relative group">
                <div class="relative bg-white/20 hover:bg-white/30 transition-all duration-300 rounded-2xl md:rounded-r-none overflow-hidden">
                  <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-400 to-teal-400"></div>
                  <div class="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
                    <svg class="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <input 
                    type="text"
                    [(ngModel)]="searchParams.location"
                    name="location"
                    placeholder="Enter location..."
                    class="w-full h-16 pl-14 pr-4 bg-transparent text-white placeholder-white/50 font-medium focus:outline-none"
                  />
                </div>
              </div>

              <!-- Search Button -->
              <div class="md:col-span-2">
                <button 
                  type="submit"
                  class="group relative w-full h-16 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                >
                  <!-- Animated background effect -->
                  <span class="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  
                  <!-- Button content -->
                  <span class="relative flex items-center justify-center space-x-2">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                    <span>SEARCH</span>
                  </span>
                </button>
              </div>
            </div>
          </form>

          <!-- Popular Searches -->
          <div class="mt-6 flex flex-wrap items-center justify-center gap-3 text-white/70">
            <span class="text-sm font-medium">Popular:</span>
            <button 
              *ngFor="let location of popularLocations" 
              (click)="setLocation(location)"
              class="px-4 py-2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full text-sm transition-all duration-300 hover:scale-105 border border-white/20"
            >
              {{ location }}
            </button>
          </div>
        </div>

        <!-- Stats Section -->
        

        <!-- Scroll Indicator -->
      
      </div>
    </section>
  `,
  styles: [`
    @reference "tailwindcss";

    :host {
      display: block;
    }

    /* Custom animations */
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes scroll {
      0% {
        transform: translateY(0);
        opacity: 1;
      }
      100% {
        transform: translateY(20px);
        opacity: 0;
      }
    }

    .animate-fade-in-down {
      animation: fadeInDown 1s ease-out;
    }

    .animate-fade-in-up {
      animation: fadeInUp 1s ease-out;
    }

    .animation-delay-200 {
      animation-delay: 200ms;
    }

    .animation-delay-400 {
      animation-delay: 400ms;
    }

    .animate-scroll {
      animation: scroll 2s infinite;
    }

    .pattern-overlay {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: 60px 60px;
}

    /* Form input styles */
    select option {
      background-color: #064e3b;
      color: white;
    }

    /* Custom focus styles */
    select:focus, input:focus {
      outline: none;
      ring: 2px solid #10b981;
    }

    /* Glass morphism enhancements */
    .backdrop-blur-xl {
      backdrop-filter: blur(20px);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .grid > div {
        margin-bottom: 4px;
      }
      
      .grid > div:last-child {
        margin-bottom: 0;
      }
    }
  `]
})
export class HeroComponent {
  // Search parameters model
  searchParams = {
    propertyType: 'to-let',
    category: 'residential',
    location: ''
  };

  // Popular locations for quick search
  popularLocations: string[] = [
    'Nairobi',
    'Kiambu',
    'Mombasa',
    'Kisumu',
    'Nakuru'
  ];

  // Statistics display
  stats = [
    { value: '500+', label: 'Properties' },
    { value: '250+', label: 'Happy Clients' },
    { value: '50+', label: 'Cities' },
    { value: '15+', label: 'Years Experience' }
  ];

  /**
   * Handle search form submission
   */
  onSearch(): void {
    console.log('Search params:', this.searchParams);
    // Implement your search logic here
    // This could navigate to properties page with filters
  }

  /**
   * Set location from popular search
   */
  setLocation(location: string): void {
    this.searchParams.location = location;
    // Optional: automatically trigger search
    // this.onSearch();
  }
}