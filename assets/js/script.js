/* ============================================
   MODERN PORTFOLIO - JAVASCRIPT
   ============================================ */

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('[id]');

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Update active nav link
      updateActiveNav(this.getAttribute('href'));
    }
  });
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
function updateActiveNav(targetId) {
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === targetId) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ============================================
// SCROLL ANIMATION - FADE IN ON SCROLL
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.research-card, .project-card, .testimonial-card, .stat').forEach(el => {
  observer.observe(el);
});

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// ============================================
// COPY EMAIL TO CLIPBOARD
// ============================================
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.addEventListener('click', function(e) {
    // Allow browser default but add visual feedback
    const email = this.getAttribute('href').replace('mailto:', '');
    console.log('Email:', email);
  });
});

// ============================================
// MOBILE MENU (if implementing later)
// ============================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
  });

  // Close menu when link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-menu').classList.remove('active');
    });
  });
}

// ============================================
// HEADER SHADOW ON SCROLL
// ============================================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ============================================
// SKILL TAGS STAGGER ANIMATION
// ============================================
document.querySelectorAll('.skill-tags').forEach((group, index) => {
  const tags = group.querySelectorAll('.skill-tag');
  tags.forEach((tag, i) => {
    tag.style.animationDelay = `${i * 0.1}s`;
  });
});

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio loaded successfully');
  
  // Add any initialization code here
  // For example, set the active nav link on page load
  const homeLink = document.querySelector('a[href="#home"]');
  if (homeLink) {
    homeLink.classList.add('active');
  }
});

// ============================================
// FORM VALIDATION (when contact form is added)
// ============================================
function validateForm(form) {
  const name = form.querySelector('input[name="name"]');
  const email = form.querySelector('input[name="email"]');
  const message = form.querySelector('textarea[name="message"]');

  let isValid = true;

  // Validate name
  if (!name || name.value.trim().length < 2) {
    console.log('Name is required');
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.value)) {
    console.log('Valid email is required');
    isValid = false;
  }

  // Validate message
  if (!message || message.value.trim().length < 10) {
    console.log('Message must be at least 10 characters');
    isValid = false;
  }

  return isValid;
}

// ============================================
// CSS FADE-IN ANIMATION
// ============================================
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: scale(0);
    animation: rippleEffect 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes rippleEffect {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
