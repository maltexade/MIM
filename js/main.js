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
        // Redirect to search-results.html with query as parameter
        window.location.href = `/html/search-results.html?q=${encodeURIComponent(query)}`;
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
            // Redirect to search-results.html with query as parameter
            window.location.href = `/html/search-results.html?q=${encodeURIComponent(query)}`;
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


// JavaScript to trigger animation on scroll for each card
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.why-card');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // run once
      }
    });
  }, {
    threshold: 0.05 // trigger when 5% is visible
  });

  cards.forEach(card => observer.observe(card));
});

//statistic counter
document.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(".stat-number");
  const currentYear = new Date().getFullYear();

  const getDynamicTarget = (el) => {
    const base = parseInt(el.getAttribute("data-base"));
    const type = el.getAttribute("data-type");

    switch (type) {
      case "years":
        return currentYear - base;
      case "clients":
        return base + (currentYear - 2020) * 20;
      case "projects":
        return base + (currentYear - 2020) * 50;
      case "support":
        return base + (currentYear - 2020);
      default:
        return base;
    }
  };

  const animateCount = (el, target) => {
    const speed = 200;
    const increment = target / speed;
    let count = 0;

    const updateCount = () => {
      count += increment;
      if (count < target) {
        el.textContent = Math.floor(count) + "+";
        requestAnimationFrame(updateCount);
      } else {
        el.textContent = target + "+";
      }
    };
    updateCount();
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetValue = getDynamicTarget(entry.target);
        animateCount(entry.target, targetValue);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  stats.forEach(stat => observer.observe(stat));
});

