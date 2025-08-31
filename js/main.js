 // WhatsApp Number - Replace with actual number
const whatsappNumber = "+2348033554867";

// Mobile Menu Toggle
let mobileMenuOpen = false;

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    mobileMenuOpen = !mobileMenuOpen;
    
    if (mobileMenuOpen) {
mobileNav.classList.add('active');
menuIcon.style.display = 'none';
closeIcon.style.display = 'block';
    } else {
mobileNav.classList.remove('active');
menuIcon.style.display = 'block';
closeIcon.style.display = 'none';
    }
}

window.onload = function () {
    const flicker = document.querySelector('.banner-button');
    flicker.classList.add('flicker');
};



// WhatsApp Integration
function openWhatsApp(message = "Hello! I'm interested in your weighing equipment. Can you help me?") {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
}

// Search Functionality
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (query) {
// In a real application, you would perform the actual search
// For demo purposes, we'll open WhatsApp with search query
const searchMessage = `I'm looking for: ${query}. Can you help me find the right weighing equipment?`;
openWhatsApp(searchMessage);
    } else {
alert('Please enter a search term');
    }
}

// Handle Enter key in search inputs
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
performSearch();
    }
});

document.getElementById('mobileSearchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
const query = this.value.trim();
if (query) {
    const searchMessage = `I'm looking for: ${query}. Can you help me find the right weighing equipment?`;
    openWhatsApp(searchMessage);
} else {
    alert('Please enter a search term');
}
    }
});

// Close mobile menu when clicking on links
document.querySelectorAll('.mobile-nav-link, .mobile-quote-button').forEach(link => {
    link.addEventListener('click', () => {
if (mobileMenuOpen) {
    toggleMobileMenu();
}
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const header = document.querySelector('.header');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    
    if (mobileMenuOpen && !header.contains(e.target)) {
toggleMobileMenu();
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
    target.scrollIntoView({
behavior: 'smooth'
    });
}
    });
});

    // WhatsApp integration
    function handleWhatsAppClick(message = "Hello! I'm interested in your weighing equipment. Can you help me?") {
const encodedMessage = encodeURIComponent(message);
const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
window.open(url, '_blank');
    }

    function handleCategoryClick(category) {
const message = `I'm interested in ${category}. Can you show me available models?`;
handleWhatsAppClick(message);
    }

    // Initialize everything when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
initCarousel();

// Set total slides
document.getElementById('totalSlides').textContent = slides.length;
    });

    // Handle window resize
    window.addEventListener('resize', function() {
// Recreate particles on resize for better positioning
createFloatingParticles();
    });

// WhatsApp integration
function handleCategoryClick(categoryName) {
    const message = `I'm interested in ${categoryName}. Can you show me available models?`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
}

// Stats data
const statsData = [
    {
number: "20+",
label: "Years Experience",
iconType: "award",
colorClass: "icon-blue",
targetValue: 20,
suffix: "+"
    },
    {
number: "500+",
label: "Happy Clients",
iconType: "users",
colorClass: "icon-green",
targetValue: 500,
suffix: "+"
    },
    {
number: "1000+",
label: "Equipment Installed",
iconType: "settings",
colorClass: "icon-purple",
targetValue: 1000,
suffix: "+"
    },
    {
number: "24/7",
label: "Support Available",
iconType: "clock",
colorClass: "icon-orange",
targetValue: 24,
suffix: "/7"
    }
];

// Get icon SVG based on type
function getIconSVG(type) {
    const icons = {
award: `<svg class="stat-icon icon" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/>
</svg>`,
users: `<svg class="stat-icon icon" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
</svg>`,
settings: `<svg class="stat-icon icon" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
</svg>`,
clock: `<svg class="stat-icon icon" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
</svg>`
    };
    return icons[type] || icons.award;
}

