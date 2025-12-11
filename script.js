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
            
            localStorage.setItem('salooni-language', isEnglish ? 'en' : 'sw');
        });
        
        const savedLang = localStorage.getItem('salooni-language');
        if (savedLang === 'sw') {
            languageSwitcher.click();
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
    
    // Explore Services Button
    const exploreButtons = document.querySelectorAll('.cta-button');
    exploreButtons.forEach(button => {
        if (button.textContent.includes('Explore Services') || button.textContent.includes('Chunguza Huduma')) {
            button.addEventListener('click', function() {
                window.location.href = 'categories.html';
            });
        }
    });
    
    // Become a Pro Button
    const becomeProButtons = document.querySelectorAll('.secondary-button');
    becomeProButtons.forEach(button => {
        if (button.textContent.includes('Become a Pro') || button.textContent.includes('Kuwa Mtaalamu')) {
            button.addEventListener('click', function() {
                if (isEnglish) {
                    alert('✨ Join our professional community! Please visit the "Contact" page to apply as a beauty professional.');
                } else {
                    alert('✨ Jiunge na jamii yetu ya wataalamu! Tafadhali tembelea ukurasa wa "Mawasiliano" kwa kuomba kuwa mtaalamu wa urembo.');
                }
            });
        }
    });
    
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
    
    // Category Card Click to Navigate
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            window.location.href = 'categories.html';
        });
        
        // Hover Effects
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
    
    // FAQ Functionality (for contact page)
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', () => {
                    // Close all other items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                });
            }
        });
    }
    
    // Page transition effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
