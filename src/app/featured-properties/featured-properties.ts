import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-properties',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-gradient-to-b from-emerald-50 via-white to-emerald-50/30 overflow-hidden relative">
      <!-- Decorative Elements -->
      <div class="absolute top-0 left-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Section Header with Animation -->
          <div class="text-center mb-12">
          <span class="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            FEATURED PROPERTIES
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Our <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Premium Listings</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore hand-picked properties that exemplify luxury, comfort, and exceptional value.
          </p>
        </div>

        <!-- Scroll Controls with Enhanced Design -->
        <div class="hidden md:flex justify-between items-center mb-8">
          <!-- <div class="flex items-center space-x-2">
            <span class="text-sm text-gray-500">Auto-scrolling</span>
            <div class="relative">
              <div class="w-12 h-6 bg-emerald-200 rounded-full flex items-center p-1">
                <div class="w-4 h-4 bg-emerald-600 rounded-full transform transition-transform duration-300"
                     [class.translate-x-6]="autoScrollEnabled"
                     [class.translate-x-0]="!autoScrollEnabled"></div>
              </div>
            </div>
          </div> -->
          
          <div class="flex space-x-3">
            <button 
              (click)="scrollLeft()"
              class="w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-2xl text-emerald-600 hover:text-emerald-700 transition-all duration-500 flex items-center justify-center group disabled:opacity-30 disabled:cursor-not-allowed border border-emerald-100 hover:border-emerald-300"
              [disabled]="!canScrollLeft"
              aria-label="Scroll left"
            >
              <svg class="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button 
              (click)="scrollRight()"
              class="w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-2xl text-emerald-600 hover:text-emerald-700 transition-all duration-500 flex items-center justify-center group disabled:opacity-30 disabled:cursor-not-allowed border border-emerald-100 hover:border-emerald-300"
              [disabled]="!canScrollRight"
              aria-label="Scroll right"
            >
              <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Properties Container with Enhanced Cards -->
        <div 
          #scrollContainer
          class="flex overflow-x-auto scroll-smooth gap-8 pb-12 pt-4 px-2 hide-scrollbar"
          (scroll)="onScroll()"
          (touchstart)="onTouchStart($event)"
          (touchmove)="onTouchMove($event)"
          (touchend)="onTouchEnd()"
          (mousedown)="onMouseDown($event)"
          (mousemove)="onMouseMove($event)"
          (mouseup)="onMouseUp()"
          (mouseleave)="onMouseLeave()"
          (wheel)="onUserInteraction()"
        >
          <!-- Property Cards - Slightly Larger -->
          <div *ngFor="let property of featuredProperties; let i = index" 
               class="flex-none w-[320px] sm:w-[340px] md:w-[360px] group relative"
               [attr.data-index]="i"
               (mouseenter)="onUserInteraction()">
            
            <!-- Card Glow Effect -->
            <div class="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            
            <!-- Main Card -->
            <div class="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-emerald-100/50 hover:border-emerald-200 h-full transform hover:-translate-y-2">
              
              <!-- Property Image with Enhanced Badges -->
              <div class="relative h-56 overflow-hidden">
                <img 
                  [src]="property.image" 
                  [alt]="property.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                <!-- Property Type Badge with Icon -->
                <div class="absolute top-4 left-4 flex items-center space-x-2">
                  <span class="px-4 py-2 bg-white/95 backdrop-blur-sm text-emerald-700 text-xs font-bold rounded-full shadow-lg flex items-center border border-emerald-200">
                    <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"/>
                    </svg>
                    {{ property.type }}
                  </span>
                </div>
                
                <!-- Price Badge -->
                <div class="absolute top-4 right-4">
                  <span class="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-lg font-bold rounded-full shadow-lg flex items-center">
                    \${{ property.price }}k
                  </span>
                </div>
                
                <!-- Featured Badge with Animation -->
                <div class="absolute bottom-4 left-4">
                  <span class="px-3 py-1.5 bg-amber-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center animate-pulse">
                    <svg class="w-3 h-3 mr-1 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    FEATURED
                  </span>
                </div>
              </div>

              <!-- Property Details - Enhanced -->
              <div class="p-6">
                <!-- Title and Quick Actions -->
                <div class="flex justify-between items-start mb-3">
                  <h3 class="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-emerald-600 transition-colors duration-300">
                    {{ property.title }}
                  </h3>
                  <button class="text-gray-400 hover:text-red-500 transition-colors duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                  </button>
                </div>

                <!-- Location with Enhanced Icon -->
                <div class="flex items-center text-gray-500 text-sm mb-4">
                  <svg class="w-4 h-4 mr-1.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span class="line-clamp-1 font-medium">{{ property.location }}</span>
                </div>

                <!-- Features Grid - Enhanced -->
                <div class="grid grid-cols-3 gap-3 mb-5">
                  <!-- Bedrooms -->
                  <div class="flex items-center text-gray-600 bg-emerald-50/50 rounded-lg px-2 py-1.5">
                    <svg class="w-4 h-4 mr-1.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                    </svg>
                    <span class="text-xs font-semibold">{{ property.bedrooms }} Beds</span>
                  </div>
                  
                  <!-- Bathrooms -->
                  <div class="flex items-center text-gray-600 bg-emerald-50/50 rounded-lg px-2 py-1.5">
                    <svg class="w-4 h-4 mr-1.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                    </svg>
                    <span class="text-xs font-semibold">{{ property.bathrooms }} Baths</span>
                  </div>
                  
                  <!-- Area -->
                  <div class="flex items-center text-gray-600 bg-emerald-50/50 rounded-lg px-2 py-1.5">
                    <svg class="w-4 h-4 mr-1.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                    </svg>
                    <span class="text-xs font-semibold">{{ property.area }} sqft</span>
                  </div>
                </div>

                <!-- Divider with Gradient -->
                <div class="relative my-4">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-emerald-100"></div>
                  </div>
                  <div class="relative flex justify-center">
                    <span class="px-3 bg-white text-emerald-500 text-xs">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </span>
                  </div>
                </div>

                <!-- Footer with Agent and Action - Enhanced -->
                <div class="flex items-center justify-between">
                  <div class="flex items-center group/agent">
                    <div class="relative">
                      <img 
                        [src]="property.agent.avatar" 
                        [alt]="property.agent.name"
                        class="w-10 h-10 rounded-full border-2 border-emerald-200 group-hover/agent:border-emerald-400 transition-colors duration-300"
                      />
                      <span class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                    <div class="ml-3">
                      <p class="text-xs text-gray-500">Agent</p>
                      <p class="text-sm font-semibold text-gray-700 group-hover/agent:text-emerald-600 transition-colors duration-300">
                        {{ property.agent.name }}
                      </p>
                    </div>
                  </div>
                  
                  <button class="group/btn relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <span class="absolute inset-0 bg-white/30 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
                    <span class="relative flex items-center">
                      View Details
                      <svg class="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced Scroll Indicators -->
        <div class="flex justify-center items-center mt-8 space-x-4">
          <!-- Progress Bar -->
        
          
          <!-- Dot Indicators -->
          <div class="flex space-x-3">
            <div *ngFor="let indicator of scrollIndicators; let i = index"
                 class="cursor-pointer transition-all duration-500 relative"
                 (click)="scrollToIndex(i)">
              <div class="h-2 rounded-full transition-all duration-500"
                   [class.w-8]="i === activeIndicator"
                   [class.w-2]="i !== activeIndicator"
                   [class.bg-emerald-500]="i === activeIndicator"
                   [class.bg-emerald-200]="i !== activeIndicator">
              </div>
              <div *ngIf="i === activeIndicator" 
                   class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4">
                <span class="absolute inset-0 animate-ping bg-emerald-400 rounded-full opacity-50"></span>
              </div>
            </div>
          </div>
          
          <!-- Counter -->
          <div class="hidden md:block text-sm font-medium">
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Hide scrollbar but keep functionality */
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }

    /* Smooth scrolling */
    .scroll-smooth {
      scroll-behavior: smooth;
    }

    /* Line clamp utilities */
    .line-clamp-1 {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Prevent text selection while dragging */
    .no-select {
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
    }

    /* Custom animations */
    @keyframes spin-slow {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .animate-spin-slow {
      animation: spin-slow 3s linear infinite;
    }
  `]
})
export class FeaturedPropertiesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  // Scroll state
  canScrollLeft = false;
  canScrollRight = true;
  activeIndicator = 0;
  scrollIndicators: number[] = [];
  scrollProgress = 0;

  // Auto-scroll variables
  autoScrollEnabled = true;
  private autoScrollInterval: any;
  private readonly AUTO_SCROLL_INTERVAL = 3000;
  private userInteracted = false;

  // Touch/mouse drag variables
  private isDragging = false;
  private startX = 0;
  private currentScrollLeft = 0;
  private isMouseDown = false;

  // Featured properties data
  featuredProperties = [
    {
      id: 1,
      title: 'Modern Villa with Ocean View',
      price: '1,250',
      location: 'Malibu, California',
      type: 'FOR SALE',
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      agent: {
        name: 'Sarah Johnson',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      }
    },
    {
      id: 2,
      title: 'Luxury Penthouse Downtown',
      price: '950',
      location: 'Manhattan, New York',
      type: 'FOR RENT',
      bedrooms: 3,
      bathrooms: 2,
      area: 2100,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      agent: {
        name: 'Michael Chen',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      }
    },
    {
      id: 3,
      title: 'Mediterranean Style Mansion',
      price: '3,500',
      location: 'Beverly Hills, CA',
      type: 'FOR SALE',
      bedrooms: 6,
      bathrooms: 5,
      area: 5200,
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      agent: {
        name: 'Jessica Williams',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
      }
    },
    {
      id: 4,
      title: 'Waterfront Beach House',
      price: '1,890',
      location: 'Miami Beach, FL',
      type: 'FOR SALE',
      bedrooms: 5,
      bathrooms: 4,
      area: 3400,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      agent: {
        name: 'David Rodriguez',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
      }
    },
    {
      id: 5,
      title: 'Modern Loft in Arts District',
      price: '750',
      location: 'Los Angeles, CA',
      type: 'FOR RENT',
      bedrooms: 2,
      bathrooms: 2,
      area: 1500,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      agent: {
        name: 'Emma Thompson',
        avatar: 'https://randomuser.me/api/portraits/women/23.jpg'
      }
    },
    {
      id: 6,
      title: 'Mountain Retreat with Views',
      price: '1,100',
      location: 'Aspen, Colorado',
      type: 'FOR SALE',
      bedrooms: 4,
      bathrooms: 3,
      area: 2600,
      image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      agent: {
        name: 'James Wilson',
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg'
      }
    },
    {
      id: 7,
      title: 'Minimalist Apartment Complex',
      price: '520',
      location: 'Seattle, Washington',
      type: 'FOR RENT',
      bedrooms: 2,
      bathrooms: 1,
      area: 1100,
      image: 'https://images.unsplash.com/photo-1549517045-dc93c2a15c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      agent: {
        name: 'Olivia Brown',
        avatar: 'https://randomuser.me/api/portraits/women/54.jpg'
      }
    },
    {
      id: 8,
      title: 'Colonial Style Estate',
      price: '2,200',
      location: 'Greenwich, CT',
      type: 'FOR SALE',
      bedrooms: 5,
      bathrooms: 4,
      area: 4200,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      agent: {
        name: 'Robert Taylor',
        avatar: 'https://randomuser.me/api/portraits/men/52.jpg'
      }
    }
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateScrollIndicators();
      this.checkScrollButtons();
      this.startAutoScroll();
    });
    
    window.addEventListener('resize', () => {
      this.updateScrollIndicators();
      this.checkScrollButtons();
    });
  }

  ngOnDestroy() {
    window.removeEventListener('resize', () => {});
    this.stopAutoScroll();
  }

  // Auto-scroll methods
  startAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
    
    this.autoScrollInterval = setInterval(() => {
      if (this.autoScrollEnabled && !this.userInteracted && !this.isDragging) {
        this.autoScrollNext();
      }
    }, this.AUTO_SCROLL_INTERVAL);
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  autoScrollNext() {
    if (!this.canScrollRight) {
      // Loop back to start
      this.scrollToIndex(0);
    } else {
      this.scrollRight();
    }
  }

  onUserInteraction() {
    this.userInteracted = true;
    this.autoScrollEnabled = false;
    this.stopAutoScroll();
    
    // Re-enable auto-scroll after 10 seconds of inactivity
    setTimeout(() => {
      this.userInteracted = false;
      this.autoScrollEnabled = true;
      this.startAutoScroll();
    }, 10000);
  }

  // Scroll methods
  scrollLeft() {
    const container = this.scrollContainer.nativeElement;
    const cardWidth = container.querySelector('.flex-none')?.offsetWidth || 360;
    container.scrollBy({ left: -cardWidth * 1.5, behavior: 'smooth' });
    this.onUserInteraction();
    setTimeout(() => this.checkScrollButtons(), 300);
  }

  scrollRight() {
    const container = this.scrollContainer.nativeElement;
    const cardWidth = container.querySelector('.flex-none')?.offsetWidth || 360;
    container.scrollBy({ left: cardWidth * 1.5, behavior: 'smooth' });
    this.onUserInteraction();
    setTimeout(() => this.checkScrollButtons(), 300);
  }

  scrollToIndex(index: number) {
    const container = this.scrollContainer.nativeElement;
    const cardWidth = container.querySelector('.flex-none')?.offsetWidth || 360;
    const gap = 32; // gap-8 = 2rem = 32px
    const scrollPosition = index * (cardWidth + gap);
    container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    this.onUserInteraction();
    setTimeout(() => this.checkScrollButtons(), 300);
  }

  onScroll() {
    this.checkScrollButtons();
    this.updateActiveIndicator();
    this.updateScrollProgress();
  }

  checkScrollButtons() {
    const container = this.scrollContainer.nativeElement;
    this.canScrollLeft = container.scrollLeft > 10;
    this.canScrollRight = container.scrollLeft < container.scrollWidth - container.clientWidth - 10;
  }

  updateScrollIndicators() {
    const itemCount = this.featuredProperties.length;
    this.scrollIndicators = new Array(Math.min(itemCount, 6)).fill(0);
  }

  updateActiveIndicator() {
    const container = this.scrollContainer.nativeElement;
    const scrollPercentage = container.scrollLeft / (container.scrollWidth - container.clientWidth);
    this.activeIndicator = Math.round(scrollPercentage * (this.scrollIndicators.length - 1));
  }

  updateScrollProgress() {
    const container = this.scrollContainer.nativeElement;
    this.scrollProgress = (container.scrollLeft / (container.scrollWidth - container.clientWidth)) * 100;
  }

  // Touch events
  onTouchStart(event: TouchEvent) {
    this.isDragging = true;
    this.onUserInteraction();
    this.startX = event.touches[0].pageX - this.scrollContainer.nativeElement.offsetLeft;
    this.currentScrollLeft = this.scrollContainer.nativeElement.scrollLeft;
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = event.touches[0].pageX - this.scrollContainer.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 1.5;
    this.scrollContainer.nativeElement.scrollLeft = this.currentScrollLeft - walk;
  }

  onTouchEnd() {
    this.isDragging = false;
    this.checkScrollButtons();
  }

  // Mouse drag events
  onMouseDown(event: MouseEvent) {
    this.isMouseDown = true;
    this.isDragging = true;
    this.onUserInteraction();
    this.startX = event.pageX - this.scrollContainer.nativeElement.offsetLeft;
    this.currentScrollLeft = this.scrollContainer.nativeElement.scrollLeft;
    this.scrollContainer.nativeElement.classList.add('no-select');
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isMouseDown || !this.isDragging) return;
    event.preventDefault();
    const x = event.pageX - this.scrollContainer.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 1.5;
    this.scrollContainer.nativeElement.scrollLeft = this.currentScrollLeft - walk;
  }

  onMouseUp() {
    this.isMouseDown = false;
    this.isDragging = false;
    this.scrollContainer.nativeElement.classList.remove('no-select');
    this.checkScrollButtons();
  }

  onMouseLeave() {
    this.isMouseDown = false;
    this.isDragging = false;
    this.scrollContainer.nativeElement.classList.remove('no-select');
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event: Event) {
    event.preventDefault();
  }
}