// Create stat card element
function createStatCard(stat, index) {
    const cardDiv = document.createElement('div');
    cardDiv.className = `stat-card ${stat.colorClass}`;
    cardDiv.setAttribute('data-target', stat.targetValue);
    cardDiv.setAttribute('data-suffix', stat.suffix);

    const icon = getIconSVG(stat.iconType);

    cardDiv.innerHTML = `
<div class="stat-icon-container">
    ${icon}
</div>
<div class="stat-number" data-target="${stat.targetValue}">${stat.number}</div>
<p class="stat-label">${stat.label}</p>
    `;

    return cardDiv;
}

// Animate counter
function animateCounter(element, target, suffix, duration = 2000) {
    const startValue = 0;
    const increment = target / (duration / 50);
    let currentValue = startValue;

    element.classList.add('counting');

    const timer = setInterval(() => {
currentValue += increment;
if (currentValue >= target) {
    currentValue = target;
    clearInterval(timer);
}

if (suffix === '/7') {
    element.textContent = Math.floor(currentValue) + suffix;
} else {
    element.textContent = Math.floor(currentValue) + suffix;
}
    }, 50);
}

// Initialize stats
function initializeStats() {
    const grid = document.getElementById('statsGrid');
    
    statsData.forEach((stat, index) => {
const card = createStatCard(stat, index);
grid.appendChild(card);
    });
}

// Set up intersection observer for animations
function setupScrollAnimations() {
    const observerOptions = {
threshold: 0.3,
rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
// Animate the stat card
entry.target.style.animationPlayState = 'running';

// Animate the counter
const numberElement = entry.target.querySelector('.stat-number');
const target = parseInt(entry.target.getAttribute('data-target'));
const suffix = entry.target.getAttribute('data-suffix');

// Only animate once
if (!numberElement.classList.contains('animated')) {
    numberElement.classList.add('animated');
    setTimeout(() => {
animateCounter(numberElement, target, suffix);
    }, 500); // Delay to let card animation start first
}

// Unobserve after animation
observer.unobserve(entry.target);
    }
});
    }, observerOptions);

    // Observe all stat cards
    document.querySelectorAll('.stat-card').forEach(card => {
observer.observe(card);
    });
}

// Add hover sound effect (optional)
function addHoverEffects() {
    const cards = document.querySelectorAll('.stat-card');
    
    cards.forEach(card => {
card.addEventListener('mouseenter', () => {
    const icon = card.querySelector('.stat-icon');
    icon.style.transform = 'scale(1.1) rotate(5deg)';
});

card.addEventListener('mouseleave', () => {
    const icon = card.querySelector('.stat-icon');
    icon.style.transform = 'scale(1) rotate(0deg)';
});
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeStats();
    
    // Set up animations after a short delay
    setTimeout(() => {
setupScrollAnimations();
addHoverEffects();
    }, 100);
});

// Add accessibility enhancements
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.stat-card');
    
    cards.forEach(card => {
card.setAttribute('role', 'article');
card.setAttribute('aria-label', `${card.querySelector('.stat-number').textContent} ${card.querySelector('.stat-label').textContent}`);
    });
});

// Performance optimization - pause animations when not visible
document.addEventListener('visibilitychange', function() {
    const cards = document.querySelectorAll('.stat-card');
    
    cards.forEach(card => {
if (document.hidden) {
    card.style.animationPlayState = 'paused';
} else {
    card.style.animationPlayState = 'running';
}
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.target.classList.contains('stat-card')) {
if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    // Add any click functionality here if needed
    e.target.style.transform = 'scale(0.95)';
    setTimeout(() => {
e.target.style.transform = '';
    }, 150);
}
    }
});
    // Features data
const features = [
    "20+ Years Experience",
    "500+ Installations", 
    "Certified Equipment",
    "24/7 Support",
    "Nationwide Service",
    "Quality Guarantee"
];

// WhatsApp integration
function handleCTAClick() {
    const message = "I'd like to learn more about why I should choose MIM Electronics for my weighing needs.";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
}

