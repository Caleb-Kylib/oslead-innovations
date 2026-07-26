/*
 * Oslead Innovations - Gallery Page Script
 * Masonry grid renderer, category filtering, and fullscreen Lightbox slider
 */

// Image Database for Gallery
const GALLERY_DATA = [
  {
    id: 'gal-farm-1',
    category: 'farm',
    title: 'Modern Breeder Facility',
    image: 'var(--hero-bg-url)',
    desc: 'Biosecure grandparent breeding chambers designed for optimal hen comfort.'
  },
  {
    id: 'gal-chicks-1',
    category: 'chicks',
    title: 'Healthy Broiler Hatchlings',
    image: 'var(--chicks-img-url)',
    desc: 'Day-old Cobb 500 broiler chicks resting in temperature-regulated trays.'
  },
  {
    id: 'gal-eggs-1',
    category: 'eggs',
    title: 'Premium Hatching Eggs',
    image: 'var(--eggs-img-url)',
    desc: 'Uniform, clean eggs graded and waiting for insertion into setting trays.'
  },
  {
    id: 'gal-incubator-1',
    category: 'incubators',
    title: 'Microcomputer Control Incubator',
    image: 'var(--incubator-img-url)',
    desc: 'Modern intelligent cabinet incubator maintaining uniform internal environments.'
  },
  {
    id: 'gal-equipment-1',
    category: 'equipment',
    title: '50-Chick Shipping Boxes',
    image: 'var(--box-img-url)',
    desc: 'Biodegradable cardboard transport boxes prepared for local shipping.'
  },
  {
    id: 'gal-delivery-1',
    category: 'delivery',
    title: 'Hatchery Delivery Fleet',
    image: 'var(--hero-bg-url)',
    desc: 'Climate-controlled delivery vans ready for transit across agricultural regions.'
  },
  {
    id: 'gal-chicks-2',
    category: 'chicks',
    title: 'Vaccinated Layer Chicks',
    image: 'var(--chicks-img-url)',
    desc: 'Isa Brown chicks immediately vaccinated and active under brooding lamps.'
  },
  {
    id: 'gal-eggs-2',
    category: 'eggs',
    title: 'Hatchery Grading Line',
    image: 'var(--eggs-img-url)',
    desc: 'Automated weight and shell integrity scanner check for optimized hatching.'
  },
  {
    id: 'gal-incubator-2',
    category: 'incubators',
    title: 'Commercial 528 Egg Hatcher',
    image: 'var(--incubator-img-url)',
    desc: 'Incubation unit showing multi-tier tray turning layouts.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const galleryGrid = document.getElementById('gallery-masonry-grid');
  if (!galleryGrid) return;

  renderGallery(GALLERY_DATA);
  setupGalleryFilters();
  initLightbox();
});

