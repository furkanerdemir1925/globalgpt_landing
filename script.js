// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        }

        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Testimonial data
    const testimonials = {
        'wave-square': {
            text: "GlobalGPT'nin merkezi dashboard'u sayesinde tüm AI modellerimizi tek yerden yönetebiliyoruz. Gerçekten hayat kurtarıcı!",
            name: "Ahmet Yılmaz",
            title: "Yazılım Geliştirici",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
        },
        'globe': {
            text: "Uluslararası projelerimizde GlobalGPT'nin global özellikleri çok işimize yarıyor. Ekipler arası koordinasyon çok kolaylaştı.",
            name: "Zeynep Kaya",
            title: "Proje Yöneticisi",
            photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
        },
        'bolt': {
            text: "Hız konusunda inanılmaz! Eskiden saatler süren AI kurulumları artık dakikalar içinde hazır. Çok etkileyici.",
            name: "Mehmet Demir",
            title: "Sistem Uzmanı",
            photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        },
        'comment': {
            text: "Ekip içi iletişim özellikleri harika. AI projelerimizde gerçek zamanlı geri bildirim alabiliyoruz.",
            name: "Elif Özkan",
            title: "Veri Analisti",
            photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
        },
        'shopping-bag': {
            text: "Maliyet optimizasyonu özellikleri bütçemizi %30 azalttı. AI kullanım maliyetlerimizi çok daha iyi kontrol edebiliyoruz.",
            name: "Can Arslan",
            title: "Mali İşler Uzmanı",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
        },
        'search': {
            text: "Analitik ve arama özellikleri sayesinde AI modellerimizin performansını çok daha iyi anlayabiliyoruz.",
            name: "Selin Aktaş",
            title: "AI Araştırmacısı",
            photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
        }
    };

    // Testimonial icon interactions
    const iconBoxes = document.querySelectorAll('.icon-box');
    const testimonialText = document.getElementById('testimonial-text');
    const authorName = document.getElementById('author-name');
    const authorTitle = document.getElementById('author-title');
    const authorPhoto = document.getElementById('author-photo');

    iconBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Remove active class from all icons
            iconBoxes.forEach(icon => icon.classList.remove('active'));
            // Add active class to clicked icon
            this.classList.add('active');
            
            // Get the icon class to determine which testimonial to show
            const iconClass = this.querySelector('i').classList[1]; // Get the second class (e.g., 'fa-wave-square')
            const iconKey = iconClass.replace('fa-', ''); // Remove 'fa-' prefix
            
            // Update testimonial content
            if (testimonials[iconKey]) {
                testimonialText.textContent = testimonials[iconKey].text;
                authorName.textContent = testimonials[iconKey].name;
                authorTitle.textContent = testimonials[iconKey].title;
                authorPhoto.src = testimonials[iconKey].photo;
                authorPhoto.alt = testimonials[iconKey].name;
            }
        });
    });

    // Pricing card hover effects
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('popular')) {
                this.style.transform = 'scale(1.05)';
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    // Button click animations
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
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
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Animate elements on scroll
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

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.pricing-card, .testimonial-content, .dashboard-mockup');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Star animation enhancement - Removed

    // Dashboard sidebar interactions
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            sidebarItems.forEach(sidebarItem => sidebarItem.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Parallax effect for hero section - Removed

    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }

    // Counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 20);
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent.replace(/,/g, ''));
                animateCounter(entry.target, target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Mobile menu toggle (if needed for smaller screens)
    const createMobileMenu = () => {
        const nav = document.querySelector('.nav');
        const navLinks = document.querySelector('.nav-links');
        
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                const toggle = document.createElement('button');
                toggle.className = 'mobile-menu-toggle';
                toggle.innerHTML = '<i class="fas fa-bars"></i>';
                toggle.style.cssText = `
                    display: block;
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                `;
                
                nav.appendChild(toggle);
                
                toggle.addEventListener('click', () => {
                    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
                });
            }
        } else {
            const toggle = document.querySelector('.mobile-menu-toggle');
            if (toggle) {
                toggle.remove();
            }
            navLinks.style.display = 'flex';
        }
    };

    window.addEventListener('resize', createMobileMenu);
    createMobileMenu();
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    button {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);
