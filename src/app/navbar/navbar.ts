import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav 
      class="fixed top-0 left-0 w-full z-50"
      [class.backdrop-blur-md]="!isMobileMenuOpen"
      [class.bg-white/95]="!isMobileMenuOpen"
      [class.bg-white]="isMobileMenuOpen"
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
              <span class="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Estate<span class="text-gray-800">Pro</span></span>
            </a>
          </div>

          <!-- Desktop Navigation Links -->
          <div class="hidden md:flex items-center space-x-1">
            <!-- Home Link -->
            <a 
              routerLink="/" 
              routerLinkActive="nav-link-active"
              [routerLinkActiveOptions]="{exact: true}"
              class="nav-link"
              aria-current="page"
            >
              HOME
            </a>

            <!-- Properties Link -->
            <a 
              routerLink="/properties" 
              routerLinkActive="nav-link-active"
              class="nav-link"
            >
              PROPERTIES
            </a>

            <!-- About Us Link -->
            <a 
              routerLink="/about" 
              routerLinkActive="nav-link-active"
              class="nav-link"
            >
              ABOUT US
            </a>

            <!-- Contact Link -->
            <a 
              routerLink="/contact us" 
              routerLinkActive="nav-link-active"
              class="nav-link"
            >
              CONTACT
            </a>

            <!-- Mortgage Link -->
            
              

            <!-- Our Mission Link -->
            <a 
              routerLink="/mission" 
              routerLinkActive="nav-link-active"
              class="nav-link"
            >
              OUR MISSION
            </a>
          </div>

          <!-- Desktop Login Button -->
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
    
    <!-- Shine effect on hover -->
    <span class="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
  </button>
</div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button 
              (click)="toggleMobileMenu()"
              class="relative w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm border border-emerald-200 hover:border-emerald-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              [attr.aria-label]="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
              [attr.aria-expanded]="isMobileMenuOpen"
            >
              <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <!-- Hamburger Icon -->
                <svg *ngIf="!isMobileMenuOpen" class="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                <!-- Close Icon -->
                <svg *ngIf="isMobileMenuOpen" class="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div 
        *ngIf="isMobileMenuOpen" 
        class="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-lg border-t border-emerald-100 shadow-2xl animate-slideDown"
        role="menu"
        aria-label="Mobile navigation menu"
      >
        <div class="max-w-7xl mx-auto px-4 py-6 space-y-2">
          <!-- Mobile Navigation Links -->
          <a 
            routerLink="/" 
            routerLinkActive="mobile-link-active"
            [routerLinkActiveOptions]="{exact: true}"
            class="mobile-nav-link"
            (click)="closeMobileMenu()"
            role="menuitem"
          >
            <span>HOME</span>
            <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>

          <a 
            routerLink="/properties" 
            routerLinkActive="mobile-link-active"
            class="mobile-nav-link"
            (click)="closeMobileMenu()"
            role="menuitem"
          >
            <span>PROPERTIES</span>
            <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>

          <a 
            routerLink="/about" 
            routerLinkActive="mobile-link-active"
            class="mobile-nav-link"
            (click)="closeMobileMenu()"
            role="menuitem"
          >
            <span>ABOUT US</span>
            <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>

          <a 
            routerLink="/contact" 
            routerLinkActive="mobile-link-active"
            class="mobile-nav-link"
            (click)="closeMobileMenu()"
            role="menuitem"
          >
            <span>CONTACT</span>
            <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>


          <!-- Mobile Login Button -->
          <div class="pt-6">
  <button 
    (click)="onSavedProperties(); closeMobileMenu()"
    class="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 border border-white/20 relative overflow-hidden group"
    role="menuitem"
    aria-label="View saved properties"
  >
    <!-- Heart icon with animation -->
    <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
    <span>SAVED PROPERTIES</span>
    
    <!-- Counter badge (you can make this dynamic later) -->
    <span class="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg animate-pulse">
      0
    </span>
    
    <!-- Shine effect on hover -->
    <span class="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
  </button>
</div>
        </div>
      </div>
    </nav>

    <!-- Spacer to prevent content from hiding under fixed navbar -->
    <div class="h-20"></div>
  `,
  styles: [`
  @reference "tailwindcss"
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

    /* Underline animation */
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

    /* Active route style */
    .nav-link-active {
      color: #059669;
      font-weight: 700;
    }

    .nav-link-active::after {
      transform: translateX(-50%) scaleX(1);
      background: linear-gradient(to right, #059669, #0d9488);
    }

    /* Login button styles */
    .login-btn {
      @apply relative px-6 py-2.5 rounded-xl font-bold text-sm
             overflow-hidden transition-all duration-300
             hover:scale-105 hover:shadow-xl;
      background: linear-gradient(135deg, #10b981, #14b8a6);
      color: white;
      border: none;
      box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
    }

    .login-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.5s ease;
    }

    .login-btn:hover::before {
      left: 100%;
    }

    .login-btn:active {
      transform: scale(0.98);
    }

    /* Mobile navigation link styles */
    .mobile-nav-link {
      @apply flex items-center justify-between px-6 py-4 
             text-base font-bold text-gray-700
             rounded-xl transition-all duration-300
             hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50
             hover:pl-8 cursor-pointer
             border border-transparent hover:border-emerald-200;
    }

    .mobile-link-active {
      @apply bg-gradient-to-r from-emerald-100 to-teal-100 
             text-emerald-800 border-emerald-300
             shadow-md;
    }

    /* Slide down animation for mobile menu */
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-slideDown {
      animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Glass effect on scroll */
    .navbar-scrolled {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }

    /* Focus styles for accessibility */
    .nav-link:focus-visible,
    .login-btn:focus-visible,
    .mobile-nav-link:focus-visible {
      outline: 2px solid #10b981;
      outline-offset: 2px;
      border-radius: 4px;
    }

    /* Custom scrollbar for mobile menu if needed */
    @media (max-width: 768px) {
      .mobile-menu-scroll {
        max-height: calc(100vh - 5rem);
        overflow-y: auto;
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
    }
  `]
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (this.isMobileMenuOpen && !target.closest('nav')) {
      this.isMobileMenuOpen = false;
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Prevent body scroll when mobile menu is open
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

  onLogin(): void {
    console.log('Login button clicked');
    // Add your login logic here
  }
  onSavedProperties(): void {
    console.log('Saved Properties clicked');
    // Add your saved properties logic here
    // This could open a modal, navigate to saved properties page, etc.
  }
}

