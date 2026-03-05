import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-insights',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-16 bg-gradient-to-b from-white to-emerald-50/30 relative overflow-hidden">
      <!-- Subtle Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blogGrid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="currentColor" class="text-emerald-600"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blogGrid)"/>
        </svg>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Section Header with Auto-scroll Indicator on Mobile -->
        <div class="flex items-center justify-between mb-8">
          <div>
            <div class="inline-flex items-center space-x-2 bg-emerald-100/50 rounded-full px-4 py-2 mb-3">
              <i class="fas fa-newspaper text-emerald-600 text-sm"></i>
              <span class="text-emerald-700 font-medium text-sm tracking-wide">BLOG & INSIGHTS</span>
            </div>
            
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900">
              Real Estate <span class="text-emerald-600">Insights</span>
            </h2>
          </div>

          <!-- Mobile Auto-scroll Indicator -->
          <div class="flex items-center space-x-2 md:hidden">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span class="text-xs text-emerald-600 font-medium">Swipe →</span>
          </div>

          <!-- Desktop View All Link -->
          <a routerLink="/blog" class="hidden md:flex items-center text-emerald-600 hover:text-emerald-700 font-medium group">
            <span>View All Articles</span>
            <i class="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
          </a>
        </div>

        <!-- Horizontal Scroll Container -->
        <div 
          #scrollContainer
          class="flex overflow-x-auto gap-5 pb-6 hide-scrollbar"
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
          <!-- Blog Cards - Flex None for Horizontal Scroll -->
          
          <!-- Card 1: First Time Buyer Guide -->
          <article class="flex-none w-[280px] sm:w-[300px] md:w-[320px] group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-100/50 hover:border-emerald-200"
                   (mouseenter)="onUserInteraction()">
            
            <!-- Image Container -->
            <div class="relative h-40 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80" 
                alt="Modern living room with keys"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              <!-- Category Tag -->
              <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-emerald-700 px-2 py-1 rounded-full text-xs font-semibold shadow-sm flex items-center">
                <i class="fas fa-star mr-1 text-xs"></i>
                Buyer Guide
              </span>
              
              <!-- Read Time Badge -->
              <span class="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                <i class="far fa-clock mr-1"></i>
                2 min
              </span>
            </div>

            <!-- Content -->
            <div class="p-4">
              <h3 class="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300 h-12">
                How to Buy Your First Home: A Complete Guide
              </h3>
              
              <p class="text-gray-600 text-xs mb-3 line-clamp-2 h-8">
                Essential steps for first-time homebuyers, from mortgage pre-approval to closing day.
              </p>
              
              <!-- Meta Info & Link -->
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                    <span class="text-white text-[10px] font-bold">JD</span>
                  </div>
                  <span class="text-[10px] text-gray-500">James Doe</span>
                </div>
                
                <a routerLink="/blog" class="inline-flex items-center text-emerald-600 hover:text-emerald-700 text-xs font-medium group/link">
                  Read
                  <i class="fas fa-arrow-right ml-1 text-[10px] group-hover/link:translate-x-1 transition-transform duration-300"></i>
                </a>
              </div>
            </div>
          </article>

          <!-- Card 2: Property Inspection Tips -->
          <article class="flex-none w-[280px] sm:w-[300px] md:w-[320px] group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-100/50 hover:border-emerald-200"
                   (mouseenter)="onUserInteraction()">
            
            <div class="relative h-40 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Property inspection checklist"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-emerald-700 px-2 py-1 rounded-full text-xs font-semibold shadow-sm flex items-center">
                <i class="fas fa-clipboard-check mr-1 text-xs"></i>
                Tips
              </span>
              
              <span class="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                <i class="far fa-clock mr-1"></i>
                3 min
              </span>
            </div>

            <div class="p-4">
              <h3 class="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300 h-12">
                5 Things To Check Before Buying Property
              </h3>
              
              <p class="text-gray-600 text-xs mb-3 line-clamp-2 h-8">
                Critical inspections every buyer should make before making an offer on a property.
              </p>
              
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                    <span class="text-white text-[10px] font-bold">SW</span>
                  </div>
                  <span class="text-[10px] text-gray-500">Sarah W.</span>
                </div>
                
                <a routerLink="/blog" class="inline-flex items-center text-emerald-600 hover:text-emerald-700 text-xs font-medium group/link">
                  Read
                  <i class="fas fa-arrow-right ml-1 text-[10px] group-hover/link:translate-x-1 transition-transform duration-300"></i>
                </a>
              </div>
            </div>
          </article>

          <!-- Card 3: Market Trends 2025 -->
          <article class="flex-none w-[280px] sm:w-[300px] md:w-[320px] group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-100/50 hover:border-emerald-200"
                   (mouseenter)="onUserInteraction()">
            
            <div class="relative h-40 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80" 
                alt="Real estate market trends graph"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-emerald-700 px-2 py-1 rounded-full text-xs font-semibold shadow-sm flex items-center">
                <i class="fas fa-chart-line mr-1 text-xs"></i>
                Market
              </span>
              
              <span class="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                <i class="far fa-clock mr-1"></i>
                4 min
              </span>
            </div>

            <div class="p-4">
              <h3 class="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300 h-12">
                Kenya Real Estate Market Trends 2025
              </h3>
              
              <p class="text-gray-600 text-xs mb-3 line-clamp-2 h-8">
                What to expect in property prices, rental yields, and emerging hotspots this year.
              </p>
              
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                    <span class="text-white text-[10px] font-bold">MK</span>
                  </div>
                  <span class="text-[10px] text-gray-500">Michael K.</span>
                </div>
                
                <a routerLink="/blog" class="inline-flex items-center text-emerald-600 hover:text-emerald-700 text-xs font-medium group/link">
                  Read
                  <i class="fas fa-arrow-right ml-1 text-[10px] group-hover/link:translate-x-1 transition-transform duration-300"></i>
                </a>
              </div>
            </div>
          </article>

          <!-- Card 4: Extra Card for Better Scrolling Experience -->
          <article class="flex-none w-[280px] sm:w-[300px] md:w-[320px] group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-100/50 hover:border-emerald-200"
                   (mouseenter)="onUserInteraction()">
            
            <div class="relative h-40 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Modern apartment interior"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-emerald-700 px-2 py-1 rounded-full text-xs font-semibold shadow-sm flex items-center">
                <i class="fas fa-home mr-1 text-xs"></i>
                Interior
              </span>
              
              <span class="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                <i class="far fa-clock mr-1"></i>
                3 min
              </span>
            </div>

            <div class="p-4">
              <h3 class="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300 h-12">
                Top Interior Design Trends for Modern Homes
              </h3>
              
              <p class="text-gray-600 text-xs mb-3 line-clamp-2 h-8">
                Discover the latest interior design trends that are transforming Kenyan homes.
              </p>
              
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                    <span class="text-white text-[10px] font-bold">AO</span>
                  </div>
                  <span class="text-[10px] text-gray-500">Alice O.</span>
                </div>
                
                <a routerLink="/blog" class="inline-flex items-center text-emerald-600 hover:text-emerald-700 text-xs font-medium group/link">
                  Read
                  <i class="fas fa-arrow-right ml-1 text-[10px] group-hover/link:translate-x-1 transition-transform duration-300"></i>
                </a>
              </div>
            </div>
          </article>

          <!-- Card 5: Extra Card -->
          <article class="flex-none w-[280px] sm:w-[300px] md:w-[320px] group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-100/50 hover:border-emerald-200"
                   (mouseenter)="onUserInteraction()">
            
            <div class="relative h-40 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Real estate investment"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-emerald-700 px-2 py-1 rounded-full text-xs font-semibold shadow-sm flex items-center">
                <i class="fas fa-chart-pie mr-1 text-xs"></i>
                Investment
              </span>
              
              <span class="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                <i class="far fa-clock mr-1"></i>
                5 min
              </span>
            </div>

            <div class="p-4">
              <h3 class="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300 h-12">
                Real Estate Investment Strategies for 2025
              </h3>
              
              <p class="text-gray-600 text-xs mb-3 line-clamp-2 h-8">
                Smart investment strategies for maximizing returns in Kenya's growing property market.
              </p>
              
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                    <span class="text-white text-[10px] font-bold">PO</span>
                  </div>
                  <span class="text-[10px] text-gray-500">Peter O.</span>
                </div>
                
                <a routerLink="/blog" class="inline-flex items-center text-emerald-600 hover:text-emerald-700 text-xs font-medium group/link">
                  Read
                  <i class="fas fa-arrow-right ml-1 text-[10px] group-hover/link:translate-x-1 transition-transform duration-300"></i>
                </a>
              </div>
            </div>
          </article>
        </div>

        <!-- Mobile Scroll Indicators -->
        <div class="flex items-center justify-between mt-4 md:hidden">
          <div class="flex space-x-1">
            <div *ngFor="let dot of [1,2,3,4,5]; let i = index"
                 class="h-1 rounded-full transition-all duration-300"
                 [class.w-4]="i === activeDot"
                 [class.w-1]="i !== activeDot"
                 [class.bg-emerald-500]="i === activeDot"
                 [class.bg-emerald-200]="i !== activeDot">
            </div>
          </div>
          
          <span class="text-xs text-gray-400">
            <span class="text-emerald-600 font-medium">{{ activeDot + 1 }}</span> / 5
          </span>
        </div>

        <!-- Desktop View All Link (hidden on mobile) -->
        <div class="hidden md:flex justify-center mt-10">
          <a 
            routerLink="/blog" 
            class="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group"
          >
            <span>View All Articles</span>
            <i class="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
          </a>
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

    /* Line clamp utilities */
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Smooth scrolling */
    .scroll-smooth {
      scroll-behavior: smooth;
    }

    /* Prevent text selection while dragging */
    .no-select {
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
    }

    /* Card hover effects */
    .group:hover img {
      transform: scale(1.05);
    }
  `]
})
export class BlogInsightsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  // Auto-scroll variables
  private autoScrollInterval: any;
  private readonly AUTO_SCROLL_INTERVAL = 3000;
  private userInteracted = false;
  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;
  private isMouseDown = false;
  
  // For mobile indicators
  activeDot = 0;

  ngAfterViewInit() {
    this.startAutoScroll();
    
    // Add scroll listener to update active dot
    this.scrollContainer.nativeElement.addEventListener('scroll', () => {
      this.updateActiveDot();
    });
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  // Auto-scroll methods
  startAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
    
    this.autoScrollInterval = setInterval(() => {
      // Only auto-scroll on mobile and if no user interaction
      if (window.innerWidth < 768 && !this.userInteracted && !this.isDragging) {
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
    const container = this.scrollContainer.nativeElement;
    const cardWidth = 300; // Approximate card width
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    // If at the end, scroll back to start
    if (container.scrollLeft >= maxScroll - 10) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  }

  onUserInteraction() {
    if (window.innerWidth < 768) {
      this.userInteracted = true;
      this.stopAutoScroll();
      
      // Re-enable auto-scroll after 10 seconds of inactivity
      setTimeout(() => {
        this.userInteracted = false;
        this.startAutoScroll();
      }, 10000);
    }
  }

  updateActiveDot() {
    const container = this.scrollContainer.nativeElement;
    const scrollPosition = container.scrollLeft;
    const cardWidth = 300; // Approximate card width
    const activeIndex = Math.round(scrollPosition / cardWidth);
    this.activeDot = Math.min(activeIndex, 4); // Max 5 cards (0-4)
  }

  // Touch events for mobile swiping
  onTouchStart(event: TouchEvent) {
    this.isDragging = true;
    this.onUserInteraction();
    this.startX = event.touches[0].pageX - this.scrollContainer.nativeElement.offsetLeft;
    this.scrollLeft = this.scrollContainer.nativeElement.scrollLeft;
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = event.touches[0].pageX - this.scrollContainer.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 1.5;
    this.scrollContainer.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  onTouchEnd() {
    this.isDragging = false;
  }

  // Mouse drag events for desktop (optional)
  onMouseDown(event: MouseEvent) {
    if (window.innerWidth >= 768) return; // Only enable on mobile
    this.isMouseDown = true;
    this.isDragging = true;
    this.onUserInteraction();
    this.startX = event.pageX - this.scrollContainer.nativeElement.offsetLeft;
    this.scrollLeft = this.scrollContainer.nativeElement.scrollLeft;
    this.scrollContainer.nativeElement.classList.add('no-select');
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isMouseDown || !this.isDragging || window.innerWidth >= 768) return;
    event.preventDefault();
    const x = event.pageX - this.scrollContainer.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 1.5;
    this.scrollContainer.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  onMouseUp() {
    this.isMouseDown = false;
    this.isDragging = false;
    this.scrollContainer.nativeElement.classList.remove('no-select');
  }

  onMouseLeave() {
    this.isMouseDown = false;
    this.isDragging = false;
    this.scrollContainer.nativeElement.classList.remove('no-select');
  }

  onScroll() {
    this.updateActiveDot();
  }

  @HostListener('window:resize')
  onResize() {
    // Restart auto-scroll logic on resize
    this.stopAutoScroll();
    this.userInteracted = false;
    this.startAutoScroll();
  }
}