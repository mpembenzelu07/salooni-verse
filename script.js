// ============================================
// COMPLETE NAVIGATION SYSTEM
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ====================
    // 1. MOBILE MENU TOGGLE
    // ====================
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    // Function to close mobile menu
    function closeMobileMenu() {
        if (mobileToggle) mobileToggle.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
        body.classList.remove('menu-open');
    }
    
    // Function to open mobile menu
    function openMobileMenu() {
        if (mobileToggle) mobileToggle.classList.add('active');
        if (navLinks) navLinks.classList.add('active');
        body.classList.add('menu-open');
    }
    
    // Toggle mobile menu
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (navLinks.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
        
        // Close menu when clicking on a link
        const navLinksAll = document.querySelectorAll('.nav-links a');
        navLinksAll.forEach(link => {
            link.addEventListener('click', function(e) {
                // If it's a same-page anchor link, don't close menu
                if (!this.getAttribute('href').startsWith('#')) {
                    closeMobileMenu();
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navLinks.classList.contains('active') &&
                !navLinks.contains(e.target) && 
                !mobileToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Close menu on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }
    
    // ====================
    // 2. SET ACTIVE NAV LINK
    // ====================
    function setActiveNavLink() {
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop() || 'index.html';
        
        const navLinksAll = document.querySelectorAll('.nav-links a');
        
        navLinksAll.forEach(link => {
            const linkHref = link.getAttribute('href');
            
            // Remove active class from all links
            link.classList.remove('active');
            
            // Check if this link matches current page
            if (currentPage === linkHref || 
                (currentPage === '' && linkHref === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
    
    // Initialize active link
    setActiveNavLink();
    
    // ====================
    // 3. LANGUAGE SWITCHER
    // ====================
    const languageSwitcher = document.getElementById('languageSwitcher');
    
    if (languageSwitcher) {
        // Check for saved language preference
        const savedLang = localStorage.getItem('salooniLang') || 'en';
        
        // Apply saved language
        if (savedLang === 'sw') {
            body.classList.add('swahili-active');
            const langText = languageSwitcher.querySelector('.lang-text');
            if (langText) langText.textContent = 'SW';
        }
        
        // Toggle language
        languageSwitcher.addEventListener('click', function() {
            body.classList.toggle('swahili-active');
            
            const isSwahili = body.classList.contains('swahili-active');
            const langText = this.querySelector('.lang-text');
            
            if (langText) {
                langText.textContent = isSwahili ? 'SW' : 'EN';
            }
            
            // Save preference
            localStorage.setItem('salooniLang', isSwahili ? 'sw' : 'en');
        });
    }
    
    // ====================
    // 4. DOWNLOAD APP BUTTON
    // ====================
    const downloadAppBtn = document.getElementById('downloadApp');
    
    if (downloadAppBtn) {
        downloadAppBtn.addEventListener('click', function() {
            const isSwahili = body.classList.contains('swahili-active');
            
            if (isSwahili) {
                alert('Programu ya Salooni Verse itapakuliwa sasa. Asante!');
            } else {
                alert('Salooni Verse app will download now. Thank you!');
            }
            
            // In real app, this would redirect to app store
            // window.location.href = 'https://appstore.com/salooniverse';
        });
    }
    
    // ====================
    // 5. SMOOTH SCROLLING
    // ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only for anchor links on same page
            if (href !== '#') {
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    closeMobileMenu();
                }
            }
        });
    });
    
    // ====================
    // 6. UPDATE FOOTER YEAR
    // ====================
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.footer-bottom p').forEach(p => {
        p.innerHTML = p.innerHTML.replace('2023', currentYear);
    });
    
    // ====================
    // 7. WINDOW RESIZE HANDLER
    // ====================
    window.addEventListener('resize', function() {
        // Close mobile menu on desktop
        if (window.innerWidth > 992) {
            closeMobileMenu();
        }
    });
});
