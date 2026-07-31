/*
 * Oslead Innovations - Core JavaScript File
 * Layout engine, cursor follower, nav systems, ripples, and loading controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initStickyHeader();
  initMobileNav();
  initScrollProgress();
  initButtonRipples();
  initBackToTop();
});

/* 1. Page Preloader */
function initPreloader() {
  const preloader = document.querySelector('.preloader');
  if (!preloader) return;
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('fade-out');
      document.body.style.overflow = 'visible';
    }, 600); // Small delay to guarantee assets render
  });
}

/* 2. Sticky Glassmorphic Header & Active Links */
function initStickyHeader() {
  const header = document.querySelector('header');
  const currentPath = window.location.pathname;
  const pageName = currentPath.split('/').pop() || 'index.html';

  // Highlight active links based on current file
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === pageName || (pageName === 'index.html' && href === '#') || (pageName === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* 3. Mobile Navigation Drawer & Backdrop Blur Overlay */
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const overlay = document.querySelector('.mobile-overlay');
  
  if (!hamburger || !mobileNav || !overlay) return;

  function toggleMenu() {
    const isActive = mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Toggle Hamburg/X line shape
    const lines = hamburger.querySelectorAll('.line');
    if (isActive) {
      lines[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
      lines[1].style.opacity = '0';
      lines[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
      lines[0].style.transform = 'none';
      lines[1].style.opacity = '1';
      lines[2].style.transform = 'none';
    }
  }

  hamburger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
}

/* 4. Reading / Scroll Progress Bar */
function initScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      const scrollPercent = (window.scrollY / docHeight) * 100;
      progressBar.style.width = scrollPercent + '%';
    }
  });
}

/* 6. Click Button ripple effects */
function initButtonRipples() {
  const buttons = document.querySelectorAll('.btn, button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Find mouse coordinate inside button
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

/* 7. Back To Top */
function initBackToTop() {
  const btt = document.querySelector('.back-to-top');
  if (!btt) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btt.classList.add('active');
    } else {
      btt.classList.remove('active');
    }
  });

  btt.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
