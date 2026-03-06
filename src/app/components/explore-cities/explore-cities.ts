import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-explore-cities',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-24 bg-gradient-to-b from-white to-emerald-50/50 relative overflow-hidden">
      <!-- Decorative Elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-gradient-to-r from-emerald-100/80 to-teal-100/80 backdrop-blur-sm border border-emerald-200/50 rounded-full px-6 py-2.5 mb-6 shadow-lg">
            <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mr-2"></span>
            <span class="text-emerald-800 font-semibold tracking-wider text-sm">DISCOVER KENYA</span>
            <span class="w-2 h-2 bg-teal-500 rounded-full animate-pulse ml-2"></span>
          </div>
          
          <h2 class="text-5xl md:text-6xl font-black mb-4">
            <span class="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Explore Cities
            </span>
          </h2>
          
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your perfect property in Kenya's most vibrant and sought-after locations
          </p>
        </div>

        <!-- Cities Grid - Custom Masonry Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          <!-- Left Large Card - Nairobi -->
          <div class="lg:col-span-2 group relative cursor-pointer" (click)="exploreCity('nairobi')">
            <div class="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <!-- Image with Overlay -->
              <img 
                src="https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TkFJUk9CSXxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Nairobi City Skyline"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/40 to-transparent"></div>
              
              <!-- Content Overlay -->
              <div class="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <!-- City Name with Animated Underline -->
                <h3 class="text-4xl lg:text-5xl font-black text-white mb-3 relative inline-block">
                  Nairobi
                  <span class="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-500"></span>
                </h3>
                
                <!-- Stats -->
                <div class="flex flex-wrap gap-6 text-white/90 mb-4">
                  <div class="flex items-center">
                    <i class="fas fa-building mr-2 text-emerald-400"></i>
                    <span>1,234 properties</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-users mr-2 text-emerald-400"></i>
                    <span>4.5M+ residents</span>
                  </div>
                </div>
                
                <!-- Description -->
                <p class="text-white/80 text-lg max-w-xl mb-6 line-clamp-2">
                  Kenya's bustling capital, where urban sophistication meets authentic African culture. From luxury apartments in Westlands to serene suburbs in Karen.
                </p>
                
                <!-- Explore Button -->
                <button class="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white font-semibold group-hover:bg-white/30 transition-all duration-300">
                  <span>Explore Nairobi</span>
                  <i class="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
                </button>
              </div>
              
              <!-- Top Badge -->
              <div class="absolute top-6 left-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center">
                <i class="fas fa-star mr-1 text-xs"></i>
                MOST POPULAR
              </div>
              
              <!-- Property Count Badge -->
              <div class="absolute top-6 right-6 bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                <i class="fas fa-home mr-1"></i>
                1,234 listings
              </div>
            </div>
          </div>

          <!-- Right Stacked Cards -->
          <div class="lg:col-span-1 flex flex-col gap-6 lg:gap-8">
            
            <!-- Top Right Card - Mombasa -->
            <div class="group relative cursor-pointer h-[240px] lg:h-[285px] rounded-3xl overflow-hidden shadow-2xl" (click)="exploreCity('mombasa')">
              <img 
                src="https://images.unsplash.com/photo-1726397461734-42820573a8a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TU9NQkFTU0F8ZW58MHx8MHx8fDA%3D" 
                alt="Mombasa Beach"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/40 to-transparent"></div>
              
              <!-- Content Overlay -->
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-3xl font-black text-white mb-2 relative inline-block">
                  Mombasa
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-500"></span>
                </h3>
                
                <div class="flex items-center text-white/80 text-sm mb-3">
                  <i class="fas fa-umbrella-beach mr-2 text-emerald-400"></i>
                  <span>Coastal Paradise</span>
                  <span class="mx-2">•</span>
                  <i class="fas fa-home mr-1 text-emerald-400"></i>
                  <span>892 properties</span>
                </div>
                
                <button class="inline-flex items-center text-white/90 hover:text-white group/btn">
                  <span class="text-sm font-medium">Explore</span>
                  <i class="fas fa-arrow-right ml-2 text-xs group-hover/btn:translate-x-2 transition-transform duration-300"></i>
                </button>
              </div>
              
              <!-- Beach Badge -->
              <div class="absolute top-4 right-4 bg-blue-500/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold">
                <i class="fas fa-water mr-1"></i>
                Beach City
              </div>
            </div>

            <!-- Bottom Right Card - Kisumu -->
            <div class="group relative cursor-pointer h-[240px] lg:h-[285px] rounded-3xl overflow-hidden shadow-2xl" (click)="exploreCity('kisumu')">
              <img 
                src="https://images.unsplash.com/photo-1690715408641-fd1d5b8931fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8S0lTVU1VfGVufDB8fDB8fHww" 
                alt="Kisumu Lake Victoria"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/40 to-transparent"></div>
              
              <!-- Content Overlay -->
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-3xl font-black text-white mb-2 relative inline-block">
                  Kisumu
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-500"></span>
                </h3>
                
                <div class="flex items-center text-white/80 text-sm mb-3">
                  <i class="fas fa-ship mr-2 text-emerald-400"></i>
                  <span>Lakeside City</span>
                  <span class="mx-2">•</span>
                  <i class="fas fa-home mr-1 text-emerald-400"></i>
                  <span>456 properties</span>
                </div>
                
                <button class="inline-flex items-center text-white/90 hover:text-white group/btn">
                  <span class="text-sm font-medium">Explore</span>
                  <i class="fas fa-arrow-right ml-2 text-xs group-hover/btn:translate-x-2 transition-transform duration-300"></i>
                </button>
              </div>
              
              <!-- Lake Badge -->
              <div class="absolute top-4 right-4 bg-emerald-500/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold">
                <i class="fas fa-fish mr-1"></i>
                Lake Victoria
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="text-center mt-16">
          <a 
            routerLink="/properties" 
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
          >
            <span>View All Cities</span>
            <i class="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
          </a>
          <p class="text-sm text-gray-500 mt-4">
            <i class="fas fa-map-marker-alt text-emerald-500 mr-1"></i>
            15+ cities across Kenya
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Line clamp utility */
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Smooth hover effects */
    .group:hover img {
      transform: scale(1.1);
    }

    /* Custom animations */
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    /* Responsive height adjustments */
    @media (max-width: 1024px) {
      .lg\:h-\[600px\] {
        height: 500px;
      }
      .lg\:h-\[285px\] {
        height: 240px;
      }
    }
  `]
})
export class ExploreCitiesComponent {
  // Method to handle city exploration
  exploreCity(city: string): void {
    console.log(`Exploring ${city}`);
    // Navigate to city-specific properties page
    // this.router.navigate(['/properties'], { queryParams: { city } });
  }
}