import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-24 bg-gradient-to-b from-white to-emerald-50/30 overflow-hidden relative">
      <!-- Decorative Background Elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <!-- Left Column - Image with Smooth Transition -->
          <div class="relative order-2 lg:order-1">
            <!-- Image Container -->
            <div class="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-lg mx-auto lg:mx-0 group">
              
              <!-- Current Image with Blur Transition -->
              <div 
                *ngFor="let image of images; let i = index"
                class="absolute inset-0 transition-all duration-1000 ease-in-out"
                [class.opacity-100]="currentImageIndex === i"
                [class.opacity-0]="currentImageIndex !== i"
                [class.scale-110]="currentImageIndex === i && imageTransitioning"
                [class.filter]="imageTransitioning"
                [style.filter]="imageTransitioning ? 'blur(8px)' : 'blur(0)'"
              >
                <img 
                  [src]="image.url" 
                  [alt]="image.alt"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-emerald-900/30"></div>
              
              <!-- Decorative Elements Over Image -->
              <div class="absolute top-6 left-6 right-6 flex justify-between items-start">
                <span class="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                  Since 2010
                </span>
                <span class="bg-emerald-500/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30 flex items-center">
                  <span class="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></span>
                  Trusted
                </span>
              </div>
              
              <!-- Image Counter Dots -->
              
              
              <!-- Floating Stats Card -->
              
            </div>
          </div>

        <div class="order-1 lg:order-2">
          <!-- Right Column - Content -->
            <!-- Section Badge -->
            <div class="text-center mb-12">
              <span class="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                Who we are
              </span>
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Your Trusted Partner <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">In Real Estate</span>
              </h2>
         
            </div>
            
            
            <!-- Main Heading -->
            

            <!-- Description with Highlights -->
            <div class="space-y-4 mb-8">
              <p class="text-lg text-gray-600 leading-relaxed">
                With over a decade of experience in the real estate market, we've helped hundreds of families find their dream homes and make smart investment decisions. Our approach combines local expertise with personalized service.
              </p>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg class="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Expert Negotiators</h4>
                    <p class="text-sm text-gray-500">Getting you the best deals</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg class="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Market Analysis</h4>
                    <p class="text-sm text-gray-500">Data-driven insights</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg class="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Legal Expertise</h4>
                    <p class="text-sm text-gray-500">Smooth transactions</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg class="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">24/7 Support</h4>
                    <p class="text-sm text-gray-500">Always here for you</p>
                  </div>
                </div>
              </div>

              <p class="text-lg text-gray-600 leading-relaxed">
                Whether you're buying your first home, selling a property, or looking for investment opportunities, our team is committed to making your real estate journey seamless and successful.
              </p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap gap-4">
              <a 
                routerLink="/about" 
                class="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span class="absolute inset-0 bg-white/30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span class="relative flex items-center">
                  More About Us
                  <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </span>
              </a>
              
              <a 
                routerLink="/contact" 
                class="bg-white border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                Let's Talk
              </a>
            </div>

            <!-- Trust Badges -->
            
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Smooth image transition styles */
    .filter {
      transition: filter 1s ease-in-out;
    }

    /* Custom animations */
    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0px);
      }
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    /* Responsive adjustments */
    @media (max-width: 1024px) {
      .order-1 {
        order: 1;
      }
      .order-2 {
        order: 2;
      }
    }
  `]
})
export class WhoWeAreComponent implements OnInit, OnDestroy {
  // Images array for the carousel
  images = [
    {
      url: '/assets/modern-residential-building(1)(1).jpg',
      alt: 'modern residential building'
    },
    {
      url: '/assets/mortgage-house-loan-website-login-graphic-concept.jpg',
      alt: 'real estate website'
    },
    {
      url: '/assets/smiling-african-american-woman-near-model-building-table-with-equipments.jpg',
      alt: 'young woman showing building plan'
    },
    {
      url: '/assets/young-couple-buying-new-house-asian-woman-african-man-signing-documents-new-home.jpg',
      alt: 'young couple in a showroom'
    },
     {
      url: '/assets/aerial-view-small-village-country-roadside.jpg',
      alt: 'aerial view of landscape'
    }
  ];

  currentImageIndex = 0;
  imageTransitioning = false;
  private imageInterval: any;

  ngOnInit() {
    this.startImageTransition();
  }

  ngOnDestroy() {
    if (this.imageInterval) {
      clearInterval(this.imageInterval);
    }
  }

  startImageTransition() {
    this.imageInterval = setInterval(() => {
      this.transitionToNextImage();
    }, 5000); // Change image every 5 seconds
  }

  transitionToNextImage() {
    this.imageTransitioning = true;
    
    // Apply blur effect
    setTimeout(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      
      // Remove blur after image changes
      setTimeout(() => {
        this.imageTransitioning = false;
      }, 100);
    }, 500); // Blur duration
  }

  transitionToImage(index: number) {
    if (index === this.currentImageIndex) return;
    
    // Clear the automatic interval temporarily
    clearInterval(this.imageInterval);
    
    this.imageTransitioning = true;
    
    setTimeout(() => {
      this.currentImageIndex = index;
      
      setTimeout(() => {
        this.imageTransitioning = false;
        // Restart the interval
        this.startImageTransition();
      }, 100);
    }, 500);
  }
}