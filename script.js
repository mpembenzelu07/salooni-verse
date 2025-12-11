// script.js - Salooni Verse Website Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Language Toggle
    const languageSwitcher = document.querySelector('.language-switcher');
    const englishElements = document.querySelectorAll('.english');
    const swahiliElements = document.querySelectorAll('.swahili');
    let isEnglish = true;
    
    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', function() {
            isEnglish = !isEnglish;
            
            if (isEnglish) {
                englishElements.forEach(el => el.style.display = 'block');
                swahiliElements.forEach(el => el.style.display = 'none');
                this.innerHTML = '<i class="fas fa-globe"></i><span>EN</span>';
            } else {
                englishElements.forEach(el => el.style.display = 'none');
                swahiliElements.forEach(el => el.style.display = 'block');
                this.innerHTML = '<i class="fas fa-globe"></i><span>SW</span>';
            }
            
            // Save preference to localStorage
            localStorage.setItem('salooni-language', isEnglish ? 'en' : 'sw');
        });
        
        // Load saved language preference
        const savedLang = localStorage.getItem('salooni-language');
        if (savedLang === 'sw') {
            languageSwitcher.click(); // Trigger switch to Swahili
        }
    }
    
    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (mobileToggle) {
                    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Download App Button
    const downloadButtons = document.querySelectorAll('.cta-button');
    downloadButtons.forEach(button => {
        if (button.textContent.includes('Download') || button.textContent.includes('Pakua')) {
            button.addEventListener('click', function() {
                if (isEnglish) {
                    alert('✨ Thank you for your interest! The Salooni Verse app will be available soon on the App Store and Google Play.');
                } else {
                    alert('✨ Asante kwa kupendezwa! Programu ya Salooni Verse itapatikana hivi karibuni kwenye App Store na Google Play.');
                }
            });
        }
    });
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (isEnglish) {
                alert('✨ Thank you for your message! Our team will contact you within 24 hours.');
            } else {
                alert('✨ Asante kwa ujumbe wako! Timu yetu itawasiliana nawe ndani ya masaa 24.');
            }
            
            contactForm.reset();
        });
    }
    
    // Category Card Hover Effects
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.category-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.category-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0)';
            }
        });
    });
    
    // Feature Card Hover Effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Initialize with English visible
    if (englishElements.length > 0) {
        swahiliElements.forEach(el => el.style.display = 'none');
    }
    
    // Add decorative gold elements dynamically
    function addGoldElements() {
        const sections = document.querySelectorAll('.section, .hero');
        sections.forEach(section => {
            for (let i = 0; i < 3; i++) {
                const goldDot = document.createElement('div');
                goldDot.className = 'gold-dot';
                goldDot.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 4 + 2}px;
                    height: ${Math.random() * 4 + 2}px;
                    background: var(--gold);
                    border-radius: 50%;
                    opacity: ${Math.random() * 0.3 + 0.1};
                    z-index: -1;
                `;
                goldDot.style.left = `${Math.random() * 100}%`;
                goldDot.style.top = `${Math.random() * 100}%`;
                section.appendChild(goldDot);
            }
        });
    }
    
    addGoldElements();
    
    // Page transition effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Form select language handling
    const formSelects = document.querySelectorAll('select.form-control');
    formSelects.forEach(select => {
        select.addEventListener('change', function() {
            // Show/hide options based on language
            const options = this.querySelectorAll('option');
            options.forEach(option => {
                if (isEnglish && option.classList.contains('swahili')) {
                    option.style.display = 'none';
                } else if (!isEnglish && option.classList.contains('english')) {
                    option.style.display = 'none';
                } else {
                    option.style.display = 'block';
                }
            });
        });
    });
});
