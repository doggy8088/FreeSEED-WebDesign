// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add styles to button classes
    applyButtonStyles();
    applyCardStyles();
});

// Apply custom styles to button classes
function applyButtonStyles() {
    // Primary buttons
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(btn => {
        btn.classList.add(
            'bg-primary-600',
            'hover:bg-primary-700',
            'text-white',
            'font-medium',
            'py-2',
            'px-6',
            'rounded-md',
            'shadow-sm',
            'transition-colors',
            'duration-200',
            'inline-flex',
            'items-center',
            'justify-center'
        );
    });

    // Secondary buttons
    const secondaryButtons = document.querySelectorAll('.btn-secondary');
    secondaryButtons.forEach(btn => {
        btn.classList.add(
            'bg-secondary-600',
            'hover:bg-secondary-700',
            'text-white',
            'font-medium',
            'py-2',
            'px-6',
            'rounded-md',
            'shadow-sm',
            'transition-colors',
            'duration-200',
            'inline-flex',
            'items-center',
            'justify-center'
        );
    });

    // Outline buttons
    const outlineButtons = document.querySelectorAll('.btn-outline');
    outlineButtons.forEach(btn => {
        btn.classList.add(
            'border',
            'border-primary-600',
            'text-primary-600',
            'hover:bg-primary-50',
            'font-medium',
            'py-2',
            'px-6',
            'rounded-md',
            'transition-all',
            'duration-200',
            'inline-flex',
            'items-center',
            'justify-center'
        );
    });
}

// Apply custom styles to component cards
function applyCardStyles() {
    // Feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.classList.add(
            'bg-white',
            'rounded-lg',
            'shadow-md',
            'p-6',
            'hover:shadow-lg',
            'transition-shadow',
            'duration-300',
            'flex',
            'flex-col',
            'items-center',
            'text-center'
        );

        const iconDiv = card.querySelector('.feature-icon');
        if (iconDiv) {
            iconDiv.classList.add(
                'text-3xl',
                'mb-4',
                'bg-primary-100',
                'text-primary-600',
                'rounded-full',
                'w-16',
                'h-16',
                'flex',
                'items-center',
                'justify-center'
            );
        }
    });

    // Document cards
    const documentCards = document.querySelectorAll('.document-card');
    documentCards.forEach(card => {
        card.classList.add(
            'bg-white',
            'rounded-lg',
            'shadow-md',
            'p-6',
            'hover:shadow-lg',
            'transition-shadow',
            'duration-300',
            'flex',
            'flex-col',
            'items-center',
            'text-center'
        );

        const iconDiv = card.querySelector('.document-icon');
        if (iconDiv) {
            iconDiv.classList.add(
                'text-3xl',
                'mb-4',
                'bg-primary-50',
                'text-primary-600',
                'rounded-full',
                'w-16',
                'h-16',
                'flex',
                'items-center',
                'justify-center'
            );
        }
    });

    // Task cards
    const taskCards = document.querySelectorAll('.task-card');
    taskCards.forEach(card => {
        card.classList.add(
            'bg-white',
            'rounded-lg',
            'shadow-md',
            'hover:shadow-lg',
            'transition-shadow',
            'duration-300',
            'flex',
            'flex-col',
            'md:flex-row',
            'overflow-hidden'
        );

        const contentDiv = card.querySelector('.task-content');
        if (contentDiv) {
            contentDiv.classList.add(
                'p-6',
                'flex-1'
            );
        }

        const imageDiv = card.querySelector('.task-image');
        if (imageDiv) {
            imageDiv.classList.add(
                'md:w-1/3',
                'flex',
                'items-center',
                'justify-center',
                'bg-gray-100',
                'p-4'
            );
        }
    });

    // Partner grid & cards
    const partnerGrid = document.querySelectorAll('.partner-grid');
    partnerGrid.forEach(grid => {
        grid.classList.add(
            'grid',
            'grid-cols-2',
            'md:grid-cols-3',
            'lg:grid-cols-4',
            'gap-6'
        );
    });

    const partnerCards = document.querySelectorAll('.partner-card');
    partnerCards.forEach(card => {
        card.classList.add(
            'bg-white',
            'rounded-lg',
            'shadow-sm',
            'hover:shadow-md',
            'transition-shadow',
            'duration-300',
            'p-4',
            'flex',
            'flex-col',
            'items-center',
            'text-center'
        );

        const partnerName = card.querySelector('.partner-name');
        if (partnerName) {
            partnerName.classList.add(
                'mt-3',
                'text-sm',
                'font-medium',
                'text-gray-700'
            );
        }
    });

    // News cards
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => {
        card.classList.add(
            'bg-white',
            'rounded-lg',
            'shadow-md',
            'p-6',
            'hover:shadow-lg',
            'transition-shadow',
            'duration-300',
            'flex',
            'flex-col',
            'md:flex-row',
            'items-center'
        );

        const contentDiv = card.querySelector('.news-content');
        if (contentDiv) {
            contentDiv.classList.add(
                'flex-1'
            );
        }
    });

    // Contact card
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.classList.add(
            'bg-white',
            'rounded-lg',
            'shadow-md',
            'p-6',
            'hover:shadow-lg',
            'transition-shadow',
            'duration-300'
        );

        const methods = card.querySelector('.contact-methods');
        if (methods) {
            methods.classList.add(
                'grid',
                'grid-cols-1',
                'sm:grid-cols-2',
                'gap-4'
            );
        }

        const links = card.querySelectorAll('.contact-link');
        links.forEach(link => {
            link.classList.add(
                'flex',
                'items-center',
                'space-x-3',
                'text-gray-700',
                'hover:text-primary-600',
                'transition-colors',
                'duration-200'
            );

            const icon = link.querySelector('i');
            if (icon) {
                icon.classList.add(
                    'w-6',
                    'text-center',
                    'text-primary-600'
                );
            }
        });
    });

    // Footer links
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.classList.add(
            'text-gray-300',
            'hover:text-white',
            'transition-colors',
            'duration-200',
            'text-sm'
        );
    });
}