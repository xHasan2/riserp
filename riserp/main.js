// Add animation delay to rule categories
window.addEventListener('load', function() {
    const categories = document.querySelectorAll('.rule-category');
    categories.forEach((category, index) => {
        setTimeout(() => {
            category.style.opacity = '1';
            category.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Navbar transparency on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.style.background = 'rgba(44, 24, 16, 0.98)';
    } else {
        navbar.style.background = 'rgba(44, 24, 16, 0.95)';
    }
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.rule-category').forEach(category => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(50px)';
    category.style.transition = 'all 0.6s ease';
    observer.observe(category);
});

// Add hover effects for enhanced interactivity
document.querySelectorAll('.rule-category').forEach(category => {
    category.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    category.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});