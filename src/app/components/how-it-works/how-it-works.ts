import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-20 bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden">
      <!-- Premium Decorative Background Elements -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <!-- Floating Gradient Orbs -->
        <div class="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div class="absolute bottom-20 right-10 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl animate-float-slower"></div>
        
        <!-- Grid Pattern Overlay -->
        <div class="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="0.5" class="text-emerald-600"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <!-- Sparkle Effects -->
        <div class="absolute top-1/4 left-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-ping-slow"></div>
        <div class="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping-slower"></div>
        <div class="absolute bottom-1/3 left-1/2 w-1 h-1 bg-emerald-500 rounded-full animate-ping-slow delay-1000"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Section Header with Premium Styling -->
        <div class="text-center mb-16">
          <!-- Animated Badge -->
          <div class="inline-flex items-center bg-gradient-to-r from-emerald-100/80 to-teal-100/80 backdrop-blur-sm border border-emerald-200/50 rounded-full px-6 py-2.5 mb-6 shadow-lg relative group">
            <span class="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></span>
            <span class="relative flex items-center">
              <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mr-2"></span>
              <span class="text-emerald-800 font-semibold tracking-wider text-sm">YOUR JOURNEY STARTS HERE</span>
              <span class="w-2 h-2 bg-teal-500 rounded-full animate-pulse ml-2"></span>
            </span>
          </div>

          <!-- Main Title with Gradient -->
          <h2 class="text-5xl md:text-6xl font-black mb-4 relative">
            <span class="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-2xl opacity-50"></span>
            <span class="relative">
              <span class="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                How It Works
              </span>
            </span>
          </h2>
          
          <!-- Subtitle with Elegant Divider -->
          <div class="flex items-center justify-center space-x-4 mt-4">
            <div class="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
            <p class="text-lg text-gray-600 font-light tracking-wide">
              Three simple steps to your <span class="font-semibold text-emerald-600">dream home</span>
            </p>
            <div class="w-12 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
          </div>
        </div>

        <!-- Steps Container -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative">
          
          <!-- Animated Connecting Path (Desktop) -->
          <div class="hidden md:block absolute top-32 left-[15%] right-[15%] h-0.5">
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-300/50 via-emerald-500 to-teal-300/50 rounded-full animate-shimmer"></div>
            <div class="absolute -top-1 left-1/2 w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-50"></div>
            <div class="absolute -top-1 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-ping delay-300 opacity-40"></div>
            <div class="absolute -top-1 left-3/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping delay-700 opacity-40"></div>
          </div>

          <!-- Step 1: Find a Home -->
          <div class="group relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-700 group-hover:duration-300"></div>
            
            <div class="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-emerald-100/50 hover:border-transparent h-full flex flex-col">
              
              <!-- Icon Container -->
              <div class="relative mb-8">
                <div class="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                
                <div class="relative w-32 h-32 mx-auto">
                  <!-- Animated Rings -->
                  <div class="absolute inset-0 border-2 border-emerald-200 rounded-full animate-ping-slow opacity-20"></div>
                  <div class="absolute inset-2 border border-teal-200 rounded-full animate-ping-slower opacity-30"></div>
                  
                  <!-- Main Icon Background -->
                  <div class="absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-400 to-teal-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-all duration-700 shadow-xl"></div>
                  <div class="absolute inset-0 bg-gradient-to-tl from-emerald-600 to-teal-600 rounded-2xl -rotate-3 group-hover:-rotate-6 transition-all duration-700 shadow-lg"></div>
                  
                  <!-- Font Awesome Icon -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <i class="fas fa-home text-5xl text-white drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500"></i>
                  </div>
                  
                  <!-- Step Number -->
                 
                </div>
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-center mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                <span class="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-teal-600">
                  Find Your Dream Home
                </span>
              </h3>
              
              <p class="text-gray-600 text-center leading-relaxed mb-6 flex-grow">
                Explore our curated collection of luxury properties with advanced search and virtual tours.
              </p>

              <!-- Feature Pills -->
              <div class="flex flex-wrap justify-center gap-2 mt-auto">
                <span class="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 shadow-sm flex items-center">
                  <i class="fas fa-search mr-1 text-emerald-500 text-xs"></i>
                  Smart Search
                </span>
                <span class="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 shadow-sm flex items-center">
                  <i class="fas fa-vr-cardboard mr-1 text-emerald-500 text-xs"></i>
                  Virtual Tours
                </span>
                <span class="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 shadow-sm flex items-center">
                  <i class="fas fa-filter mr-1 text-emerald-500 text-xs"></i>
                  Advanced Filters
                </span>
              </div>

              <!-- Hover Decorative Element -->
              <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-20 transition-all duration-500"></div>
            </div>
          </div>

          <!-- Step 2: Meet a Realtor -->
          <div class="group relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-700 group-hover:duration-300"></div>
            
            <div class="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-emerald-100/50 hover:border-transparent h-full flex flex-col">
              
              <div class="relative mb-8">
                <div class="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                
                <div class="relative w-32 h-32 mx-auto">
                  <div class="absolute inset-0 border-2 border-emerald-200 rounded-full animate-ping-slow opacity-20"></div>
                  <div class="absolute inset-2 border border-teal-200 rounded-full animate-ping-slower opacity-30"></div>
                  
                  <div class="absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-400 to-teal-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-all duration-700 shadow-xl"></div>
                  <div class="absolute inset-0 bg-gradient-to-tl from-emerald-600 to-teal-600 rounded-2xl -rotate-3 group-hover:-rotate-6 transition-all duration-700 shadow-lg"></div>
                  
                  <!-- Font Awesome Icon -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <i class="fas fa-user-tie text-5xl text-white drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500"></i>
                  </div>
                  
                  
                </div>
              </div>

              <h3 class="text-2xl font-bold text-center mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                <span class="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-teal-600">
                  Meet Your Realtor
                </span>
              </h3>
              
              <p class="text-gray-600 text-center leading-relaxed mb-6 flex-grow">
                Connect with our award-winning agents for personalized guidance and expert negotiation.
              </p>

              <div class="flex flex-wrap justify-center gap-2 mt-auto">
                <span class="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 shadow-sm flex items-center">
                  <i class="fas fa-handshake mr-1 text-emerald-500 text-xs"></i>
                  Expert Advice
                </span>
                <span class="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 shadow-sm flex items-center">
                  <i class="fas fa-users mr-1 text-emerald-500 text-xs"></i>
                  Team Support
                </span>
                <span class="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 shadow-sm flex items-center">
                  <i class="fas fa-chart-line mr-1 text-emerald-500 text-xs"></i>
                  Market Analysis
                </span>
              </div>

              <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-20 transition-all duration-500"></div>
            </div>
          </div>

          <!-- Step 3: Walk Into Your New Home -->
          <div class="group relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-700 group-hover:duration-300"></div>
            
            <div class="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-emerald-100/50 hover:border-transparent h-full flex flex-col">
              
              <div class="relative mb-8">
                <div class="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                
                <div class="relative w-32 h-32 mx-auto">
                  <div class="absolute inset-0 border-2 border-emerald-200 rounded-full animate-ping-slow opacity-20"></div>
                  <div class="absolute inset-2 border border-teal-200 rounded-full animate-ping-slower opacity-30"></div>
                  
                  <div class="absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-400 to-teal-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-all duration-700 shadow-xl"></div>
                  <div class="absolute inset-0 bg-gradient-to-tl from-emerald-600 to-teal-600 rounded-2xl -rotate-3 group-hover:-rotate-6 transition-all duration-700 shadow-lg"></div>
                  
                  <!-- Font Awesome Icon (Combination) -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="relative">
                      <i class="fas fa-home text-4xl text-white drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500"></i>
                      <i class="fas fa-key text-2xl text-yellow-300 absolute -bottom-2 -right-2 drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500 delay-100"></i>
                    </div>
                  </div>
                  
                  
                </div>
              </div>

              <h3 class="text-2xl font-bold text-center mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                <span class="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-teal-600">
                  Welcome Home
                </span>
              </h3>
              
              <p class="text-gray-600 text-center leading-relaxed mb-6 flex-grow">
                Close the deal with confidence and receive your keys. Start your new chapter today.
              </p>

              <div class="flex flex-wrap justify-center gap-2 mt-auto">
                <span class="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 shadow-sm flex items-center">
                  <i class="fas fa-file-signature mr-1 text-emerald-500 text-xs"></i>
                  Secure Closing
                </span>
                <span class="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 shadow-sm flex items-center">
                  <i class="fas fa-shield-alt mr-1 text-emerald-500 text-xs"></i>
                  Full Support
                </span>
                <span class="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 shadow-sm flex items-center">
                  <i class="fas fa-glass-cheers mr-1 text-emerald-500 text-xs"></i>
                  Celebration
                </span>
              </div>

              <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-20 transition-all duration-500"></div>
            </div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="text-center mt-16 relative">
          <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl -z-10"></div>
          
          <a 
            routerLink="/properties" 
            class="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white rounded-2xl font-black text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-500 overflow-hidden"
          >
            <span class="absolute inset-0 bg-white/30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span class="absolute inset-0 opacity-0 group-hover:opacity-100">
              <span class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></span>
            </span>
            
            <span class="relative flex items-center">
              <span>Begin Your Journey</span>
              <i class="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform duration-300"></i>
            </span>
            
            <span class="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping opacity-50"></span>
            <span class="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full animate-ping opacity-30 delay-300"></span>
          </a>
          
          <!-- Trust Text -->
          <p class="text-sm text-gray-500 mt-4 flex items-center justify-center">
            <i class="fas fa-check-circle text-emerald-500 mr-1"></i>
            No commitment. Free consultation included.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Premium Animations */
    @keyframes float-slow {
      0%, 100% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(-10px, -10px) scale(1.05); }
      50% { transform: translate(10px, -20px) scale(1.1); }
      75% { transform: translate(20px, 10px) scale(1.05); }
    }

    @keyframes float-slower {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      33% { transform: translate(20px, -15px) rotate(5deg); }
      66% { transform: translate(-15px, 10px) rotate(-5deg); }
    }

   

    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }

    @keyframes shine {
      0% { left: -100%; opacity: 0; }
      20% { opacity: 0.5; }
      40% { left: 100%; opacity: 0; }
      100% { left: 100%; opacity: 0; }
    }

    .animate-float-slow {
      animation: float-slow 15s ease-in-out infinite;
    }

    .animate-float-slower {
      animation: float-slower 20s ease-in-out infinite;
    }

    .animate-ping-slow {
      animation: ping-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .animate-ping-slower {
      animation: ping-slower 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .animate-shimmer {
      background: linear-gradient(90deg, transparent, #10b981, #14b8a6, transparent);
      background-size: 200% 100%;
      animation: shimmer 3s infinite;
    }

    .animate-shine {
      animation: shine 2s ease-out infinite;
    }

    .delay-300 {
      animation-delay: 300ms;
    }

    .delay-700 {
      animation-delay: 700ms;
    }

    .delay-1000 {
      animation-delay: 1000ms;
    }

    /* Card Hover Effects */
    .group:hover .shadow-3xl {
      box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
    }

    /* Font Awesome Icons Styling */
    .fas, .far {
      filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
    }
  `]
})
export class HowItWorksComponent {}