// Render images in masonry layout
function renderGallery(items) {
  const grid = document.getElementById('gallery-masonry-grid');
  if (!grid) return;

  grid.innerHTML = '';

  items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'gallery-card reveal scale-in';
    card.style.transitionDelay = `${(index % 3) * 100}ms`;
    card.setAttribute('data-category', item.category);
    card.setAttribute('data-index', index);

    card.innerHTML = `
      <div class="gallery-card-img" style="background-image: ${item.image}">
        <div class="gallery-card-overlay">
          <div class="gallery-card-info">
            <span class="gallery-card-tag">${item.category.toUpperCase()}</span>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>
          <button class="gallery-zoom-btn" data-index="${index}">
            <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Re-run scroll triggers for reveals
  if (typeof initScrollReveals === 'function') initScrollReveals();
}

// Category filter button binds
function setupGalleryFilters() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const grid = document.getElementById('gallery-masonry-grid');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      
      let filteredItems = GALLERY_DATA;
      if (filter !== 'all') {
        filteredItems = GALLERY_DATA.filter(item => item.category === filter);
      }

      // Smooth fade transition
      grid.style.opacity = '0';
      grid.style.transform = 'scale(0.98)';
      
      setTimeout(() => {
        renderGallery(filteredItems);
        grid.style.opacity = '1';
        grid.style.transform = 'scale(1)';
      }, 300);
    });
  });
}

// Fullscreen Lightbox Controller
function initLightbox() {
  let lightbox = document.getElementById('gallery-lightbox');
  
  // Create Lightbox structure if not exists
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'gallery-lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-backdrop"></div>
      <button class="lightbox-close">&times;</button>
      <button class="lightbox-btn lightbox-prev">&#10094;</button>
      <button class="lightbox-btn lightbox-next">&#10095;</button>
      <div class="lightbox-content">
        <div class="lightbox-image-container">
          <img id="lightbox-img" src="" alt="Lightbox View">
        </div>
        <div class="lightbox-caption">
          <h3 id="lightbox-title">Image Title</h3>
          <p id="lightbox-desc">Image Description</p>
          <span id="lightbox-counter">1 / 9</span>
        </div>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const backdrop = lightbox.querySelector('.lightbox-backdrop');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  const lightboxImg = lightbox.querySelector('#lightbox-img');
  const lightboxTitle = lightbox.querySelector('#lightbox-title');
  const lightboxDesc = lightbox.querySelector('#lightbox-desc');
  const lightboxCounter = lightbox.querySelector('#lightbox-counter');

  let activeIndex = 0;
  let activeList = GALLERY_DATA;

  function showImage(index) {
    if (index < 0) index = activeList.length - 1;
    if (index >= activeList.length) index = 0;
    
    activeIndex = index;
    const item = activeList[activeIndex];
    
    // Resolve CSS variable url or file url to clean src string
    let imgSrc = '';
    if (item.image.includes('var(--')) {
      // Resolve CSS custom property
      const varName = item.image.replace('var(', '').replace(')', '').trim();
      const style = getComputedStyle(document.documentElement);
      imgSrc = style.getPropertyValue(varName).trim().replace(/['"]/g, '').replace('url(', '').replace(')', '');
    } else {
      imgSrc = item.image;
    }
    
    // Set parameters
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = imgSrc;
      lightboxTitle.textContent = item.title;
      lightboxDesc.textContent = item.desc;
      lightboxCounter.textContent = `${activeIndex + 1} / ${activeList.length}`;
      lightboxImg.style.opacity = '1';
    }, 150);
  }

  // Open Lightbox handler
  document.body.addEventListener('click', e => {
    const zoomBtn = e.target.closest('.gallery-zoom-btn');
    const cardImg = e.target.closest('.gallery-card-img');
    
    if (zoomBtn || cardImg) {
      // Determine list based on current active category filter
      const activeFilterBtn = document.querySelector('.gallery-filter-btn.active');
      const activeFilter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
      
      if (activeFilter === 'all') {
        activeList = GALLERY_DATA;
      } else {
        activeList = GALLERY_DATA.filter(item => item.category === activeFilter);
      }

      // Determine clicked index within the filtered list
      const card = e.target.closest('.gallery-card');
      if (!card) return;
      
      const cardIndex = parseInt(card.getAttribute('data-index'), 10);
      
      // If we filtered, the indexes inside cards might match old indices. Let's find by ID instead.
      const itemTitle = card.querySelector('h3').textContent;
      const filteredIndex = activeList.findIndex(item => item.title === itemTitle);
      
      showImage(filteredIndex !== -1 ? filteredIndex : 0);
      
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });

  // Navigation callbacks
  function showNext() { showImage(activeIndex + 1); }
  function showPrev() { showImage(activeIndex - 1); }
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);
  closeBtn.addEventListener('click', closeLightbox);
  backdrop.addEventListener('click', closeLightbox);

  // Keyboard navigation support
  window.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'Escape') closeLightbox();
  });

  // Touch Swipe gestures support
  let touchStartX = 0;
  let touchEndX = 0;
  
  lightbox.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const threshold = 50; // Minimum swipe distance
    if (touchEndX < touchStartX - threshold) {
      showNext(); // Swiped Left -> Show Next
    }
    if (touchEndX > touchStartX + threshold) {
      showPrev(); // Swiped Right -> Show Prev
    }
  }
}
