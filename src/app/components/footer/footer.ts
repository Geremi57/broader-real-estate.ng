import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-white border-t border-emerald-100 py-8 md:py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Main Footer Content - 3 Columns on Desktop, 1 on Mobile -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          <!-- Logo & Social - Compact -->
          <div>
            <a routerLink="/" class="flex items-center space-x-2 mb-3">
              <div class="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-md flex items-center justify-center">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
              </div>
              <span class="text-sm font-bold text-gray-800">EstatePro</span>
            </a>
            
            <p class="text-xs text-gray-500 mb-3 leading-relaxed">
              Find your dream property with Kenya's trusted real estate partner.
            </p>
            
            <!-- Social Icons - Smaller -->
            <div class="flex space-x-3">
              <a href="#" class="w-7 h-7 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-600 flex items-center justify-center transition-colors">
                <i class="fab fa-facebook-f text-xs"></i>
              </a>
              <a href="#" class="w-7 h-7 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-600 flex items-center justify-center transition-colors">
                <i class="fab fa-twitter text-xs"></i>
              </a>
              <a href="#" class="w-7 h-7 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-600 flex items-center justify-center transition-colors">
                <i class="fab fa-instagram text-xs"></i>
              </a>
            </div>
          </div>

          <!-- Quick Links - Compact Grid -->
          <div>
            <h4 class="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">Quick Links</h4>
            <div class="grid grid-cols-2 gap-1">
              <a routerLink="/properties" class="text-xs text-gray-500 hover:text-emerald-600 py-1 transition-colors">Properties</a>
              <a routerLink="/about" class="text-xs text-gray-500 hover:text-emerald-600 py-1 transition-colors">About Us</a>
              <a routerLink="/contact" class="text-xs text-gray-500 hover:text-emerald-600 py-1 transition-colors">Contact</a>
              <a routerLink="/blog" class="text-xs text-gray-500 hover:text-emerald-600 py-1 transition-colors">Blog</a>
              <a href="#" class="text-xs text-gray-500 hover:text-emerald-600 py-1 transition-colors">Buy</a>
              <a href="#" class="text-xs text-gray-500 hover:text-emerald-600 py-1 transition-colors">Sell</a>
              <a href="#" class="text-xs text-gray-500 hover:text-emerald-600 py-1 transition-colors">Rent</a>
              <a href="#" class="text-xs text-gray-500 hover:text-emerald-600 py-1 transition-colors">FAQ</a>
            </div>
          </div>

          <!-- Contact Info - Compact -->
          <div>
            <h4 class="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">Contact</h4>
            <ul class="space-y-2">
              <li class="flex items-start space-x-2">
                <i class="fas fa-map-marker-alt text-emerald-500 text-xs mt-1"></i>
                <span class="text-xs text-gray-500">Nairobi, Kenya</span>
              </li>
              <li class="flex items-center space-x-2">
                <i class="fas fa-phone-alt text-emerald-500 text-xs"></i>
                <a href="tel:+254712345678" class="text-xs text-gray-500 hover:text-emerald-600">+254 712 345 678</a>
              </li>
              <li class="flex items-center space-x-2">
                <i class="fas fa-envelope text-emerald-500 text-xs"></i>
                <a href="mailto:info@estatepro.co.ke" class="text-xs text-gray-500 hover:text-emerald-600">info@estatepro.co.ke</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar - Ultra Compact -->
        <div class="mt-6 pt-4 border-t border-emerald-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <span>© {{ currentYear }} EstatePro. All rights reserved.</span>
          <div class="flex space-x-4 mt-2 md:mt-0">
            <a href="#" class="hover:text-emerald-600">Privacy</a>
            <a href="#" class="hover:text-emerald-600">Terms</a>
            <a href="#" class="hover:text-emerald-600">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}