// Featured Products data
        const featuredProducts = [
            {
                name: "Digital Pricing Scale",
                category: "Retail Solutions",
                price: "₦299,999",
                originalPrice: "₦399,999",
                rating: 4.8,
                reviews: 234,
                image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=300&h=200&fit=crop",
                badge: "25% OFF",
                badgeColor: "featured-badge-red"
            },
            {
                name: "Platform Scale 500kg",
                category: "Industrial",
                price: "₦1,499,999",
                originalPrice: "₦1,899,999",
                rating: 4.9,
                reviews: 156,
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop",
                badge: "BESTSELLER",
                badgeColor: "featured-badge-green"
            },
            {
                name: "Precision Balance",
                category: "Laboratory",
                price: "₦899,999",
                originalPrice: "₦1,199,999",
                rating: 4.7,
                reviews: 89,
                image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300&h=200&fit=crop",
                badge: "HIGH PRECISION",
                badgeColor: "featured-badge-blue"
            },
            {
                name: "Weighbridge 60T",
                category: "Heavy Duty",
                price: "₦8,999,999",
                originalPrice: "₦12,999,999",
                rating: 4.9,
                reviews: 67,
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
                badge: "ENTERPRISE",
                badgeColor: "featured-badge-purple"
            },
            {
                name: "Crane Scale 5T",
                category: "Lifting Equipment",
                price: "₦3,499,999",
                originalPrice: "₦4,299,999",
                rating: 4.6,
                reviews: 123,
                image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=300&h=200&fit=crop",
                badge: "WIRELESS",
                badgeColor: "featured-badge-orange"
            },
            {
                name: "Analog Scale Classic",
                category: "Traditional",
                price: "₦149,999",
                originalPrice: "₦199,999",
                rating: 4.5,
                reviews: 345,
                image: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=300&h=200&fit=crop",
                badge: "RELIABLE",
                badgeColor: "featured-badge-gray"
            }
        ];

        // Featured Carousel state
        let featuredCurrentIndex = 0;
        let featuredItemsToShow = 4;

        // Featured DOM elements
        const featuredCarouselTrack = document.getElementById('featuredCarouselTrack');
        const featuredPrevBtn = document.getElementById('featuredPrevBtn');
        const featuredNextBtn = document.getElementById('featuredNextBtn');
        const featuredProgressIndicators = document.getElementById('featuredProgressIndicators');

        // Handle responsive design for featured products
        function featuredHandleResize() {
            if (window.innerWidth < 640) {
                featuredItemsToShow = 1;
            } else if (window.innerWidth < 1024) {
                featuredItemsToShow = 2;
            } else if (window.innerWidth < 1280) {
                featuredItemsToShow = 3;
            } else {
                featuredItemsToShow = 4;
            }
            featuredGenerateProductCards();
            featuredUpdateCarousel();
            featuredGenerateProgressIndicators();
        }

        // Generate featured product cards
        function featuredGenerateProductCards() {
            featuredCarouselTrack.innerHTML = featuredProducts.map(product => `
                <div class="featured-product-card" style="width: ${100 / featuredItemsToShow}%;">
                    <div class="featured-product-image-container">
                        <img src="${product.image}" alt="${product.name}" class="featured-product-image">
                        <div class="featured-product-badge ${product.badgeColor}">
                            ${product.badge}
                        </div>
                        <div class="featured-product-rating">
                            <span class="featured-star">★</span>
                            <span>${product.rating}</span>
                        </div>
                    </div>
                    <div class="featured-product-content">
                        <div class="featured-product-category">${product.category}</div>
                        <h3 class="featured-product-name">${product.name}</h3>
                        <div class="featured-product-reviews">
                            <span class="featured-stars">★★★★★</span>
                            <span>(${product.reviews})</span>
                        </div>
                        <div class="featured-product-pricing">
                            <span class="featured-current-price">${product.price}</span>
                            <span class="featured-original-price">${product.originalPrice}</span>
                        </div>
                        <button class="featured-view-details-btn" onclick="featuredViewProductDetails('${product.name}')">
                            View Details
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Generate featured progress indicators
        function featuredGenerateProgressIndicators() {
            const totalGroups = Math.ceil(featuredProducts.length / featuredItemsToShow);
            featuredProgressIndicators.innerHTML = Array.from({ length: totalGroups }, (_, index) => 
                `<button class="featured-indicator ${Math.floor(featuredCurrentIndex / featuredItemsToShow) === index ? 'active' : ''}" 
                         onclick="featuredGoToSlide(${index * featuredItemsToShow})" 
                         aria-label="Go to product group ${index + 1}"></button>`
            ).join('');
        }

        // Update featured carousel position
        function featuredUpdateCarousel() {
            let translateX = -(featuredCurrentIndex * (100 / featuredItemsToShow));
            const remaining = featuredProducts.length - featuredCurrentIndex;
            if (remaining < featuredItemsToShow) {
                const extraSpace = (featuredItemsToShow - remaining) / 2 * (100 / featuredItemsToShow);
                translateX += extraSpace;
            }
            featuredCarouselTrack.style.transform = `translateX(${translateX}%)`;
            featuredUpdateNavigationButtons();
            featuredUpdateProgressIndicators();
        }

        // Update featured navigation buttons
        function featuredUpdateNavigationButtons() {
            const canGoPrev = featuredCurrentIndex > 0;
            const canGoNext = featuredCurrentIndex + featuredItemsToShow < featuredProducts.length;
            
            featuredPrevBtn.disabled = !canGoPrev;
            featuredNextBtn.disabled = !canGoNext;
        }

        // Update featured progress indicators
        function featuredUpdateProgressIndicators() {
            const indicators = featuredProgressIndicators.querySelectorAll('.featured-indicator');
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', Math.floor(featuredCurrentIndex / featuredItemsToShow) === index);
            });
        }

        // Featured Navigation functions
        function featuredNextSlide() {
            const nextIndex = featuredCurrentIndex + featuredItemsToShow;
            if (nextIndex < featuredProducts.length) {
                featuredCurrentIndex = nextIndex;
            } else {
                featuredCurrentIndex = 0;
            }
            featuredUpdateCarousel();
        }

        function featuredPrevSlide() {
            const prevIndex = featuredCurrentIndex - featuredItemsToShow;
            if (prevIndex >= 0) {
                featuredCurrentIndex = prevIndex;
            } else {
                featuredCurrentIndex = Math.floor((featuredProducts.length - 1) / featuredItemsToShow) * featuredItemsToShow;
            }
            featuredUpdateCarousel();
        }

        function featuredGoToSlide(index) {
            featuredCurrentIndex = Math.min(index, featuredProducts.length - featuredItemsToShow);
            featuredUpdateCarousel();
        }

        // Featured Product interaction
        function featuredViewProductDetails(productName) {
            alert(`Viewing details for: ${productName}\n\nThis would typically open a product detail page or modal.`);
        }

        // Swipe functionality for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        function handleTouchStart(event) {
            touchStartX = event.touches[0].clientX;
        }

        function handleTouchMove(event) {
            touchEndX = event.touches[0].clientX;
        }

        function handleTouchEnd() {
            const swipeDistance = touchStartX - touchEndX;
            const minSwipeDistance = 50;

            if (swipeDistance > minSwipeDistance) {
                featuredNextSlide();
            } else if (swipeDistance < -minSwipeDistance) {
                featuredPrevSlide();
            }
        }

        // Featured Event listeners
        featuredNextBtn.addEventListener('click', featuredNextSlide);
        featuredPrevBtn.addEventListener('click', featuredPrevSlide);
        window.addEventListener('resize', featuredHandleResize);

        // Add touch events for swipe
        featuredCarouselTrack.addEventListener('touchstart', handleTouchStart, false);
        featuredCarouselTrack.addEventListener('touchmove', handleTouchMove, false);
        featuredCarouselTrack.addEventListener('touchend', handleTouchEnd, false);

        // Featured Auto-play functionality
        let featuredAutoPlayInterval;
        
        function featuredStartAutoPlay() {
            if (window.innerWidth >= 640) {
                featuredAutoPlayInterval = setInterval(featuredNextSlide, 5000);
            }
        }

        function featuredStopAutoPlay() {
            clearInterval(featuredAutoPlayInterval);
        }

        // Initialize featured products
        featuredHandleResize();
        featuredGenerateProductCards();
        featuredGenerateProgressIndicators();
        featuredUpdateCarousel();

        // Start featured auto-play
        featuredStartAutoPlay();

        // Pause featured auto-play on hover or touch
        const featuredSection = document.querySelector('.featured-section');
        featuredSection.addEventListener('mouseenter', featuredStopAutoPlay);
        featuredSection.addEventListener('mouseleave', featuredStartAutoPlay);
        featuredSection.addEventListener('touchstart', featuredStopAutoPlay);
        featuredSection.addEventListener('touchend', featuredStartAutoPlay);





        // WhatsApp Number - Replace with actual number
        const servicesWhatsappNumber = "+2348033554867";

        // Services data
        const servicesData = [
            {
                icon: `<svg class="services-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>`,
                title: "Installation & Setup",
                description: "Professional installation and calibration of all weighing equipment",
                image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=300&h=200&fit=crop"
            },
            {
                icon: `<svg class="services-icon" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>`,
                title: "Maintenance & Repair",
                description: "Regular maintenance services and quick repair solutions",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop"
            },
            {
                icon: `<svg class="services-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="7"/>
                    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/>
                </svg>`,
                title: "Calibration Services",
                description: "Certified calibration to ensure accuracy and compliance",
                image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300&h=200&fit=crop"
            }
        ];

        // Testimonials data
        const testimonialsData = [
            {
                name: "Chief John Okafor",
                company: "Lagos Manufacturing Ltd",
                message: "MIM Electronics provided excellent weighbridge installation. Professional service and reliable equipment. Highly recommended!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
            },
            {
                name: "Mrs. Sarah Ibrahim",
                company: "Ibrahim Trading Co",
                message: "Their pricing scales have improved our retail operations significantly. Great quality and after-sales support.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1494790108755-2616b9f4e6b1?w=100&h=100&fit=crop&crop=face"
            },
            {
                name: "Engr. David Adebayo",
                company: "Adebayo Industries",
                message: "Professional calibration services and prompt maintenance. They understand industrial requirements perfectly.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            }
        ];

        // WhatsApp integration functions
        function servicesHandleWhatsAppClick(message = "Hello! I'm interested in your weighing equipment. Can you help me?") {
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/${servicesWhatsappNumber}?text=${encodedMessage}`;
            window.open(url, '_blank');
        }

        function ctaHandleWhatsAppClick(message) {
            servicesHandleWhatsAppClick(message);
        }

        // Generate Services
        function generateServices() {
            const servicesGrid = document.getElementById('servicesGrid');
            servicesGrid.innerHTML = servicesData.map(service => `
                <div class="services-card">
                    <img src="${service.image}" alt="${service.title}" class="services-card-image">
                    <div class="services-card-content">
                        <div class="services-icon-container">
                            ${service.icon}
                        </div>
                        <h3 class="services-card-title">${service.title}</h3>
                        <p class="services-card-description">${service.description}</p>
                        <button class="services-card-button" onclick="servicesHandleWhatsAppClick('I\\'m interested in ${service.title}. Can you provide more information?')">
                            Learn More
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Generate Testimonials
        function generateTestimonials() {
            const testimonialsGrid = document.getElementById('testimonialsGrid');
            testimonialsGrid.innerHTML = testimonialsData.map(testimonial => `
                <div class="testimonials-card">
                    <div class="testimonials-rating">
                        ${Array.from({ length: testimonial.rating }, () => `
                            <svg class="testimonials-star" viewBox="0 0 24 24">
                                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                            </svg>
                        `).join('')}
                    </div>
                    <p class="testimonials-message">"${testimonial.message}"</p>
                    <div class="testimonials-client">
                        <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonials-avatar">
                        <div class="testimonials-client-info">
                            <h4>${testimonial.name}</h4>
                            <p class="testimonials-client-company">${testimonial.company}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Handle Contact Form
        function handleContactForm() {
            const form = document.getElementById('contactForm');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(form);
                const name = form.querySelector('input[type="text"]').value;
                const email = form.querySelector('input[type="email"]').value;
                const phone = form.querySelector('input[type="tel"]').value;
                const message = form.querySelector('textarea').value;
                
                const whatsappMessage = `Quote Request from Website:
Name: ${name}
Email: ${email}
Phone: ${phone}
Requirements: ${message}`;
                
                servicesHandleWhatsAppClick(whatsappMessage);
            });
        }

        // Intersection Observer for animations
        function setupScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe sections
            const sections = document.querySelectorAll('.services-section, .testimonials-section, .cta-section, .contact-section');
            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'all 0.6s ease-out';
                observer.observe(section);
            });

            // Observe cards
            const cards = document.querySelectorAll('.services-card, .testimonials-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
                observer.observe(card);
            });
        }

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            generateServices();
            generateTestimonials();
            handleContactForm();
            
            // Setup animations after content is generated
            setTimeout(() => {
                setupScrollAnimations();
            }, 100);
        });

        // Add keyboard accessibility
        document.addEventListener('keydown', function(e) {
            if (e.target.classList.contains('services-card-button') || 
                e.target.classList.contains('cta-button-primary') || 
                e.target.classList.contains('cta-button-secondary')) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.target.click();
                }
            }
        });

        // Performance optimization - pause animations when not visible
        document.addEventListener('visibilitychange', function() {
            const animatedElements = document.querySelectorAll('.services-card, .testimonials-card');
            
            animatedElements.forEach(element => {
                if (document.hidden) {
                    element.style.animationPlayState = 'paused';
                } else {
                    element.style.animationPlayState = 'running';
                }
            });
        });


// Cart State
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update Cart Count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const mobileCartCount = document.getElementById('mobileCartCount');
    const count = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    if (cartCount) cartCount.textContent = count;
    if (mobileCartCount) mobileCartCount.textContent = count;
}

// Show Cart Notification
function showCartNotification() {
    const notification = document.getElementById('cartNotification');
    if (!notification) return;

    // Use mobile cart button for animation target on mobile
    const cartBtn = window.innerWidth <= 768 ? 
        document.querySelector('.mobile-cart-btn') : 
        document.querySelector('.cart-btn');
    if (!cartBtn) return;

    const cartBtnRect = cartBtn.getBoundingClientRect();

    notification.style.display = 'block';

    gsap.fromTo(notification, 
        { opacity: 0, y: 20 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 0.5, 
            ease: "power2.out",
            onComplete: () => {
                gsap.to(notification, {
                    x: cartBtnRect.left - window.innerWidth + cartBtnRect.width / 2 + 100,
                    y: cartBtnRect.top - window.innerHeight + cartBtnRect.height / 2 + 60,
                    scale: 0.2,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.in",
                    onComplete: () => {
                        notification.style.display = 'none';
                        gsap.set(notification, { x: 0, y: 0, scale: 1, opacity: 1 });
                    }
                });
            }
        }
    );
}

// WhatsApp Integration
function openWhatsApp(message = "Hello! I'm interested in your weighing equipment. Can you help me?") {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
}

// Initialize Cart on Page Load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});