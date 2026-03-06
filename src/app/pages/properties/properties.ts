import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PropertyService } from '../../services/property';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <!-- Page Header with Breadcrumb -->
      <div class="bg-gradient-to-r from-emerald-900 to-teal-800 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 class="text-3xl md:text-4xl font-bold mb-2">Properties</h1>
              <div class="flex items-center text-sm text-emerald-100">
                <a routerLink="/" class="hover:text-white transition-colors">Home</a>
                <i class="fas fa-chevron-right mx-2 text-xs"></i>
                <span>Properties</span>
              </div>
            </div>
            <p class="mt-4 md:mt-0 text-emerald-100">{{ filteredProperties.length }} properties available</p>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div class="flex flex-col lg:flex-row gap-8">
          
          <!-- Filter Sidebar - Mobile Toggle -->
          <div class="lg:hidden mb-4">
            <button 
              (click)="isFilterOpen = !isFilterOpen"
              class="w-full flex items-center justify-between bg-white border border-emerald-200 rounded-xl px-4 py-3 text-gray-700 font-medium"
            >
              <span class="flex items-center">
                <i class="fas fa-sliders-h text-emerald-500 mr-2"></i>
                Filters
              </span>
              <i class="fas" [class.fa-chevron-up]="isFilterOpen" [class.fa-chevron-down]="!isFilterOpen"></i>
            </button>
          </div>

          <!-- Filter Sidebar -->
          <div 
            class="lg:w-80 flex-shrink-0"
            [class.hidden]="!isFilterOpen && windowWidth < 1024"
            [class.block]="isFilterOpen || windowWidth >= 1024"
          >
            <div class="bg-white rounded-2xl shadow-lg border border-emerald-100 sticky top-24 overflow-hidden">
              
              <!-- Filter Header -->
              <div class="p-5 border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-teal-50">
                <h3 class="font-bold text-gray-800 flex items-center">
                  <i class="fas fa-sliders-h text-emerald-500 mr-2"></i>
                  Filter Properties
                </h3>
              </div>

              <!-- Filter Content -->
              <div class="p-5 space-y-6">
                
                <!-- Search by Location/Keyword -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Search</label>
                  <div class="relative">
                    <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                    <input 
                      type="text"
                      [(ngModel)]="filters.search"
                      placeholder="Location, name, or keyword..."
                      class="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                    />
                  </div>
                </div>

                <!-- Property Type -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <div class="grid grid-cols-2 gap-2">
                    <button 
                      *ngFor="let type of propertyTypes"
                      (click)="toggleFilter('type', type)"
                      class="px-3 py-2 text-sm rounded-lg border transition-all duration-300"
                      [class.bg-emerald-500]="filters.type.includes(type)"
                      [class.text-white]="filters.type.includes(type)"
                      [class.border-emerald-500]="filters.type.includes(type)"
                      [class.border-gray-200]="!filters.type.includes(type)"
                      [class.hover:border-emerald-300]="!filters.type.includes(type)"
                    >
                      {{ type }}
                    </button>
                  </div>
                </div>

                <!-- Price Range -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Price Range: $ {{ filters.minPrice | number }}k - $ {{ filters.maxPrice | number }}k
                  </label>
                  <div class="space-y-3">
                    <input 
                      type="range"
                      [(ngModel)]="filters.minPrice"
                      [min]="priceRange.min"
                      [max]="filters.maxPrice"
                      step="50"
                      class="w-full accent-emerald-500"
                    />
                    <input 
                      type="range"
                      [(ngModel)]="filters.maxPrice"
                      [min]="filters.minPrice"
                      [max]="priceRange.max"
                      step="50"
                      class="w-full accent-emerald-500"
                    />
                    <div class="flex justify-between text-xs text-gray-500">
                      <span>$0k</span>
                      <span>$5,000k+</span>
                    </div>
                  </div>
                </div>

                <!-- Bedrooms -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                  <div class="flex flex-wrap gap-2">
                    <button 
                      *ngFor="let num of [1,2,3,4,5]"
                      (click)="toggleFilter('bedrooms', num)"
                      class="w-10 h-10 rounded-lg border transition-all duration-300"
                      [class.bg-emerald-500]="filters.bedrooms.includes(num)"
                      [class.text-white]="filters.bedrooms.includes(num)"
                      [class.border-emerald-500]="filters.bedrooms.includes(num)"
                      [class.border-gray-200]="!filters.bedrooms.includes(num)"
                    >
                      {{ num }}
                    </button>
                    <button 
                      (click)="toggleFilter('bedrooms', 6)"
                      class="px-3 h-10 rounded-lg border text-sm transition-all duration-300"
                      [class.bg-emerald-500]="filters.bedrooms.includes(6)"
                      [class.text-white]="filters.bedrooms.includes(6)"
                      [class.border-emerald-500]="filters.bedrooms.includes(6)"
                      [class.border-gray-200]="!filters.bedrooms.includes(6)"
                    >
                      6+
                    </button>
                  </div>
                </div>

                <!-- Amenities -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
                  <div class="space-y-2">
                    <label *ngFor="let amenity of amenities" class="flex items-center space-x-3 text-sm">
                      <input 
                        type="checkbox"
                        [value]="amenity"
                        (change)="toggleAmenity(amenity)"
                        class="w-4 h-4 text-emerald-500 border-gray-300 rounded focus:ring-emerald-400"
                      />
                      <span class="text-gray-600">{{ amenity }}</span>
                    </label>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex gap-3 pt-3">
                  <button 
                    (click)="applyFilters()"
                    class="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Apply Filters
                  </button>
                  <button 
                    (click)="clearFilters()"
                    class="px-4 py-2.5 border border-gray-300 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all duration-300"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Properties Grid -->
          <div class="flex-1">
            
            <!-- Sort and View Options -->
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div class="flex items-center space-x-2 text-sm text-gray-500">
                <span>Showing</span>
                <span class="font-semibold text-emerald-600">{{ filteredProperties.length }}</span>
                <span>properties</span>
              </div>
              
              <div class="flex items-center space-x-3">
                <select 
                  [(ngModel)]="sortBy"
                  (change)="sortProperties()"
                  class="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
                
                <div class="flex border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    (click)="viewMode = 'grid'"
                    class="px-3 py-2"
                    [class.bg-emerald-50]="viewMode === 'grid'"
                    [class.text-emerald-600]="viewMode === 'grid'"
                    [class.text-gray-400]="viewMode !== 'grid'"
                  >
                    <i class="fas fa-th"></i>
                  </button>
                  <button 
                    (click)="viewMode = 'list'"
                    class="px-3 py-2"
                    [class.bg-emerald-50]="viewMode === 'list'"
                    [class.text-emerald-600]="viewMode === 'list'"
                    [class.text-gray-400]="viewMode !== 'list'"
                  >
                    <i class="fas fa-list"></i>
                  </button>
                </div>
              </div>
            </div>

            <!-- Properties Grid/List -->
            <div  [class]="viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'">
              
              <div *ngFor="let property of filteredProperties" 
                   class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-100/50 hover:border-emerald-200"
                   [class.flex]="viewMode === 'list'">
                
                <!-- Image -->
                <div [class]="viewMode === 'list' ? 'w-48 h-full' : 'relative h-48'">
                  <img 
                    [src]="property.image" 
                    [alt]="property.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <!-- Badges -->
                  <span class="absolute top-3 left-3 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                    {{ property.type }}
                  </span>
                  <span class="absolute top-3 right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                </div>

                <!-- Content -->
                <div class="p-4 flex-1" (click)="viewPropertyDetails(property)">
                  <h3 class="font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-1">
                    {{ property.title }}
                  </h3>
                  
                  <div class="flex items-center text-gray-500 text-xs mb-3">
                    <i class="fas fa-map-marker-alt text-emerald-500 mr-1"></i>
                    <span class="line-clamp-1">{{ property.location }}</span>
                  </div>

                  <div class="flex items-center justify-between mb-3">
                    <span class="text-emerald-600 font-bold">$ {{ property.price }}k</span>
                    <div class="flex items-center space-x-2 text-xs text-gray-500">
                      <span>{{ property.bedrooms }} beds</span>
                      <span>•</span>
                      <span>{{ property.bathrooms }} baths</span>
                      <span>•</span>
                      <span>{{ property.area }} sqft</span>
                    </div>
                  </div>

                  <!-- Amenities Icons -->
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span *ngFor="let amenity of property.amenities.slice(0, 3)" 
                          class="flex items-center text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                      <i class="fas" [class.fa-car]="amenity === 'Parking'" 
                                   [class.fa-dumbbell]="amenity === 'Gym'"
                                   [class.fa-swimmer]="amenity === 'Pool'"
                                   [class.fa-shield-alt]="amenity === 'Security'"
                                   [class.fa-wifi]="amenity === 'WiFi'"
                                   class="mr-1 text-emerald-500 text-xs"></i>
                      {{ amenity }}
                    </span>
                    <span *ngIf="property.amenities.length > 3" 
                          class="text-xs text-gray-400">+{{ property.amenities.length - 3 }} more</span>
                  </div>

                  <!-- View Details Button -->
                  <button class="w-full mt-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-600 px-3 py-2 rounded-lg text-sm font-medium hover:from-emerald-100 hover:to-teal-100 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <!-- Load More -->
            <div class="text-center mt-10">
              <button class="px-6 py-3 border-2 border-emerald-500 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300">
                Load More Properties
              </button>
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

    /* Custom scrollbar for filter sidebar */
    .overflow-y-auto::-webkit-scrollbar {
      width: 4px;
    }
    
    .overflow-y-auto::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }
    
    .overflow-y-auto::-webkit-scrollbar-thumb {
      background: #10b981;
      border-radius: 4px;
    }

    /* Smooth transitions */
    button, a, .group {
      transition: all 0.3s ease;
    }
  `]
})
export class PropertiesComponent {
  

  windowWidth = window.innerWidth;
  isFilterOpen = false;
  viewMode: 'grid' | 'list' = 'grid';
  sortBy = 'newest';

  // Filter options
  propertyTypes = ['House', 'Apartment', 'Villa', 'Condo', 'Townhouse'];
  amenities = ['Parking', 'Gym', 'Pool', 'Security', 'WiFi', 'Garden', 'Balcony'];
  
  priceRange = { min: 0, max: 5000 };

  // Filters state
  filters = {
    search: '',
    type: [] as string[],
    minPrice: 0,
    maxPrice: 5000,
    bedrooms: [] as number[],
    amenities: [] as string[]
  };

  // Sample properties data
  allProperties = [
    {
      id: 1,
      title: 'Modern Luxury Villa with Ocean View',
      price: '1,250',
      location: 'Malibu, California',
      type: 'Villa',
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      amenities: ['Parking', 'Pool', 'Gym', 'Security'],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Downtown Luxury Penthouse',
      price: '950',
      location: 'Manhattan, New York',
      type: 'Apartment',
      bedrooms: 3,
      bathrooms: 2,
      area: 2100,
      amenities: ['Parking', 'Gym', 'WiFi', 'Security'],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Mediterranean Style Mansion',
      price: '3,500',
      location: 'Beverly Hills, CA',
      type: 'Villa',
      bedrooms: 6,
      bathrooms: 5,
      area: 5200,
      amenities: ['Parking', 'Pool', 'Gym', 'Security', 'Garden'],
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Waterfront Beach House',
      price: '1,890',
      location: 'Miami Beach, FL',
      type: 'House',
      bedrooms: 5,
      bathrooms: 4,
      area: 3400,
      amenities: ['Parking', 'Pool', 'WiFi', 'Balcony'],
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Modern Loft in Arts District',
      price: '750',
      location: 'Los Angeles, CA',
      type: 'Condo',
      bedrooms: 2,
      bathrooms: 2,
      area: 1500,
      amenities: ['Gym', 'WiFi', 'Security'],
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Mountain Retreat with Views',
      price: '1,100',
      location: 'Aspen, Colorado',
      type: 'House',
      bedrooms: 4,
      bathrooms: 3,
      area: 2600,
      amenities: ['Parking', 'Gym', 'Garden', 'Balcony'],
      image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      title: 'Minimalist Apartment Complex',
      price: '520',
      location: 'Seattle, Washington',
      type: 'Apartment',
      bedrooms: 2,
      bathrooms: 1,
      area: 1100,
      amenities: ['Parking', 'WiFi'],
      image: 'https://images.unsplash.com/photo-1549517045-dc93c2a15c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      title: 'Colonial Style Estate',
      price: '2,200',
      location: 'Greenwich, CT',
      type: 'House',
      bedrooms: 5,
      bathrooms: 4,
      area: 4200,
      amenities: ['Parking', 'Pool', 'Gym', 'Security', 'Garden'],
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 9,
      title: 'Urban Townhouse',
      price: '890',
      location: 'Brooklyn, NY',
      type: 'Townhouse',
      bedrooms: 3,
      bathrooms: 2,
      area: 1900,
      amenities: ['Parking', 'Garden', 'WiFi'],
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  filteredProperties = [...this.allProperties];

  constructor(private router:Router) {
     
    // Listen for window resize
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    });
  }

  toggleFilter(filterType: string, value: any) {
    const filter = this.filters[filterType as keyof typeof this.filters] as any[];
    const index = filter.indexOf(value);
    
    if (index === -1) {
      filter.push(value);
    } else {
      filter.splice(index, 1);
    }
  }

  toggleAmenity(amenity: string) {
    const index = this.filters.amenities.indexOf(amenity);
    if (index === -1) {
      this.filters.amenities.push(amenity);
    } else {
      this.filters.amenities.splice(index, 1);
    }
  }

  applyFilters() {
    this.filteredProperties = this.allProperties.filter(property => {
      // Search filter
      if (this.filters.search && 
          !property.title.toLowerCase().includes(this.filters.search.toLowerCase()) &&
          !property.location.toLowerCase().includes(this.filters.search.toLowerCase())) {
        return false;
      }

      // Type filter
      if (this.filters.type.length > 0 && !this.filters.type.includes(property.type)) {
        return false;
      }

      // Price filter
      const price = parseInt(property.price.replace(',', ''));
      if (price < this.filters.minPrice || price > this.filters.maxPrice) {
        return false;
      }

      // Bedrooms filter
      if (this.filters.bedrooms.length > 0) {
        const maxBedroom = Math.max(...this.filters.bedrooms);
        if (property.bedrooms > maxBedroom) {
          return false;
        }
        if (!this.filters.bedrooms.includes(property.bedrooms) && property.bedrooms < 6) {
          return false;
        }
      }

      // Amenities filter
      if (this.filters.amenities.length > 0) {
        if (!this.filters.amenities.every(a => property.amenities.includes(a))) {
          return false;
        }
      }

      return true;
    });

    this.sortProperties();
  }

  clearFilters() {
    this.filters = {
      search: '',
      type: [],
      minPrice: 0,
      maxPrice: 5000,
      bedrooms: [],
      amenities: []
    };
    this.filteredProperties = [...this.allProperties];
  }

viewPropertyDetails(property: any) {
  const slug = property.title
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-');
  
  this.router.navigate(['/properties', property.id, slug]);
}

  sortProperties() {
    switch(this.sortBy) {
      case 'price-low':
        this.filteredProperties.sort((a, b) => 
          parseInt(a.price.replace(',', '')) - parseInt(b.price.replace(',', ''))
        );
        break;
      case 'price-high':
        this.filteredProperties.sort((a, b) => 
          parseInt(b.price.replace(',', '')) - parseInt(a.price.replace(',', ''))
        );
        break;
      case 'popular':
        // For demo, just reverse the order
        this.filteredProperties.reverse();
        break;
      default: // 'newest'
        // Keep original order
        break;
    }
  }
}