// Create feature item element
function createFeatureItem(feature, index) {
    const featureDiv = document.createElement('div');
    featureDiv.className = 'feature-item';

    featureDiv.innerHTML = `
<svg class="feature-icon icon-filled" viewBox="0 0 24 24">
    <path d="M9 12l2 2 4-4"/>
    <circle cx="12" cy="12" r="10"/>
</svg>
<span class="feature-text">${feature}</span>
    `;

    return featureDiv;
}

// Initialize features
function initializeFeatures() {
    const grid = document.getElementById('featuresGrid');
    
    features.forEach((feature, index) => {
const item = createFeatureItem(feature, index);
grid.appendChild(item);
    });
}

// Add intersection observer for scroll animations
function setupScrollAnimations() {
    const observerOptions = {
threshold: 0.2,
rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
// Trigger animations
entry.target.style.animationPlayState = 'running';

// Unobserve after animation
observer.unobserve(entry.target);
    }
});
    }, observerOptions);

    // Observe animated elements
    const animatedElements = document.querySelectorAll('.section-title, .section-subtitle, .feature-item, .cta-section');
    animatedElements.forEach(el => {
observer.observe(el);
    });
}

// Add parallax effect to floating elements
function setupParallax() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', () => {
const scrollTop = window.pageYOffset;
const rate = scrollTop * -0.5;

floatingElements.forEach((element, index) => {
    const speed = 0.2 + (index * 0.1);
    const yPos = rate * speed;
    element.style.transform = `translate3d(0, ${yPos}px, 0)`;
});
    });
}

// Add hover effects for feature items
function addHoverEffects() {
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach(item => {
item.addEventListener('mouseenter', () => {
    const icon = item.querySelector('.feature-icon');
    icon.style.transform = 'scale(1.2) rotate(5deg)';
    icon.style.color = '#34d399';
});

item.addEventListener('mouseleave', () => {
    const icon = item.querySelector('.feature-icon');
    icon.style.transform = 'scale(1) rotate(0deg)';
    icon.style.color = '#10b981';
});
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeFeatures();
    
    // Set up CTA button
    document.getElementById('ctaButton').onclick = handleCTAClick;
    
    // Set up animations and effects
    setTimeout(() => {
setupScrollAnimations();
setupParallax();
addHoverEffects();
    }, 100);
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.target.id === 'ctaButton') {
if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    handleCTAClick();
}
    }
});

// Add accessibility enhancements
document.addEventListener('DOMContentLoaded', function() {
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach((item, index) => {
item.setAttribute('role', 'listitem');
item.setAttribute('aria-label', `Feature ${index + 1}: ${item.querySelector('.feature-text').textContent}`);
    });
    
    // Make features grid a list for screen readers
    const grid = document.getElementById('featuresGrid');
    grid.setAttribute('role', 'list');
    grid.setAttribute('aria-label', 'Why choose MIM Electronics features');
});

// Performance optimization - pause animations when not visible
document.addEventListener('visibilitychange', function() {
    const animatedElements = document.querySelectorAll('.floating-element, .features-banner::after');
    
    animatedElements.forEach(element => {
if (document.hidden) {
    element.style.animationPlayState = 'paused';
} else {
    element.style.animationPlayState = 'running';
}
    });
});

// Add touch feedback for mobile
if ('ontouchstart' in window) {
    document.addEventListener('DOMContentLoaded', function() {
const ctaButton = document.getElementById('ctaButton');

ctaButton.addEventListener('touchstart', function() {
    this.style.transform = 'translateY(0px) scale(0.95)';
});

ctaButton.addEventListener('touchend', function() {
    this.style.transform = '';
});
    });
}

