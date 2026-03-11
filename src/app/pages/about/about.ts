import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-white">
      <!-- Hero Section with Subtle Gradient -->
      <div class="relative bg-gradient-to-r from-emerald-900 to-teal-800 text-white py-20 md:py-28 overflow-hidden">
        <!-- Decorative Elements -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-3xl">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span class="text-emerald-300">EstatePro</span>
            </h1>
            <p class="text-xl md:text-2xl text-emerald-100 leading-relaxed">
              Your trusted partner in real estate, helping individuals and families find their perfect home since 2010.
            </p>
          </div>
        </div>
      </div>

      <!-- Our Story Section -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span class="text-emerald-600 font-semibold text-sm tracking-wider uppercase">Our Story</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              More Than Just <span class="text-emerald-600">Real Estate</span>
            </h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              Founded in 2010, EstatePro began with a simple mission: to make finding a home a joyful experience, not a stressful one. What started as a small team of passionate realtors has grown into one of Kenya's most trusted real estate agencies.
            </p>
            <p class="text-gray-600 leading-relaxed mb-4">
              Over the past decade, we've helped thousands of families find their dream homes, assisted investors in making smart property decisions, and built a reputation for integrity, transparency, and exceptional service.
            </p>
            <p class="text-gray-600 leading-relaxed">
              Today, we're proud to be recognized as industry leaders, combining local expertise with innovative technology to serve our clients better than ever before.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Modern home exterior"
              class="rounded-2xl shadow-lg h-64 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Happy family in new home"
              class="rounded-2xl shadow-lg h-64 w-full object-cover mt-8"
            />
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="bg-emerald-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div class="text-sm text-gray-600 uppercase tracking-wider">Properties Sold</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">1,200+</div>
              <div class="text-sm text-gray-600 uppercase tracking-wider">Happy Clients</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">15+</div>
              <div class="text-sm text-gray-600 uppercase tracking-wider">Cities Covered</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">13</div>
              <div class="text-sm text-gray-600 uppercase tracking-wider">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Our Values Section -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-emerald-600 font-semibold text-sm tracking-wider uppercase">Our Values</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
            What We Stand For
          </h2>
          <p class="text-gray-600">
            Our core values guide everything we do, from how we treat our clients to how we conduct business.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-8 border border-emerald-100">
            <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
              <i class="fas fa-heart text-2xl text-emerald-600"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Client First</h3>
            <p class="text-gray-600">
              We put our clients' needs above everything else, ensuring they feel supported and informed throughout their journey.
            </p>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-8 border border-emerald-100">
            <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
              <i class="fas fa-handshake text-2xl text-emerald-600"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
            <p class="text-gray-600">
              We believe in honest, transparent dealings. No hidden fees, no pressure tactics—just straightforward service.
            </p>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-8 border border-emerald-100">
            <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
              <i class="fas fa-star text-2xl text-emerald-600"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
            <p class="text-gray-600">
              We strive for excellence in everything we do, from market knowledge to customer service and beyond.
            </p>
          </div>
        </div>
      </div>

      <!-- Team Section -->
      <div class="bg-gray-50 py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-emerald-600 font-semibold text-sm tracking-wider uppercase">Our Team</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Meet the Experts
            </h2>
            <p class="text-gray-600">
              Our team of experienced professionals is dedicated to helping you find the perfect property.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Sarah Johnson"
                class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-emerald-200"
              />
              <h3 class="text-lg font-bold text-gray-900">Sarah Johnson</h3>
              <p class="text-emerald-600 text-sm mb-2">Founder & CEO</p>
              <p class="text-gray-500 text-xs">15+ years experience</p>
            </div>

            <div class="text-center">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Michael Chen"
                class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-emerald-200"
              />
              <h3 class="text-lg font-bold text-gray-900">Michael Chen</h3>
              <p class="text-emerald-600 text-sm mb-2">Lead Agent</p>
              <p class="text-gray-500 text-xs">10+ years experience</p>
            </div>

            <div class="text-center">
              <img 
                src="https://randomuser.me/api/portraits/women/68.jpg" 
                alt="Jessica Williams"
                class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-emerald-200"
              />
              <h3 class="text-lg font-bold text-gray-900">Jessica Williams</h3>
              <p class="text-emerald-600 text-sm mb-2">Senior Agent</p>
              <p class="text-gray-500 text-xs">8+ years experience</p>
            </div>

            <div class="text-center">
              <img 
                src="https://randomuser.me/api/portraits/men/75.jpg" 
                alt="David Rodriguez"
                class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-emerald-200"
              />
              <h3 class="text-lg font-bold text-gray-900">David Rodriguez</h3>
              <p class="text-emerald-600 text-sm mb-2">Property Consultant</p>
              <p class="text-gray-500 text-xs">7+ years experience</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Why Choose Us Section -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span class="text-emerald-600 font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Your Success Is Our Priority
            </h2>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <i class="fas fa-check text-xs text-emerald-600"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Expert Local Knowledge</h4>
                  <p class="text-gray-600 text-sm">In-depth understanding of neighborhoods, market trends, and investment opportunities.</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <i class="fas fa-check text-xs text-emerald-600"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Personalized Service</h4>
                  <p class="text-gray-600 text-sm">Tailored approach to meet your unique needs and preferences.</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <i class="fas fa-check text-xs text-emerald-600"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Strong Negotiation</h4>
                  <p class="text-gray-600 text-sm">Skilled negotiators dedicated to getting you the best deal.</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <i class="fas fa-check text-xs text-emerald-600"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">End-to-End Support</h4>
                  <p class="text-gray-600 text-sm">From first viewing to closing day, we're with you every step.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Happy clients"
              class="rounded-2xl shadow-lg w-full"
            />
            <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
              <div class="flex items-center space-x-2">
                <i class="fas fa-quote-left text-emerald-500 text-2xl"></i>
                <p class="text-sm text-gray-600 italic">Best decision we ever made!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-gradient-to-r from-emerald-900 to-teal-800 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p class="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's start your journey today. Our team is ready to help you every step of the way.
          </p>
          <a 
            routerLink="/contact" 
            class="inline-flex items-center px-8 py-4 bg-white text-emerald-800 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg"
          >
            Contact Us Today
            <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AboutComponent {}