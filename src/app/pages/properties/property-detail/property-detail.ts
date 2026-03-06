import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <!-- Breadcrumb -->
      <div class="bg-white border-b border-emerald-100 py-4">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center text-sm text-gray-500">
            <a routerLink="/" class="hover:text-emerald-600 transition-colors">Home</a>
            <i class="fas fa-chevron-right mx-2 text-xs"></i>
            <a routerLink="/properties" class="hover:text-emerald-600 transition-colors">Properties</a>
            <i class="fas fa-chevron-right mx-2 text-xs"></i>
            <span class="text-emerald-600 font-medium">{{ property?.title }}</span>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div *ngIf="property" class="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          <!-- Left Column - Property Details (2/3 width) -->
          <div class="lg:col-span-2 space-y-8">
            
            <!-- Image Gallery -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-emerald-100">
              <div class="relative h-[400px] lg:h-[500px]">
                <img 
                  [src]="property.image" 
                  [alt]="property.title"
                  class="w-full h-full object-cover"
                />
                
                <!-- Badges -->
                <div class="absolute top-4 left-4 flex gap-2">
                  <span class="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {{ property.type }}
                  </span>
                  <span class="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
                
                <!-- Price Tag -->
                <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                  <span class="text-2xl font-bold text-emerald-600">$ {{ property.price }}k</span>
                </div>
              </div>
            </div>

            <!-- Property Title & Location -->
            <div class="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100">
              <h1 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">{{ property.title }}</h1>
              
              <div class="flex items-center text-gray-500 mb-4">
                <i class="fas fa-map-marker-alt text-emerald-500 mr-2"></i>
                <span>{{ property.location }}</span>
              </div>

              <!-- Key Features -->
              <div class="flex flex-wrap gap-4 py-4 border-y border-emerald-100">
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                    <i class="fas fa-bed text-emerald-600"></i>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">Bedrooms</p>
                    <p class="font-semibold text-gray-800">{{ property.bedrooms }}</p>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                    <i class="fas fa-bath text-emerald-600"></i>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">Bathrooms</p>
                    <p class="font-semibold text-gray-800">{{ property.bathrooms }}</p>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                    <i class="fas fa-vector-square text-emerald-600"></i>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">Area</p>
                    <p class="font-semibold text-gray-800">{{ property.area }} sqft</p>
                  </div>
                </div>
              </div>

              <!-- Description -->
              <div class="mt-6">
                <h2 class="text-xl font-bold text-gray-800 mb-4">Description</h2>
                <p class="text-gray-600 leading-relaxed">
                  {{ property.description }}
                </p>
              </div>
            </div>

            <!-- Amenities -->
            <div class="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100">
              <h2 class="text-xl font-bold text-gray-800 mb-4">Amenities</h2>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div *ngFor="let amenity of property.amenities" 
                     class="flex items-center p-3 bg-emerald-50 rounded-lg">
                  <i class="fas" [class.fa-car]="amenity === 'Parking'" 
                               [class.fa-dumbbell]="amenity === 'Gym'"
                               [class.fa-swimmer]="amenity === 'Pool'"
                               [class.fa-shield-alt]="amenity === 'Security'"
                               [class.fa-wifi]="amenity === 'WiFi'"
                               [class.fa-tree]="amenity === 'Garden'"
                               [class.fa-balcony]="amenity === 'Balcony'"
                               class="text-emerald-500 mr-3"></i>
                  <span class="text-sm text-gray-700">{{ amenity }}</span>
                </div>
              </div>
            </div>

            <!-- Property Details Table -->
            <div class="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100">
              <h2 class="text-xl font-bold text-gray-800 mb-4">Additional Details</h2>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="text-xs text-gray-500">Year Built</p>
                  <p class="font-semibold text-gray-800">{{ property.yearBuilt || '2020' }}</p>
                </div>
                <div>
                  <p class="text-xs text-gray-500">Property Status</p>
                  <p class="font-semibold text-emerald-600">Available</p>
                </div>
                <div>
                  <p class="text-xs text-gray-500">Parking</p>
                  <p class="font-semibold text-gray-800">{{ property.parking || '2 spaces' }}</p>
                </div>
                <div>
                  <p class="text-xs text-gray-500">Furnished</p>
                  <p class="font-semibold text-gray-800">{{ property.furnished || 'Yes' }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Inquire Form (1/3 width) -->
          <div class="lg:col-span-1">
            <div class="sticky top-24 bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden">
              
              <!-- Agent Info -->
              <div class="p-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                <div class="flex items-center space-x-3">
                  <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <i class="fas fa-user-tie text-2xl"></i>
                  </div>
                  <div>
                    <p class="text-sm opacity-90">Listed by</p>
                    <p class="font-bold">{{ property.agent?.name || 'Sarah Johnson' }}</p>
                  </div>
                </div>
              </div>

              <!-- Inquire Form -->
              <div class="p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <i class="fas fa-paper-plane text-emerald-500 mr-2"></i>
                  Inquire About This Property
                </h3>

                <form (ngSubmit)="sendInquiry()" #inquiryForm="ngForm" class="space-y-4">
                  <!-- Name -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input 
                      type="text"
                      [(ngModel)]="inquiry.name"
                      name="name"
                      required
                      class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <!-- Email -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email"
                      [(ngModel)]="inquiry.email"
                      name="email"
                      required
                      class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <!-- Phone -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel"
                      [(ngModel)]="inquiry.phone"
                      name="phone"
                      class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                      placeholder="+254 712 345 678"
                    />
                  </div>

                  <!-- Message -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      [(ngModel)]="inquiry.message"
                      name="message"
                      rows="4"
                      class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                      placeholder="Tell me more about {{ property.title }}..."
                    ></textarea>
                  </div>

                  <!-- Quick Options -->
                  <div class="space-y-2">
                    <label class="flex items-center space-x-2 text-sm text-gray-600">
                      <input type="checkbox" class="text-emerald-500 focus:ring-emerald-400 rounded">
                      <span>I'd like to schedule a viewing</span>
                    </label>
                    <label class="flex items-center space-x-2 text-sm text-gray-600">
                      <input type="checkbox" class="text-emerald-500 focus:ring-emerald-400 rounded">
                      <span>Send me similar properties</span>
                    </label>
                  </div>

                  <!-- Submit Button -->
                  <button 
                    type="submit"
                    [disabled]="!inquiryForm.valid"
                    class="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send Inquiry
                  </button>

                  <!-- Response Message -->
                  <div *ngIf="inquirySent" class="text-center text-sm text-emerald-600 bg-emerald-50 p-3 rounded-lg">
                    <i class="fas fa-check-circle mr-1"></i>
                    Inquiry sent successfully! Agent will contact you soon.
                  </div>
                </form>

                <!-- Quick Contact -->
                <div class="mt-6 pt-4 border-t border-emerald-100">
                  <p class="text-xs text-gray-500 mb-2 text-center">Or contact directly</p>
                  <div class="flex justify-center space-x-3">
                    <a href="tel:+254712345678" class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition-colors">
                      <i class="fas fa-phone-alt"></i>
                    </a>
                    <a href="#" class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition-colors">
                      <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="#" class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition-colors">
                      <i class="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Similar Properties Section -->
        <div class="mt-16">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Similar Properties You Might Like</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div *ngFor="let similar of similarProperties" 
                 class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-100/50 hover:border-emerald-200 cursor-pointer"
                 (click)="navigateToProperty(similar)">
              <div class="relative h-40">
                <img [src]="similar.image" [alt]="similar.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <span class="absolute top-2 right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">$ {{ similar.price }}k</span>
              </div>
              <div class="p-3">
                <h3 class="font-semibold text-sm text-gray-800 mb-1 line-clamp-1">{{ similar.title }}</h3>
                <p class="text-xs text-gray-500">{{ similar.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .line-clamp-1 {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .sticky {
      position: sticky;
      top: 6rem;
    }
  `]
})
export class PropertyDetailComponent implements OnInit {
  property: any;
  similarProperties: any[] = [];
  
  inquiry = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  
  inquirySent = false;

  // Sample properties database (in real app, this would come from a service)
  private propertiesDatabase = [
    {
      id: 1,
      title: 'Modern Luxury Villa with Ocean View',
      slug: 'modern-luxury-villa-with-ocean-view',
      price: '1,250',
      location: 'Malibu, California',
      type: 'Villa',
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      description: 'Experience luxury living in this stunning oceanfront villa. Featuring panoramic ocean views, modern architecture, and high-end finishes throughout. The open-concept living area flows seamlessly to an expansive terrace perfect for entertaining.',
      amenities: ['Parking', 'Pool', 'Gym', 'Security', 'Garden', 'Balcony'],
      yearBuilt: '2019',
      parking: '3 spaces',
      furnished: 'Yes',
      agent: { name: 'Sarah Johnson', phone: '+1 234-567-890' },
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Downtown Luxury Penthouse',
      slug: 'downtown-luxury-penthouse',
      price: '950',
      location: 'Manhattan, New York',
      type: 'Apartment',
      bedrooms: 3,
      bathrooms: 2,
      area: 2100,
      description: 'Spectacular penthouse in the heart of Manhattan with breathtaking city views. This modern residence features floor-to-ceiling windows, a private rooftop terrace, and access to premium building amenities.',
      amenities: ['Parking', 'Gym', 'WiFi', 'Security', 'Balcony'],
      yearBuilt: '2021',
      parking: '1 space',
      furnished: 'Yes',
      agent: { name: 'Michael Chen', phone: '+1 234-567-891' },
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Mediterranean Style Mansion',
      slug: 'mediterranean-style-mansion',
      price: '3,500',
      location: 'Beverly Hills, CA',
      type: 'Villa',
      bedrooms: 6,
      bathrooms: 5,
      area: 5200,
      description: 'Magnificent Mediterranean-style estate in the heart of Beverly Hills. This architectural masterpiece features grand living spaces, a chef\'s kitchen, home theater, wine cellar, and resort-style pool.',
      amenities: ['Parking', 'Pool', 'Gym', 'Security', 'Garden'],
      yearBuilt: '2017',
      parking: '6 spaces',
      furnished: 'Optional',
      agent: { name: 'Jessica Williams', phone: '+1 234-567-892' },
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id']);
      this.loadProperty(id);
    });
  }

  loadProperty(id: number) {
    // Find property by ID
    this.property = this.propertiesDatabase.find(p => p.id === id);
    
    if (this.property) {
      // Load similar properties (exclude current property)
      this.similarProperties = this.propertiesDatabase
        .filter(p => p.id !== id)
        .slice(0, 4);
      
      // Set default message
      this.inquiry.message = `I'm interested in ${this.property.title}. Please send me more information.`;
    }
  }
  

  sendInquiry() {
    console.log('Inquiry sent:', {
      property: this.property.title,
      ...this.inquiry
    });
    
    this.inquirySent = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.inquirySent = false;
      this.inquiry = {
        name: '',
        email: '',
        phone: '',
        message: `I'm interested in ${this.property?.title}. Please send me more information.`
      };
    }, 3000);
  }

  navigateToProperty(property: any) {
    // In a real app, use Router to navigate
    console.log('Navigate to:', property.id, property.slug);
  }
}