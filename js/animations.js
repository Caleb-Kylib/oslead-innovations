/*
 * Oslead Innovations - Custom Animation Script
 * Scroll-trigger reveals, 3D card tilt, count-up stats, and magnetic attraction
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveals();
  initCounters();
  initMagneticButtons();
  initTiltCards();
});

/* 1. Scroll-Trigger Reveals using Intersection Observer API */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal, .image-reveal-wrapper, .text-reveal');
  
  if (revealElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Stop observing once reveal trigger completes
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

/* 2. Scroll-Triggered Animated Statistics Counters */
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (counters.length === 0) return;

  const observerOptions = {
    root: null,
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'), 10);
        const duration = 2000; // Total count duration (2 seconds)
        const frameRate = 1000 / 60; // 60 FPS
        const totalFrames = Math.round(duration / frameRate);
        let frame = 0;

        // Custom spring-like easing for numbers count-up
        function easeOutQuad(t) {
          return t * (2 - t);
        }

        const counterTimer = setInterval(() => {
          frame++;
          const progress = easeOutQuad(frame / totalFrames);
          const currentCount = Math.round(target * progress);

          // Add clean thousands separators
          counter.textContent = currentCount.toLocaleString();

          if (frame === totalFrames) {
            counter.textContent = target.toLocaleString(); // Exact target fallback
            clearInterval(counterTimer);
          }
        }, frameRate);

        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
}

/* 3. Magnetic CTA Button Interactions (Spring pull hover) */
function initMagneticButtons() {
  const magneticBtns = document.querySelectorAll('.magnetic-btn');
  if (magneticBtns.length === 0) return;

  // Check if device supports hover
  if (window.matchMedia('(hover: none)').matches) return;

  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Pull element soft toward mouse vector
      btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      // Elastic spring back to place
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

/* 4. Interactive 3D Card Hover Tilts */
function initTiltCards() {
  const tiltCards = document.querySelectorAll('.tilt-card');
  if (tiltCards.length === 0) return;

  // Check if device supports hover
  if (window.matchMedia('(hover: none)').matches) return;

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse coordinate x inside card
      const y = e.clientY - rect.top;  // Mouse coordinate y inside card
      
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      
      const dx = x - xc;
      const dy = y - yc;
      
      // Map displacement to degrees (max tilt ~6 degrees)
      const tiltX = -(dy / yc) * 6;
      const tiltY = (dx / xc) * 6;
      
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
}