const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const fills = document.querySelectorAll('.indicator-fill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const container = document.getElementById('carouselContainer');

let idx = 0;
const slideDuration = 4000;
let autoTimer;
let isPaused = false;
let remainingTime = slideDuration;
let startX = 0;
let startY = 0;
let touchMoved = false;
let direction = null;
let isSwiping = false;
let lastSlideChange = 0;
const debounceTime = 300; // ms to prevent rapid slide changes
const holdThreshold = 400; // ms to trigger hold-to-pause
let holdTimer = null;
let didHoldPause = false;

function updateSlide() {
  track.style.transform = `translateX(-${idx * 100}%)`;
  indicators.forEach((ind, i) => {
    ind.classList.toggle('active', i === idx);
    fills[i].style.transition = 'none';
    fills[i].style.width = '0';
  });
  const activeFill = fills[idx];
  setTimeout(() => {
    if (!isPaused) {
      activeFill.style.transition = `width ${remainingTime}ms linear`;
      activeFill.style.width = '100%';
    }
  }, 50);
}

function goToSlide(newIdx) {
  const now = Date.now();
  if (now - lastSlideChange < debounceTime) return;
  idx = (newIdx + slides.length) % slides.length;
  lastSlideChange = now;
  updateSlide();
  startTimer(slideDuration);
}

function nextSlide() {
  goToSlide(idx + 1);
}

function prevSlide() {
  goToSlide(idx - 1);
}

function startTimer(duration) {
  clearTimeout(autoTimer);
  if (!isPaused) {
    remainingTime = duration;
    autoTimer = setTimeout(nextSlide, duration);
  }
}

function pauseAuto() {
  clearTimeout(autoTimer);
  const activeFill = fills[idx];
  const computedStyle = window.getComputedStyle(activeFill);
  const currentWidthPx = parseFloat(computedStyle.width);
  const parentWidth = activeFill.parentElement.offsetWidth;
  const progress = parentWidth ? currentWidthPx / parentWidth : 0;
  remainingTime = slideDuration * (1 - progress);
  activeFill.style.transition = 'none';
  activeFill.style.width = `${progress * 100}%`;
}

function resumeAuto() {
  const activeFill = fills[idx];
  activeFill.style.transition = `width ${remainingTime}ms linear`;
  activeFill.style.width = '100%';
  startTimer(remainingTime);
}

function startAuto() {
  updateSlide();
  startTimer(slideDuration);
}

prevBtn.onclick = () => prevSlide();
nextBtn.onclick = () => nextSlide();
indicators.forEach((ind, i) => ind.onclick = () => goToSlide(i));

// Hold to pause logic, allow scroll, only prevent default if hold triggered
container.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  touchMoved = false;
  direction = null;
  isSwiping = false;
  didHoldPause = false;

  holdTimer = setTimeout(() => {
    isPaused = true;
    pauseAuto();
    didHoldPause = true;
    // Only prevent default if hold triggers
    e.preventDefault();
  }, holdThreshold);
}, { passive: false });

container.addEventListener('touchmove', e => {
  const diffX = e.touches[0].clientX - startX;
  const diffY = e.touches[0].clientY - startY;
  if (!touchMoved && (Math.abs(diffX) > 10 || Math.abs(diffY) > 10)) {
    touchMoved = true;
    clearTimeout(holdTimer); // cancel hold-to-pause if movement
    if (Math.abs(diffX) > Math.abs(diffY)) {
      direction = 'horizontal';
      isSwiping = true;
      isPaused = true;
      pauseAuto();
      e.preventDefault(); // Prevent horizontal scroll
    } else {
      direction = 'vertical';
      isSwiping = false;
      // let browser handle scroll, do nothing
    }
  }
}, { passive: false });

container.addEventListener('touchend', e => {
  clearTimeout(holdTimer);
  if (didHoldPause) {
    // If paused by holding, resume on release
    e.preventDefault(); // Only prevent default if hold happened!
    isPaused = false;
    resumeAuto();
    return;
  }
  if (direction === 'horizontal' && touchMoved) {
    const diffX = e.changedTouches[0].clientX - startX;
    if (Math.abs(diffX) > 50) {
      if (diffX < 0) nextSlide();
      else prevSlide();
    }
    isPaused = false;
    resumeAuto();
  }
  // If vertical or tap, do nothing
}, { passive: false });

startAuto();
// Prevent long-press context menu on mobile
container.addEventListener('contextmenu', e => e.preventDefault());