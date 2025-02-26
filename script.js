// FreeSEED Website JavaScript

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements when they come into view
    animateOnScroll();

    // Add smooth scrolling to all anchor links
    setupSmoothScrolling();

    // Setup mobile navigation menu
    setupMobileNav();

    // Add Taiwan-themed accent bar to the top of the page
    addTaiwanAccent();
});

// Function to animate elements when they come into view
function animateOnScroll() {
    const elements = document.querySelectorAll('.section-animate');
    const options = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Function to add smooth scrolling to anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Function to setup mobile navigation
function setupMobileNav() {
    const navToggle = document.createElement('button');
    navToggle.className = 'md:hidden text-white p-2';
    navToggle.innerHTML = '<i class="fas fa-bars text-xl"></i>';

    const nav = document.querySelector('nav');
    const navList = nav.querySelector('ul');

    if (window.innerWidth < 768) {
        navList.classList.add('mobile-nav', 'hidden');
        nav.prepend(navToggle);

        navToggle.addEventListener('click', () => {
            navList.classList.toggle('hidden');

            // Change icon based on menu state
            const icon = navToggle.querySelector('i');
            if (navList.classList.contains('hidden')) {
                icon.className = 'fas fa-bars text-xl';
            } else {
                icon.className = 'fas fa-times text-xl';
            }
        });

        // Hide menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !navList.classList.contains('hidden')) {
                navList.classList.add('hidden');
                navToggle.querySelector('i').className = 'fas fa-bars text-xl';
            }
        });
    }
}

// Add Taiwan-themed accent bar to the top of the page
function addTaiwanAccent() {
    const accent = document.createElement('div');
    accent.className = 'taiwan-accent';
    document.body.prepend(accent);
}

// Apply card hover effects
document.querySelectorAll('.bg-white.rounded-lg.shadow-md').forEach(card => {
    card.classList.add('card-hover');
});

// Add section-heading class to all section titles
document.querySelectorAll('h2.text-3xl.font-bold.text-center').forEach(heading => {
    heading.classList.add('section-heading');
});