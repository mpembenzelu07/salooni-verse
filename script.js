// SALOONI VERSE - Complete Bilingual Website Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Salooni Verse website loaded successfully!');
    
    // ========== LANGUAGE SWITCHER ==========
    const languageSwitcher = document.getElementById('languageSwitcher');
    let isEnglish = !localStorage.getItem('salooni-language') || localStorage.getItem('salooni-language') === 'en';
    
    // Function to switch language
    function switchLanguage() {
        isEnglish = !isEnglish;
        
        if (isEnglish) {
            // Switch to English
            document.body.classList.remove('swahili-active');
            localStorage.setItem('salooni-language', 'en');
            if (languageSwitcher) {
                languageSwitcher.querySelector('.lang-text').textContent = 'EN';
            }
            console.log('Switched to English');
        } else {
            // Switch to Swahili
            document.body.classList.add('swahili-active');
            localStorage.setItem('salooni-language', 'sw');
            if (languageSwitcher) {
                languageSwitcher.querySelector('.lang-text').textContent = 'SW';
            }
            console.log('Switched to Swahili');
        }
    }
    
    // Load saved language
    if (localStorage.getItem('salooni-language') === 'sw') {
        document.body.classList.add('swahili-active');
        if (languageSwitcher) {
            languageSwitcher.querySelector('.lang-text').textContent = 'SW';
        }
        isEnglish = false;
    }
    
    // Add click event to language switcher
    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', switchLanguage);
    }
    
    // ========== MOBILE MENU ==========
    const mobileToggle = document.getElementById('mobileToggle');
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
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-links') && !event.target.closest('#mobileToggle')) {
                navLinks.classList.remove('active');
                if (mobileToggle) {
                    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    }
    
    // ========== HEADER SCROLL EFFECT ==========
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
    
    // ========== EXPLORE SERVICES BUTTON ==========
    const exploreServicesBtn = document.getElementById('exploreServices');
    if (exploreServicesBtn) {
        exploreServicesBtn.addEventListener('click', function() {
            window.location.href = 'categories.html';
        });
    }
    
    // ========== BECOME A PRO BUTTON ==========
    const becomeProBtn = document.getElementById('becomePro');
    if (becomeProBtn) {
        becomeProBtn.addEventListener('click', function() {
            if (isEnglish) {
                alert('✨ Join our professional community! Please visit the "Become a Pro" section on our website or contact us directly to apply as a beauty professional.');
            } else {
                alert('✨ Jiunge na jamii yetu ya wataalamu! Tafadhali tembelea sehemu ya "Kuwa Mtaalamu" kwenye tovuti yetu au wasiliana nasi moja kwa moja kwa kuomba kuwa mtaalamu wa urembo.');
            }
        });
    }
    
    // ========== DOWNLOAD APP BUTTON ==========
    const downloadAppBtn = document.getElementById('downloadApp');
    if (downloadAppBtn) {
        downloadAppBtn.addEventListener('click', function() {
            if (isEnglish) {
                alert('✨ Thank you for your interest! The Salooni Verse app will be available soon on the App Store and Google Play. We will notify you when it\'s ready!');
            } else {
                alert('✨ Asante kwa kupendezwa! Programu ya Salooni Verse itapatikana hivi karibuni kwenye App Store na Google Play. Tutakujulisha inapokuwa tayari!');
            }
        });
    }
    
    // ========== JOIN NOW BUTTON ==========
    const joinNowBtn = document.getElementById('joinNow');
    if (joinNowBtn) {
        joinNowBtn.addEventListener('click', function() {
            window.location.href = 'contact.html';
        });
    }
    
    // ========== LEARN MORE BUTTON ==========
    const learnMoreBtn = document.getElementById('learnMore');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            window.location.href = 'about.html';
        });
    }
    
    // ========== CONTACT FORM ==========
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (isEnglish) {
                alert('✨ Thank you for your message! Our team will contact you within 24 hours. Welcome to the Salooni Verse community!');
            } else {
                alert('✨ Asante kwa ujumbe wako! Timu yetu itawasiliana nawe ndani ya masaa 24. Karibu katika jamii ya Salooni Verse!');
            }
            
            contactForm.reset();
        });
    }
    
    // ========== FAQ FUNCTIONALITY ==========
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
    
    // ========== HOVER EFFECTS ==========
    // Category cards
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
    
    // Feature cards
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
    
    // ========== ACTIVE NAV LINK ==========
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksAll = document.querySelectorAll('.nav-links a');
    
    navLinksAll.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // ========== PAGE TRANSITION ==========
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('All JavaScript functionality loaded successfully!');
});
