// Pricing Selection Handler
function selectPricing(optionNumber) {
    const options = {
        1: {
            name: 'الخيار الأول - تسعير كامل للخدمة',
            description: 'دفع مبلغ 1200$ مقابل تطوير التطبيق بالكامل',
            price: '1200$'
        },
        2: {
            name: 'الخيار الثاني - الشراكة في الأرباح',
            description: 'تطوير التطبيق بدون تكلفة مقدمة مقابل نسبة 15% - 25% من الأرباح',
            price: '15% - 25% من الأرباح'
        }
    };

    const selectedOption = options[optionNumber];
    
    // Show confirmation dialog
    const message = `هل تريد اختيار ${selectedOption.name}؟\n\n${selectedOption.description}\n\nالتكلفة: ${selectedOption.price}`;
    
    if (confirm(message)) {
        alert(`تم اختيار ${selectedOption.name}\n\nسيتم التواصل معك قريباً لمناقشة التفاصيل وبدء العمل على المشروع.\n\nللتواصل:\n📧 moonesmezher9@gmail.com\n📱 +963 998 025 766`);
    }
}

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Add hover effect to benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add hover effect to revenue cards
    const revenueCards = document.querySelectorAll('.revenue-card');
    revenueCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effect to pricing buttons
    const pricingButtons = document.querySelectorAll('.pricing-btn');
    pricingButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.marginTop = '-50px';
            ripple.style.marginRight = '-50px';
            ripple.style.animation = 'ripple 0.6s';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from {
            opacity: 1;
            transform: scale(0);
        }
        to {
            opacity: 0;
            transform: scale(4);
        }
    }
    
    .pricing-btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Contact Information Click Handler
document.addEventListener('DOMContentLoaded', () => {
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        const emailElement = contactInfo.querySelector('p:first-child');
        const phoneElement = contactInfo.querySelector('p:nth-child(2)');
        
        if (emailElement) {
            emailElement.style.cursor = 'pointer';
            emailElement.addEventListener('click', () => {
                window.location.href = 'mailto:moonesmezher9@gmail.com';
            });
        }
        
        if (phoneElement) {
            phoneElement.style.cursor = 'pointer';
            phoneElement.addEventListener('click', () => {
                window.location.href = 'tel:+963998025766';
            });
        }
    }
});

// Print Functionality
function printProposal() {
    window.print();
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printProposal();
    }
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 1000;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
    } else {
        scrollToTopBtn.style.opacity = '0';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('تطبيق الخدمات المتعددة - عرض تقديمي');
console.log('للتواصل: moonesmezher9@gmail.com | +963 998 025 766');
