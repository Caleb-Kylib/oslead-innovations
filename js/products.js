/*
 * Oslead Innovations - Products & Packages Database and Details Engine
 * Dynamic catalogue data, price structures, client reviews, image carousels, and URL details compiler
 */

// Global Product and Package Database
const PRODUCTS_DATA = [
  {
    id: 'chicks-broiler',
    category: 'chicks',
    name: 'Day-Old Chicks (Broilers)',
    price: 'KES 85 / $0.65 per chick',
    images: [
      'var(--broilers-img-url)',
      'var(--chicks-close-up-url)',
      'var(--hero-bg-url)'
    ],
    description: 'Fast-growing broiler chicks bred for optimal weight gain, high feed conversion efficiency, and disease resistance under local conditions.',
    features: [
      'High growth rate (up to 2.5kg in 4-5 weeks)',
      'Excellent Feed Conversion Ratio (FCR)',
      'Uniform growth and high survivability rate',
      'Fully vaccinated against Marek\'s and Newcastle diseases'
    ],
    specifications: {
      'Breed Type': 'Cobb 500 / Ross 308',
      'Feather Color': 'White',
      'Average Mature Weight': '2.2 - 2.6 kg (at 35 days)',
      'Vaccination Administered': 'Marek\'s, Newcastle, Gumboro (Day 0)',
      'Recommended Feed': 'Broiler Starter Crumbles'
    },
    benefits: [
      'Quick turnaround time for commercial farmers',
      'High meat yields and premium grade carcasses',
      'Low mortality rate due to robust grandparent breeding stock'
    ],
    reviews: [
      { name: 'John Kamau', location: 'Nakuru', rating: 5, date: 'July 10, 2026', comment: 'Excellent vigor. I ordered 2,000 broilers and harvested at 34 days. Average weight was 2.3kg.' },
      { name: 'Grace Muli', location: 'Machakos', rating: 4.8, date: 'June 28, 2026', comment: 'Chicks arrived alert and warm. Very low mortality rate, only 1.2% in the first week!' }
    ]
  },
  {
    id: 'chicks-layer',
    category: 'chicks',
    name: 'Day-Old Chicks (Layers)',
    price: 'KES 110 / $0.85 per chick',
    images: [
      'var(--chicks-img-url)',
      'var(--chicks-close-up-url)',
      'var(--hero-bg-url)'
    ],
    description: 'Highly productive egg-laying chicks selected for excellent egg quality, steady lay rates, and long persistence of lay.',
    features: [
      'Exceptional egg production (up to 320+ eggs per year)',
      'Early onset of lay (starting at 18-20 weeks)',
      'Low feed consumption per egg produced',
      'Calm temperament and easy flock management'
    ],
    specifications: {
      'Breed Type': 'Isa Brown / Lohmann Brown',
      'Feather Color': 'Brown / Reddish',
      'Egg Color': 'Strong Brown Shelled',
      'Laying Duration': '72 - 80 weeks',
      'Vaccination Administered': 'Marek\'s, Newcastle, Infectious Bronchitis (Day 0)'
    },
    benefits: [
      'Consistent daily income stream from premium brown eggs',
      'Low cost of production due to efficient feed usage',
      'Long-lasting productivity extending over a year'
    ],
    reviews: [
      { name: 'David Kiprop', location: 'Eldoret', rating: 5, date: 'May 12, 2026', comment: 'My layers are currently at 32 weeks and egg production is at 94%. Very satisfied with the chick quality.' },
      { name: 'Tabitha Wambui', location: 'Nyeri', rating: 4.5, date: 'April 20, 2026', comment: 'Uniform sizes, healthy laying cycle startup. Excellent support guidelines.' }
    ]
  },
  {
    id: 'chicks-kienyeji-improved',
    category: 'chicks',
    name: 'Day-Old Chicks (Improved Kienyeji)',
    price: 'KES 90 / $0.70 per chick',
    images: [
      'var(--chicks-img-url)',
      'var(--chicks-close-up-url)',
      'var(--hero-bg-url)'
    ],
    description: 'Dual-purpose breeds combining the high productivity of commercial breeds with the rugged hardiness and taste of local breeds.',
    features: [
      'Dual purpose (excellent for both meat and eggs)',
      'High resistance to local poultry diseases and parasites',
      'Thrives in free-range and semi-intensive systems',
      'Bred for rapid growth compared to traditional Kienyeji'
    ],
    specifications: {
      'Breed Type': 'KARI Improved Kienyeji / Rainbow Rooster',
      'Feather Color': 'Multi-colored / Speckled',
      'Egg Production': '220 - 250 eggs per year',
      'Maturity Period': '4.5 - 5 months',
      'Vaccination Administered': 'Marek\'s, Newcastle (Day 0)'
    },
    benefits: [
      'Premium pricing for organic, free-range poultry meat',
      'Reduced feed costs due to excellent foraging ability',
      'Minimal management overhead compared to commercial broilers/layers'
    ],
    reviews: [
      { name: 'Peter Owino', location: 'Kisumu', rating: 4.9, date: 'March 14, 2026', comment: 'Perfect dual-purpose chicken. They forage well in my orchard and started laying early at 4.5 months.' },
      { name: 'Sarah Jepchirchir', location: 'Kapsabet', rating: 5, date: 'February 22, 2026', comment: 'Extremely resilient to changes in weather. Feeds are easy to supplement with farm waste.' }
    ]
  },
  {
    id: 'chicks-kienyeji-traditional',
    category: 'chicks',
    name: 'Day-Old Chicks (Traditional Kienyeji)',
    price: 'KES 75 / $0.58 per chick',
    images: [
      'var(--chicks-img-url)',
      'var(--chicks-close-up-url)',
      'var(--hero-bg-url)'
    ],
    description: 'Pure local chicken breeds celebrated for rich flavor, structural resilience, and natural mothering qualities.',
    features: [
      'Extremely hardy and fully adapted to harsh climates',
      'High natural foraging efficiency',
      'Highly demanded organic yellow yolk eggs',
      'Strong bone structure and natural disease immunity'
    ],
    specifications: {
      'Breed Type': 'Pure Indigenous local breeds',
      'Feather Color': 'Varied',
      'Egg Production': '80 - 100 eggs per year',
      'Maturity Period': '6 - 7 months',
      'Vaccination Administered': 'Marek\'s, Newcastle (Day 0)'
    },
    benefits: [
      'Authentic local chicken taste commands top market prices',
      'Extremely low maintenance and input requirements',
      'Excellent broodiness for natural hatching on the farm'
    ],
    reviews: [
      { name: 'Lydia Wanjiku', location: 'Naivasha', rating: 4.6, date: 'January 10, 2026', comment: 'For farmers seeking completely organic free-range operations. Very alert birds, zero losses so far.' }
    ]
  },
  {
    id: 'fertilized-eggs',
    category: 'eggs',
    name: 'Premium Fertilized Eggs',
    price: 'KES 1,200 / $9.20 per tray (30 eggs)',
    images: [
      'var(--eggs-img-url)',
      'var(--chicks-close-up-url)',
      'var(--hero-bg-url)'
    ],
    description: 'Top-tier hatching eggs sourced from clean, vaccinated, highly fertile parent stock flocks under strict biosecurity protocols.',
    features: [
      'Excellent fertility rate (95%+ guaranteed)',
      'High hatchability potential in professional incubators',
      'Disease-free breeding stock (Salmonella, Mycoplasma monitored)',
      'Uniform shell thickness and shape for clean development'
    ],
    specifications: {
      'Egg Source': 'Certified Breeder Farms',
      'Breeds Available': 'Broiler, Layer, Improved Kienyeji',
      'Average Egg Weight': '53g - 65g',
      'Storage Temperature': '15 - 18 °C before dispatch',
      'Maximum Holding Time': 'Under 7 days from collection'
    },
    benefits: [
      'Highest chick yield per batch incubated',
      'Clean disease-free chicks upon hatch',
      'Safe specialized cellular tray packaging minimizes transport damage'
    ],
    reviews: [
      { name: 'Michael Ruto', location: 'Kericho', rating: 5, date: 'July 18, 2026', comment: 'I incubated 6 trays of Cobb 500 broiler eggs and achieved a 94.6% hatch rate! Fantastic egg freshness.' },
      { name: 'Nancy Omondi', location: 'Homa Bay', rating: 4.7, date: 'June 05, 2026', comment: 'Eggs were packaged with heavy foam molds. Not a single egg was cracked during transit.' }
    ]
  },
  {
    id: 'incubator-48',
    category: 'incubators',
    name: 'Poultry Incubator (48 Eggs)',
    price: 'KES 12,500 / $96.00',
    images: [
      'var(--incubator-img-url)',
      'var(--eggs-img-url)',
      'var(--hero-bg-url)'
    ],
    description: 'A compact, automated incubator ideal for small-scale breeders, hobbyists, agricultural classrooms, and home startup farms.',
    features: [
      'Fully automatic egg turning every 2 hours',
      'Digital LED display for Temperature, Humidity, and Hatch Days',
      'Precision temperature sensor (accurate to 0.1°C)',
      'Integrated egg candler lights for easy fertility checks'
    ],
    specifications: {
      'Egg Capacity': '48 Chicken Eggs (also fits quail, duck)',
      'Power Consumption': '80W',
      'Power Input': '220V AC / 12V DC Dual Option (Battery compatible)',
      'Dimensions': '50 x 50 x 28 cm',
      'Hatch Rate': '90%+ under recommended settings'
    },
    benefits: [
      'Simple plug-and-play operations',
      'Dual-power system protects hatch against sudden power blackouts',
      'Highly portable design'
    ],
    reviews: [
      { name: 'Hassan Aden', location: 'Garissa', rating: 4.8, date: 'June 19, 2026', comment: 'Works well with local solar battery backup. Very simple to set up and monitor.' }
    ]
  },
  {
    id: 'incubator-96',
    category: 'incubators',
    name: 'Poultry Incubator (96 Eggs)',
    price: 'KES 18,500 / $142.00',
    images: [
      'var(--incubator-img-url)',
      'var(--eggs-img-url)',
      'var(--hero-bg-url)'
    ],
    description: 'Double-tier fully automated digital incubator designed for growing poultry yards and small commercial incubation ventures.',
    features: [
      'Dual-tray automatic egg turning system',
      'Digital microcomputer monitoring for climate stability',
      'Automatic high/low temperature & humidity alarms',
      'Optimized multi-fan ventilation for uniform air flow'
    ],
    specifications: {
      'Egg Capacity': '96 Chicken Eggs',
      'Power Consumption': '100W',
      'Power Input': '220V AC / 12V DC Dual Source',
      'Dimensions': '52 x 52 x 42 cm',
      'Hatch Rate': '90%+'
    },
    benefits: [
      'Bridges the gap between hobbyist and commercial scale production',
      'Space-saving stacked double tray design',
      'Minimal manual intervention required'
    ],
    reviews: [
      { name: 'Patrick Musyoka', location: 'Kitui', rating: 5, date: 'July 01, 2026', comment: 'Double stack saves space. I run this inside my farm office, and the automatic turning alarm works perfectly.' },
      { name: 'Jane Mwangi', location: 'Thika', rating: 4.9, date: 'May 11, 2026', comment: 'Hatched 88 chicks from 95 eggs. Temperature holds extremely steady.' }
    ]
  },
  {
    id: 'incubator-528',
    category: 'incubators',
    name: 'Commercial Poultry Incubator (528 Eggs)',
    price: 'KES 75,000 / $576.00',
    images: [
      'var(--incubator-img-url)',
      'var(--eggs-img-url)',
      'var(--hero-bg-url)'
    ],
    description: 'Medium commercial incubator with industrial-grade control circuits, structural stability, and reliable heavy duty continuous runtime.',
    features: [
      'Industrial intelligent microcomputer control system',
      'Automatic egg turner, humidity mist injection, and ventilation',
      'Sleek glass window view door for full control observation',
      'Heavy-duty tray wheels for easy rolling setup'
    ],
    specifications: {
      'Egg Capacity': '528 Chicken Eggs',
      'Power Consumption': '1000W',
      'Power Input': '220V AC / Solar / Inverter Compatible',
      'Cabinet Material': 'Premium color steel plate insulation board',
      'Controls Accuracy': 'Temperature ±0.1°C, Humidity ±3% RH'
    },
    benefits: [
      'Perfect for local community hatching centers and chick suppliers',
      'Outstanding heat insulation minimizes operating energy costs',
      'Designed to run 24/7/365 with high stability parameters'
    ],
    reviews: [
      { name: 'Silas Langat', location: 'Bomet', rating: 5, date: 'June 30, 2026', comment: 'Our dairy coop purchased this incubator to raise backyard chicks. It has paid for itself within two hatches.' }
    ]
  },
  {
    id: 'incubator-1056',
    category: 'incubators',
    name: 'Industrial Poultry Incubator (1056 Eggs)',
    price: 'KES 135,000 / $1,038.00',
    images: [
      'var(--incubator-img-url)',
      'var(--eggs-img-url)',
      'var(--hero-bg-url)'
    ],
    description: 'High-capacity industrial incubator and hatcher combo designed for commercial hatcheries and poultry cooperatives.',
    features: [
      'Dual control system with redundant sensors for absolute safety',
      'Staggered batch setting: set eggs weekly inside the same cabinet',
      'Advanced variable-frequency heating and cooling circuits',
      'Equipped with industrial trolley trays'
    ],
    specifications: {
      'Egg Capacity': '1056 Chicken Eggs',
      'Power Consumption': '1800W',
      'Power Input': '220V AC Single Phase / 380V Three Phase option',
      'Hatching Trays Included': 'Complete with setter trays and hatching baskets',
      'Dimensions': '135 x 90 x 135 cm'
    },
    benefits: [
      'Maximum throughput and hatching capacity per square meter',
      'Highly energy efficient relative to high egg throughput',
      'Complete end-to-end commercial chick production'
    ],
    reviews: [
      { name: 'Hatchery Manager', location: 'Kakamega', rating: 5, date: 'May 04, 2026', comment: 'The dual microprocessor logic gives great peace of mind. Highly reliable humidity mist setup.' }
    ]
  },
  {
    id: 'box-50',
    category: 'accessories',
    name: '50 Chick Carrying Box',
    price: 'KES 150 / $1.15 each',
    images: [
      'var(--box-50-img-url)',
      'var(--chicks-img-url)',
      'var(--hero-bg-url)'
    ],
    description: 'Sturdy, lightweight cardboard transport box engineered specifically for shipping day-old chicks safely while maintaining warm temperature.',
    features: [
      'Scientifically designed honeycomb ventilation holes',
      'Inner cross divider to prevent chick crowd crushing',
      'Excellent insulation properties against cold and wind draft',
      'Eco-friendly biodegradable thick Kraft board'
    ],
    specifications: {
      'Capacity': '50 - 60 Day-Old Chicks',
      'Dimensions': '46 x 32 x 15 cm',
      'Compartments': '2 inner sections',
      'Material': 'Fluted corrugated heavy-weight cardboard',
      'Ventilation': '24 adjustable punch-out holes'
    },
    benefits: [
      'Prevents suffocation during long-distance delivery',
      'Highly stackable to maximize transport space efficiency',
      'Prevents bird movement injury'
    ],
    reviews: [
      { name: 'Albert Ndegwa', location: 'Kiambu', rating: 4.8, date: 'June 12, 2026', comment: 'Very sturdy box corners. We stacked them 8 high inside our cargo van, and they arrived perfectly solid.' }
    ]
  },
  {
    id: 'box-100',
    category: 'accessories',
    name: '100 Chick Carrying Box',
    price: 'KES 250 / $1.90 each',
    images: [
      'var(--box-100-img-url)',
      'var(--chicks-img-url)',
      'var(--hero-bg-url)'
    ],
    description: 'Heavy-duty commercial chick shipping container featuring partition walls and reinforced structural corners.',
    features: [
      'Four compartments for even weight distribution',
      'Robust center carrying handle cutout',
      'High humidity resistance for warm travel conditions',
      'Flat-pack design for easy storage before use'
    ],
    specifications: {
      'Capacity': '100 - 110 Day-Old Chicks',
      'Dimensions': '60 x 48 x 16 cm',
      'Compartments': '4 inner quadrants',
      'Material': 'Heavy-duty double-wall corrugated cardboard',
      'Stack Load Limit': 'Up to 10 boxes high when loaded'
    },
    benefits: [
      'Ideal for heavy commercial deliveries and farm pickups',
      'Saves labor costs with fast clip assembly',
      'Maximum protection for high-value parent breeding chicks'
    ],
    reviews: [
      { name: 'Hatchery Logistics', location: 'Limuru', rating: 5, date: 'July 14, 2026', comment: 'The center handles make these very comfortable to lift. The quad compartmental structure limits crowd sliding.' }
    ]
  },
  
  // New "Packages" Category Items
  {
    id: 'package-hobbyist',
    category: 'packages',
    name: 'Hobbyist Incubation Starter Kit',
    price: 'KES 14,500 / $110.00 complete',
    images: [
      'var(--hero-bg-url)',
      'var(--eggs-img-url)',
      'var(--incubator-img-url)'
    ],
    description: 'An all-in-one starter bundle featuring our automatic 48 Egg Incubator, premium high-fertility breeding eggs, a candler testing light, and setup guide.',
    features: [
      '1x Automated 48-Egg Incubator (Dual voltage AC/DC)',
      '30x Premium Hatching Eggs (Broiler or Layer)',
      '1x Precision LED Egg Candling Tester Lamp',
      '1x On-Call Incubation Guidance & Setup Manual'
    ],
    specifications: {
      'Target Group': 'Home breeders, backyard farms, schools',
      'Setup Area Needed': '1 square meter table surface',
      'Hatch Potential': '25-28 healthy chicks per cycle',
      'Backup Power Required': '12V 45Ah battery compatible',
      'Warranty': '6 months technical warranty'
    },
    benefits: [
      'Guaranteed egg compatibility and high initial fertility check',
      'Full backup power configuration protects against local grid outages',
      'Step-by-step guidance manuals take the guesswork out of temperature management'
    ],
    reviews: [
      { name: 'Clara Achieng', location: 'Nairobi', rating: 5, date: 'July 05, 2026', comment: 'Bought this for my kids as a biology project. The guide was so easy to read and we hatched 26 healthy layers!' },
      { name: 'Benson Wekesa', location: 'Kitale', rating: 4.8, date: 'June 17, 2026', comment: 'Outstanding starter pack. The dual battery connectors worked flawlessly during a 6-hour power cut.' }
    ]
  },
  {
    id: 'package-broiler-startup',
    category: 'packages',
    name: 'Commercial Poultry Startup Pack',
    price: 'KES 52,000 / $400.00 complete',
    images: [
      'var(--chicks-img-url)',
      'var(--box-100-img-url)',
      'var(--hero-bg-url)'
    ],
    description: 'A robust starting bundle for commercial meat production. Includes 500 vaccinated day-old broiler chicks, transport boxes, feed startup bags, and vaccination schedule chart.',
    features: [
      '500x Fully Vaccinated Cobb 500 Broiler Chicks',
      '10x Durable Chick Transport boxes (Flat-pack ready)',
      '5x Bags (50kg) high-yield Broiler Starter Crumble Feed',
      '1x Breeder Vet Schedule Chart & expert consultation'
    ],
    specifications: {
      'Target Group': 'Commercial broiler farms, group coops',
      'Brooding Area Required': '15-20 square meters',
      'Feed Type': 'Broiler Starter Crumbles (High protein)',
      'Delivery Logistics': 'Climate-controlled truck delivery included',
      'Expected Maturity': '35 - 42 days'
    },
    benefits: [
      'Saves overhead on separate chick and feed logistics',
      'Full day-zero vaccination sets drastically reduce standard farm loss ratios',
      'Direct veterinarian consult hotline available for troubleshooting bird behavior'
    ],
    reviews: [
      { name: 'Kiprotich Sang', location: 'Eldoret', rating: 5, date: 'July 20, 2026', comment: 'This is the most convenient package ever. Chicks and feed arrived at the same time on a sanitized truck. Harvested at 38 days!' },
      { name: 'Mercy Nduta', location: 'Ruiru', rating: 4.9, date: 'July 02, 2026', comment: 'The Cobb 500 breed grow very fast. The starter crumb feed was high quality. Highly recommended package.' }
    ]
  },
  {
    id: 'package-enterprise',
    category: 'packages',
    name: 'Enterprise Hatchery Setup Pack',
    price: 'KES 220,000 / $1,692.00 complete',
    images: [
      'var(--incubator-img-url)',
      'var(--eggs-img-url)',
      'var(--hero-bg-url)'
    ],
    description: 'The ultimate business pack for establishing a community hatching center. Includes our industrial 1056 Egg Incubator/Hatcher combo, 900 premium breeding eggs, on-site setup, and training.',
    features: [
      '1x Industrial 1056 Egg Incubator/Hatcher Cabinet',
      '900x Graded Breeding Eggs (Layers or Improved Kienyeji)',
      '1x On-Site Installation, calibration, and training seminar',
      '1x Full Year Priority Technical Warranty Support'
    ],
    specifications: {
      'Target Group': 'Large hatcheries, farming cooperatives, county groups',
      'Incubator Dimensions': '135 x 90 x 135 cm',
      'Power Supply': '220V AC Single Phase / Solar Grid compatible',
      'Hatch potential': '800-850 chicks per weekly stagger cycle',
      'Cabinet Build': 'Thick insulated sandwich color steel plate'
    },
    benefits: [
      'Direct expert setup prevents sensor calibration errors',
      'Huge local business opportunity supplying local backyard farmers',
      'Priority hotline replacement warranty guarantees zero downtime during critical incubation periods'
    ],
    reviews: [
      { name: 'Chigozie Okeke', location: 'Meru Coop', rating: 5, date: 'June 25, 2026', comment: 'Oslead technician arrived on site, set up the industrial cabinet, and walked our coop members through the settings. A+ level service.' }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // Check if we are on the products page
  const productGrid = document.getElementById('products-catalog-grid');
  if (productGrid) {
    renderProducts(PRODUCTS_DATA);
    setupFilters();
  }

  // Check if we are on the homepage featured section
  const featuredGrid = document.getElementById('featured-products-grid');
  if (featuredGrid) {
    // Render first 4 items as preview
    const featuredItems = PRODUCTS_DATA.filter(p => ['chicks-broiler', 'chicks-layer', 'fertilized-eggs', 'incubator-96'].includes(p.id));
    renderProducts(featuredItems, 'featured-products-grid');
  }

  // Initialize modal actions (backward compatibility fallback)
  initProductModal();

  // Initialize single-product detail compiler
  initProductDetailPage();
});

// Render products into selected container
function renderProducts(products, containerId = 'products-catalog-grid') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';
  
  if (products.length === 0) {
    container.innerHTML = `<div class="no-products" style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--text-muted); font-size: 1.1rem; width: 100%;">No products found in this category.</div>`;
    return;
  }

  products.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = `product-card tilt-card reveal fade-up glow-card`;
    card.style.transitionDelay = `${(index % 4) * 100}ms`;
    card.setAttribute('data-category', product.category);
    
    // Inject features HTML
    const featuresList = product.features.slice(0, 3).map(f => `<li><span class="feat-check">✓</span> ${f}</li>`).join('');

    card.innerHTML = `
      <div class="product-card-img" style="background-image: ${product.images[0]}">
        <div class="product-badge">${product.category.toUpperCase()}</div>
      </div>
      <div class="product-card-content">
        <h3>${product.name}</h3>
        <div class="product-price">${product.price}</div>
        <p>${product.description.substring(0, 85)}...</p>
        <ul class="product-features">
          ${featuresList}
        </ul>
        <div class="product-card-actions">
          <a href="product-detail.html?id=${product.id}" class="btn btn-secondary learn-more-btn" data-id="${product.id}">Learn More</a>
          <button class="btn btn-primary quote-btn" data-product="${product.name}">Quote</button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Re-run animation observer and tilt listeners for dynamically rendered cards
  if (typeof initScrollReveals === 'function') initScrollReveals();
  if (typeof initTiltCards === 'function') initTiltCards();
  if (typeof initButtonRipples === 'function') initButtonRipples();
}

// Setup category filter clicks
function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      
      // Filter list
      let filteredProducts = PRODUCTS_DATA;
      if (filter !== 'all') {
        filteredProducts = PRODUCTS_DATA.filter(p => p.category === filter);
      }

      // Add a scale-out grid fade animation
      const grid = document.getElementById('products-catalog-grid');
      grid.style.opacity = '0';
      grid.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        renderProducts(filteredProducts);
        grid.style.opacity = '1';
        grid.style.transform = 'translateY(0)';
      }, 300);
    });
  });
}

// Product Specifications Pop-up Modal Controller (Legacy/Fallback modal structure)
function initProductModal() {
  // Keeping simple implementation for legacy click interceptors
  document.body.addEventListener('click', e => {
    if (e.target.classList.contains('quote-btn')) {
      const productName = e.target.getAttribute('data-product');
      handleProductQuoteRequest(productName);
    }
  });
}

// Redirect and pre-fill contact form for quote request
function handleProductQuoteRequest(productName) {
  const productSelect = document.getElementById('contact-product-select');
  const contactSection = document.getElementById('contact-section');

  if (productSelect) {
    // Pre-fill select dropdown
    for (let i = 0; i < productSelect.options.length; i++) {
      if (productSelect.options[i].text.toLowerCase().includes(productName.toLowerCase()) || 
          productName.toLowerCase().includes(productSelect.options[i].text.toLowerCase())) {
        productSelect.selectedIndex = i;
        break;
      }
    }
    
    // Focus or scroll to form
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // Save in storage and redirect
    localStorage.setItem('selectedQuoteProduct', productName);
    window.location.href = 'contact.html';
  }
}

// Dynamic Single Product Detail Page Compiler
function initProductDetailPage() {
  const detailContainer = document.getElementById('product-detail-container');
  if (!detailContainer) return; // Exit if not on product-detail.html

  // Read ?id= from URL query parameters
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');

  // Search product inside database
  const product = PRODUCTS_DATA.find(p => p.id === productId);

  if (!product) {
    detailContainer.innerHTML = `
      <div style="text-align: center; padding: 80px 24px; max-width: 600px; margin: 0 auto;">
        <h2 style="font-size: 2.2rem; color: var(--text-dark); margin-bottom: 16px;">Product Not Found</h2>
        <p style="color: var(--text-muted); margin-bottom: 30px;">The product ID requested does not exist or has been removed from our listings.</p>
        <a href="products.html" class="btn btn-primary">Return to Catalog</a>
      </div>
    `;
    return;
  }

  // Populate dynamic details HTML structure
  document.title = `${product.name} - Oslead Innovations`;

  // Render Product features list
  const featuresHTML = product.features.map(f => `<li><span class="feat-check" style="color: var(--primary-green); font-weight: 700; margin-right: 8px;">✓</span> ${f}</li>`).join('');

  // Render specifications rows
  let specsHTML = '';
  for (const [key, val] of Object.entries(product.specifications)) {
    specsHTML += `<tr><th style="text-align: left; padding: 12px 16px; font-weight: 600; border-bottom: 1px solid var(--border-light); width: 40%;">${key}</th><td style="padding: 12px 16px; color: var(--text-muted); border-bottom: 1px solid var(--border-light);">${val}</td></tr>`;
  }

  // Render benefits list
  const benefitsHTML = product.benefits.map(b => `<li><span class="feat-check" style="color: var(--primary-green); font-weight: 700; margin-right: 8px;">✓</span> ${b}</li>`).join('');

  // Render slider images
  const slidesHTML = product.images.map((img, i) => `
    <div class="detail-slide ${i === 0 ? 'active' : ''}" style="background-image: ${img}; width: 100%; height: 450px; background-size: cover; background-position: center; border-radius: 20px; transition: opacity 0.4s ease; position: ${i === 0 ? 'relative' : 'absolute'}; top: 0; left: 0; opacity: ${i === 0 ? 1 : 0};"></div>
  `).join('');

  // Render thumbnail buttons
  const thumbsHTML = product.images.map((img, i) => `
    <button class="detail-thumb ${i === 0 ? 'active' : ''}" data-index="${i}" style="background-image: ${img}; width: 80px; height: 60px; background-size: cover; background-position: center; border: 2px solid ${i === 0 ? 'var(--primary-green)' : 'transparent'}; border-radius: 8px; cursor: pointer; transition: var(--transition-smooth);"></button>
  `).join('');

  // Calculate Average Rating
  const avgRating = (product.reviews.reduce((acc, curr) => acc + curr.rating, 0) / product.reviews.length).toFixed(1);

  // Render review elements
  const reviewsHTML = product.reviews.map(r => `
    <div class="review-card" style="background: var(--secondary-light-gray); border-radius: 16px; padding: 24px; border: 1px solid var(--border-light); margin-bottom: 20px;">
      <div class="review-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--primary-green); color: var(--primary-white); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.95rem;">
            ${r.name.charAt(0)}
          </div>
          <div>
            <h5 style="font-size: 1rem; font-weight: 700; color: var(--text-dark); margin: 0;">${r.name}</h5>
            <span style="font-size: 0.8rem; color: var(--text-muted);">${r.location}</span>
          </div>
        </div>
        <div style="text-align: right;">
          <div style="color: var(--accent-gold); font-size: 0.95rem;">${'★'.repeat(Math.round(r.rating))}${'☆'.repeat(5 - Math.round(r.rating))}</div>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${r.date}</span>
        </div>
      </div>
      <p style="font-size: 0.95rem; line-height: 1.6; font-style: italic; color: var(--text-muted); margin: 0;">"${r.comment}"</p>
    </div>
  `).join('');

  // Assemble template layout
  detailContainer.innerHTML = `
    <div class="detail-grid" style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: start;">
      
      <!-- Left side Column: Images and tabs -->
      <div class="detail-media-panel">
        
        <!-- Main Carousel slider -->
        <div class="detail-slider-wrapper" style="position: relative; overflow: hidden; border-radius: 20px; box-shadow: var(--shadow-soft); margin-bottom: 20px; height: 450px; background: var(--secondary-light-gray);">
          <div class="detail-slides-container" style="position: relative; width: 100%; height: 100%;">
            ${slidesHTML}
          </div>
          <button class="detail-slider-btn prev" style="position: absolute; top: 50%; left: 20px; transform: translateY(-50%); width: 45px; height: 45px; border-radius: 50%; background: rgba(255,255,255,0.7); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 600; color: var(--primary-green); z-index: 5; transition: var(--transition-smooth);">&#10094;</button>
          <button class="detail-slider-btn next" style="position: absolute; top: 50%; right: 20px; transform: translateY(-50%); width: 45px; height: 45px; border-radius: 50%; background: rgba(255,255,255,0.7); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 600; color: var(--primary-green); z-index: 5; transition: var(--transition-smooth);">&#10095;</button>
        </div>

        <!-- Thumbnails gallery selector -->
        <div class="detail-thumbnails-row" style="display: flex; gap: 12px; margin-bottom: 50px;">
          ${thumbsHTML}
        </div>

        <!-- Tab Controls -->
        <div class="detail-tabs-bar" style="display: flex; border-bottom: 2px solid var(--border-light); margin-bottom: 30px;">
          <button class="tab-trigger active" data-tab="specs" style="padding: 12px 24px; border: none; background: none; font-family: var(--font-heading); font-weight: 600; font-size: 1rem; color: var(--primary-green); border-bottom: 3px solid var(--primary-green); cursor: pointer; transition: var(--transition-smooth);">Specifications</button>
          <button class="tab-trigger" data-tab="benefits" style="padding: 12px 24px; border: none; background: none; font-family: var(--font-heading); font-weight: 600; font-size: 1rem; color: var(--text-muted); border-bottom: 3px solid transparent; cursor: pointer; transition: var(--transition-smooth);">Benefits</button>
          <button class="tab-trigger" data-tab="reviews" style="padding: 12px 24px; border: none; background: none; font-family: var(--font-heading); font-weight: 600; font-size: 1rem; color: var(--text-muted); border-bottom: 3px solid transparent; cursor: pointer; transition: var(--transition-smooth);">Customer Reviews (${product.reviews.length})</button>
        </div>

        <!-- Tab Contents Panels -->
        <div class="detail-tabs-content">
          
          <!-- Specs Panel -->
          <div class="tab-panel active" id="panel-specs" style="display: block;">
            <table style="width: 100%; border-collapse: collapse; background: var(--secondary-light-gray); border-radius: 12px; overflow: hidden; border: 1px solid var(--border-light);">
              ${specsHTML}
            </table>
          </div>

          <!-- Benefits Panel -->
          <div class="tab-panel" id="panel-benefits" style="display: none;">
            <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 12px;">
              ${benefitsHTML}
            </ul>
          </div>

          <!-- Reviews Panel -->
          <div class="tab-panel" id="panel-reviews" style="display: none;">
            <div style="display: flex; align-items: center; gap: 20px; background: rgba(46, 125, 50, 0.05); border: 1px solid rgba(46, 125, 50, 0.1); border-radius: 16px; padding: 24px; margin-bottom: 30px;">
              <h3 style="font-size: 2.8rem; font-weight: 800; color: var(--primary-green);">${avgRating}</h3>
              <div>
                <div style="color: var(--accent-gold); font-size: 1.25rem;">★★★★★</div>
                <span style="font-size: 0.9rem; color: var(--text-muted);">Average user rating based on verified farmers feedback</span>
              </div>
            </div>
            ${reviewsHTML}
          </div>

        </div>

      </div>

      <!-- Right side Column: Title, descriptions, prices & checkout quotation form -->
      <div class="detail-info-panel" style="background: var(--primary-white); border: 1px solid var(--border-light); border-radius: 24px; padding: 40px; box-shadow: var(--shadow-soft);">
        <span class="section-tag" style="margin-bottom: 8px;">${product.category.toUpperCase()}</span>
        <h2 style="font-size: 2.2rem; color: var(--text-dark); margin-bottom: 12px;">${product.name}</h2>
        
        <!-- Price and Availability Badge -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(46, 125, 50, 0.06); padding: 18px 24px; border-radius: 14px; margin-bottom: 24px; border: 1px solid rgba(46, 125, 50, 0.12);">
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">Pricing Structure</span>
            <div style="font-size: 1.25rem; font-weight: 800; color: var(--primary-green); font-family: var(--font-alt); margin-top: 2px;">${product.price}</div>
          </div>
          <span style="display: inline-flex; align-items: center; gap: 6px; background: var(--primary-green); color: var(--primary-white); padding: 6px 14px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.5px;">
            <span style="width: 8px; height: 8px; background: #fff; border-radius: 50%; display: inline-block; animation: pulseLogo 1.5s infinite ease-in-out;"></span> In Stock
          </span>
        </div>

        <p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-muted); margin-bottom: 30px;">${product.description}</p>
        
        <h4 style="font-size: 1.1rem; color: var(--text-dark); margin-bottom: 16px; border-bottom: 1px solid var(--border-light); padding-bottom: 8px;">Key Features</h4>
        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; margin-bottom: 40px; font-size: 0.95rem;">
          ${featuresHTML}
        </ul>

        <!-- Direct checkout quote block -->
        <div class="checkout-quote-form" style="border-top: 1px solid var(--border-light); padding-top: 30px;">
          <h4 style="font-size: 1.2rem; color: var(--text-dark); margin-bottom: 16px;">Request Quotation For This Item</h4>
          <form id="detail-quote-form" onsubmit="event.preventDefault(); handleDetailFormSubmit();">
            <div class="form-group" style="margin-bottom: 18px; display: flex; flex-direction: column; gap: 6px;">
              <label style="font-size: 0.85rem; font-weight: 600; color: var(--text-dark);">Full Name</label>
              <input type="text" id="detail-quote-name" placeholder="John Doe" required style="padding: 10px 15px; border-radius: 8px; border: 1px solid var(--border-light); background: var(--secondary-light-gray);">
            </div>
            
            <div class="form-group" style="margin-bottom: 18px; display: flex; flex-direction: column; gap: 6px;">
              <label style="font-size: 0.85rem; font-weight: 600; color: var(--text-dark);">Phone / Email</label>
              <input type="text" id="detail-quote-contact" placeholder="e.g. 0712345678 or john@example.com" required style="padding: 10px 15px; border-radius: 8px; border: 1px solid var(--border-light); background: var(--secondary-light-gray);">
            </div>

            <div class="form-group" style="margin-bottom: 18px; display: flex; flex-direction: column; gap: 6px;">
              <label style="font-size: 0.85rem; font-weight: 600; color: var(--text-dark);">Message details / Volume</label>
              <textarea id="detail-quote-message" rows="3" required placeholder="Specify order quantity (e.g. 100 chicks) or setup questions..." style="padding: 10px 15px; border-radius: 8px; border: 1px solid var(--border-light); background: var(--secondary-light-gray); font-family: var(--font-body); font-size: 0.9rem; resize: none;"></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 12px 20px; font-size: 0.95rem;">Submit Quick Request</button>
          </form>
        </div>

      </div>

    </div>
  `;

  // --- Initialize Slider Listeners ---
  const slides = detailContainer.querySelectorAll('.detail-slide');
  const thumbs = detailContainer.querySelectorAll('.detail-thumb');
  const prevBtn = detailContainer.querySelector('.detail-slider-btn.prev');
  const nextBtn = detailContainer.querySelector('.detail-slider-btn.next');
  let sliderIndex = 0;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    sliderIndex = index;

    slides.forEach((slide, idx) => {
      if (idx === sliderIndex) {
        slide.style.position = 'relative';
        slide.style.opacity = '1';
      } else {
        slide.style.opacity = '0';
        slide.style.position = 'absolute';
      }
    });

    thumbs.forEach((thumb, idx) => {
      if (idx === sliderIndex) {
        thumb.style.borderColor = 'var(--primary-green)';
      } else {
        thumb.style.borderColor = 'transparent';
      }
    });
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => showSlide(sliderIndex - 1));
    nextBtn.addEventListener('click', () => showSlide(sliderIndex + 1));
  }

  thumbs.forEach((thumb, idx) => {
    thumb.addEventListener('click', () => showSlide(idx));
  });

  // --- Initialize Tab Listeners ---
  const tabTriggers = detailContainer.querySelectorAll('.tab-trigger');
  const tabPanels = detailContainer.querySelectorAll('.tab-panel');

  tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const tabTarget = trigger.getAttribute('data-tab');

      // Toggle active triggers
      tabTriggers.forEach(t => {
        t.classList.remove('active');
        t.style.color = 'var(--text-muted)';
        t.style.borderBottomColor = 'transparent';
      });
      trigger.classList.add('active');
      trigger.style.color = 'var(--primary-green)';
      trigger.style.borderBottomColor = 'var(--primary-green)';

      // Show targeted panel
      tabPanels.forEach(panel => {
        if (panel.id === `panel-${tabTarget}`) {
          panel.style.display = 'block';
        } else {
          panel.style.display = 'none';
        }
      });
    });
  });

  // --- Form Submit handler ---
  window.handleDetailFormSubmit = function() {
    const name = document.getElementById('detail-quote-name').value;
    alert(`Thank you, ${name}! Your direct quotation request for "${product.name}" has been received. Our agricultural desks will get in touch with you shortly.`);
    document.getElementById('detail-quote-form').reset();
  };
  
  // Re-run cursor listeners if custom cursor is active
  if (typeof initButtonRipples === 'function') initButtonRipples();
}
