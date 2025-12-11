// ============================================
// MOBILE NAVIGATION MENU
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ====================
    // Mobile Menu Toggle
    // ====================
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (mobileToggle && navLinks) {
        // Create hamburger icon spans if not present
        if (!mobileToggle.querySelector('span')) {
            mobileToggle.innerHTML = '';
            for (let i = 0; i < 3; i++) {
                const span = document.createElement('span');
                mobileToggle.appendChild(span);
            }
        }
        
        // Toggle mobile menu
        mobileToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle active classes
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.classList.toggle('menu-open');
            
            // Prevent body scroll when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on a link
        const navLinksItems = document.querySelectorAll('.nav-links a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
                document.body.style.overflow = '';
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 992) {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
                document.body.style.overflow = '';
            }
        });
    }
    
    // ====================
    // Set Active Navigation Link
    // ====================
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinksAll = document.querySelectorAll('.nav-links a');
        
        navLinksAll.forEach(link => {
            link.classList.remove('active');
            const linkPage = link.getAttribute('href');
            
            // Check if current page matches link href
            if (currentPage === linkPage || 
                (currentPage === '' && linkPage === 'index.html') ||
                (linkPage === 'index.html' && currentPage.includes('index'))) {
                link.classList.add('active');
            }
        });
    }
    
    // Initialize active link
    setActiveNavLink();
    
    // ====================
    // Language Switcher
    // ====================
    const languageSwitcher = document.getElementById('languageSwitcher');
    let currentLang = 'en';
    
    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', function() {
            // Toggle between English and Swahili
            currentLang = currentLang === 'en' ? 'sw' : 'en';
            
            // Update language text
            const langText = this.querySelector('.lang-text');
            if (langText) {
                langText.textContent = currentLang.toUpperCase();
            }
            
            // Toggle visibility of language content
            document.querySelectorAll('.english').forEach(el => {
                el.style.display = currentLang === 'en' ? 'block' : 'none';
            });
            
            document.querySelectorAll('.swahili').forEach(el => {
                el.style.display = currentLang === 'sw' ? 'block' : 'none';
            });
            
            // Save preference to localStorage
            localStorage.setItem('salooniLang', currentLang);
        });
        
        // Load saved language preference
        const savedLang = localStorage.getItem('salooniLang');
        if (savedLang) {
            currentLang = savedLang;
            const langText = languageSwitcher.querySelector('.lang-text');
            if (langText) {
                langText.textContent = currentLang.toUpperCase();
            }
            
            document.querySelectorAll('.english').forEach(el => {
                el.style.display = currentLang === 'en' ? 'block' : 'none';
            });
            
            document.querySelectorAll('.swahili').forEach(el => {
                el.style.display = currentLang === 'sw' ? 'block' : 'none';
            });
        }
    }
    
    // ====================
    // Download App Button
    // ====================
    const downloadAppBtn = document.getElementById('downloadApp');
    
    if (downloadAppBtn) {
        downloadAppBtn.addEventListener('click', function() {
            // In a real app, this would redirect to app store
            alert(currentLang === 'en' 
                ? 'App download link would open here' 
                : 'Kiungo cha kupakua programu kingefunguliwa hapa');
        });
    }
    
    // ====================
    // Smooth Scrolling for Anchor Links
    // ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only apply smooth scroll for anchor links on same page
            if (href !== '#' && !href.includes('.html')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ====================
    // Footer Year Update
    // ====================
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.footer-bottom p').forEach(p => {
        p.innerHTML = p.innerHTML.replace('2023', currentYear);
    });
});
