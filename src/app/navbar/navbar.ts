import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav 
      class="fixed top-0 left-0 w-full z-50 bg-[#121b25] backdrop-blur-md shadow-lg"
      role="navigation"
      aria-label="Main navigation"
    >
      <!-- Main navbar container -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo Section -->
          <div class="flex-shrink-0">
            <a 
              routerLink="/" 
              class="flex items-center space-x-2 group"
              aria-label="Real Estate Home"
            >
              <!-- Logo container with glass effect -->
              <div class="relative w-10 h-10">
                <div class="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl opacity-80 group-hover:opacity-100 transition-all duration-300 rotate-0 group-hover:rotate-6"></div>
                <div class="absolute inset-0 backdrop-blur-sm bg-white/30 rounded-xl border border-white/50"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <svg class="w-6 h-6 text-emerald-700 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                  </svg>
                </div>
              </div>
              <span class="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Broader<span class="text-gray-800">Estates</span></span>
            </a>
          </div>

          <!-- Desktop Navigation Links -->
          <div class="hidden md:flex items-center space-x-1">
            <a routerLink="/" routerLinkActive="nav-link-active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">HOME</a>
            <a routerLink="/properties" routerLinkActive="nav-link-active" class="nav-link">PROPERTIES</a>
            <a routerLink="/about" routerLinkActive="nav-link-active" class="nav-link">ABOUT US</a>
            <a routerLink="/contact" routerLinkActive="nav-link-active" class="nav-link">CONTACT</a>
            <a routerLink="/mission" routerLinkActive="nav-link-active" class="nav-link">OUR MISSION</a>
          </div>

          <!-- Desktop Saved Properties Button -->
          <div class="hidden md:block">
            <button 
              (click)="onSavedProperties()"
              class="relative px-6 py-2.5 rounded-xl font-bold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
              aria-label="View saved properties"
            >
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>SAVED PROPERTIES</span>
              <span class="ml-1 bg-white text-emerald-600 px-2 py-0.5 rounded-full text-xs font-bold">0</span>
              <span class="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </button>
          </div>

          <!-- Mobile Menu Button - Enhanced -->
          <div class="md:hidden">
            <button 
              (click)="toggleMobileMenu()"
              class="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 group"
              [attr.aria-label]="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
              [attr.aria-expanded]="isMobileMenuOpen"
            >
              <!-- Animated hamburger icon -->
              <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6">
                <span class="absolute block w-6 h-0.5 bg-white transform transition-all duration-300" 
                      [class.rotate-45]="isMobileMenuOpen" 
                      [class.top-1/2]="isMobileMenuOpen" 
                      [class.top-0]="!isMobileMenuOpen"></span>
                <span class="absolute block w-6 h-0.5 bg-white top-3 transform transition-all duration-300" 
                      [class.opacity-0]="isMobileMenuOpen"></span>
                <span class="absolute block w-6 h-0.5 bg-white transform transition-all duration-300" 
                      [class.-rotate-45]="isMobileMenuOpen" 
                      [class.top-1/2]="isMobileMenuOpen" 
                      [class.top-6]="!isMobileMenuOpen"></span>
              </div>
              
              <!-- Ripple effect on click -->
              <span class="absolute inset-0 rounded-2xl bg-white/20 scale-0 group-active:scale-100 transition-transform duration-300"></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Overlay (click to close) -->
      <div *ngIf="isMobileMenuOpen" 
           class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden animate-fadeIn"
           (click)="closeMobileMenu()"
           aria-hidden="true"></div>

      <!-- Mobile Menu - Slide from Right -->
      <div 
        *ngIf="isMobileMenuOpen" 
        class="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-gradient-to-b from-white to-emerald-50/90 backdrop-blur-xl shadow-2xl z-50 md:hidden animate-slideInRight"
        role="menu"
        aria-label="Mobile navigation menu"
      >
        <!-- Decorative header -->
        <div class="relative h-32 bg-gradient-to-br from-emerald-500 to-teal-500 overflow-hidden">
          <div class="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div class="absolute -right-5 -bottom-10 w-32 h-32 bg-white/10 rounded-full"></div>
          
          <!-- Close button inside menu -->
          <button 
            (click)="closeMobileMenu()"
            class="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 flex items-center justify-center group"
            aria-label="Close menu"
          >
            <svg class="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          
          <!-- Brand text in header -->
          <div class="absolute bottom-4 left-6">
            <span class="text-2xl font-bold text-white">Menu</span>
            <div class="h-1 w-12 bg-white/50 rounded-full mt-1"></div>
          </div>
        </div>

        <!-- Navigation Links Container with Scroll -->
        <div class="bg-white overflow-y-auto h-[calc(100vh-8rem)] px-4 py-6 space-y-2 mobile-menu-scroll">
          <!-- Home Link -->
          <a 
            routerLink="/" 
            routerLinkActive="mobile-link-active"
            [routerLinkActiveOptions]="{exact: true}"
            class="mobile-nav-link group"
            (click)="closeMobileMenu()"
            role="menuitem"
          >
            <span class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              <span>HOME</span>
            </span>
            <svg class="w-5 h-5 text-emerald-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>

          <!-- Properties Link -->
          <a 
            routerLink="/properties" 
            routerLinkActive="mobile-link-active"
            class="mobile-nav-link group"
            (click)="closeMobileMenu()"
            role="menuitem"
          >
            <span class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              <span>PROPERTIES</span>
            </span>
            <svg class="w-5 h-5 text-emerald-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>

          <!-- About Us Link -->
          <a 
            routerLink="/about" 
            routerLinkActive="mobile-link-active"
            class="mobile-nav-link group"
            (click)="closeMobileMenu()"
            role="menuitem"
          >
            <span class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              <span>ABOUT US</span>
            </span>
            <svg class="w-5 h-5 text-emerald-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>

          <!-- Contact Link -->
          <a 
            routerLink="/contact" 
            routerLinkActive="mobile-link-active"
            class="mobile-nav-link group"
            (click)="closeMobileMenu()"
            role="menuitem"
          >
            <span class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>CONTACT</span>
            </span>
            <svg class="w-5 h-5 text-emerald-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>

          <!-- Mortgage Link -->
          <a 
            routerLink="/mortgage" 
            routerLinkActive="mobile-link-active"
            class="mobile-nav-link group"
            (click)="closeMobileMenu()"
            role="menuitem"
          >
            <span class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>MORTGAGE</span>
            </span>
            <svg class="w-5 h-5 text-emerald-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>

          <!-- Our Mission Link -->
          <a 
            routerLink="/mission" 
            routerLinkActive="mobile-link-active"
            class="mobile-nav-link group"
            (click)="closeMobileMenu()"
            role="menuitem"
          >
            <span class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>OUR MISSION</span>
            </span>
            <svg class="w-5 h-5 text-emerald-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>

          <!-- Divider with animation -->
          <div class="relative py-4">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-emerald-200"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="px-3 bg-gradient-to-b from-white to-emerald-50/90 text-emerald-600 text-xs font-semibold">YOUR FAVORITES</span>
            </div>
          </div>

          <!-- Mobile Saved Properties Button - Enhanced -->
          <div class="pt-2 pb-6">
            <button 
              (click)="onSavedProperties(); closeMobileMenu()"
              class="relative w-full group overflow-hidden"
              role="menuitem"
              aria-label="View saved properties"
            >
              <!-- Animated background -->
              <div class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- Button content -->
              <div class="relative px-6 py-5 rounded-2xl flex items-center justify-between text-white font-bold text-lg border-2 border-white/20 backdrop-blur-sm">
                <span class="flex items-center space-x-3">
                  <svg class="w-7 h-7 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span>SAVED PROPERTIES</span>
                </span>
                
                <!-- Animated counter -->
                <span class="relative">
                  <span class="absolute -inset-1 bg-white/30 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></span>
                  <span class="relative bg-white text-emerald-600 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    0
                  </span>
                </span>
                
                <!-- Floating hearts animation -->
                <span class="absolute -top-2 -right-2">
                  <span class="absolute w-2 h-2 bg-white/40 rounded-full animate-ping"></span>
                  <span class="absolute w-2 h-2 bg-white/60 rounded-full animate-ping delay-100"></span>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Spacer to prevent content from hiding under fixed navbar -->
    <div class="h-20"></div>
  `,
  styles: [`
    @reference "tailwindcss";

    :host {
      display: block;
    }

    /* Navigation link styles */
    .nav-link {
      @apply relative px-4 py-2 text-sm font-semibold text-gray-700 
             transition-all duration-300 cursor-pointer
             hover:text-emerald-600;
      position: relative;
      display: inline-block;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) scaleX(0);
      width: 80%;
      height: 2px;
      background: linear-gradient(to right, #10b981, #14b8a6);
      transition: transform 0.3s ease;
      border-radius: 2px;
    }

    .nav-link:hover::after {
      transform: translateX(-50%) scaleX(1);
    }

    .nav-link-active {
      color: #059669;
      font-weight: 700;
    }

    .nav-link-active::after {
      transform: translateX(-50%) scaleX(1);
      background: linear-gradient(to right, #059669, #0d9488);
    }

    /* Mobile navigation link styles */
    .mobile-nav-link {
      @apply flex items-center justify-between px-5 py-4 
             text-base font-bold text-gray-700
             rounded-xl transition-all duration-300
             hover:bg-gradient-to-r hover:from-emerald-100 hover:to-teal-100
             hover:pl-7 cursor-pointer
             border border-transparent hover:border-emerald-300
             hover:shadow-md transform hover:scale-[1.02];
    }

    .mobile-link-active {
      @apply bg-gradient-to-r from-emerald-100 to-teal-100 
             text-emerald-800 border-emerald-300
             shadow-md pl-7;
    }

    /* Right slide animation */
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .animate-slideInRight {
      animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* Fade in animation for overlay */
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .animate-fadeIn {
      animation: fadeIn 0.3s ease-out;
    }

    /* Custom scrollbar for mobile menu */
    .mobile-menu-scroll {
      scrollbar-width: thin;
      scrollbar-color: #10b981 #f0fdf4;
    }

    .mobile-menu-scroll::-webkit-scrollbar {
      width: 4px;
    }

    .mobile-menu-scroll::-webkit-scrollbar-track {
      background: #f0fdf4;
    }

    .mobile-menu-scroll::-webkit-scrollbar-thumb {
      background: #10b981;
      border-radius: 20px;
    }

    /* Focus styles */
    .nav-link:focus-visible,
    .mobile-nav-link:focus-visible,
    button:focus-visible {
      outline: 2px solid #10b981;
      outline-offset: 2px;
      border-radius: 4px;
    }
  `]
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  @HostListener('document:keydown.escape')
  onEscapePress(): void {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = 'unset';
  }

  onSavedProperties(): void {
    console.log('Saved Properties clicked');
    // Add your saved properties logic here
  }
}