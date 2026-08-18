document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking nav links
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navbar && !navbar.contains(e.target) && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // 2. Scroll-Based Navbar Styling
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('nav-scrolled');
        } else {
            navbar?.classList.remove('nav-scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    // 3. Smooth Scroll with Offset
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Active Nav Link Highlighting
    const sections = document.querySelectorAll('section[id]');
    const highlightNav = () => {
        const scrollY = window.scrollY;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100; // Offset for fixed header
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    };
    window.addEventListener('scroll', highlightNav, { passive: true });

    // 5. Stat Counter Animation
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    
    const animateStats = () => {
        statNumbers.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const duration = 2000;
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;
            const suffix = stat.getAttribute('data-suffix') || '';

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.innerText = target.toLocaleString() + suffix;
                    clearInterval(timer);
                } else {
                    stat.innerText = Math.ceil(current).toLocaleString() + suffix;
                }
            }, stepTime);
        });
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                animateStats();
                statsAnimated = true;
                statsObserver.disconnect();
            }
        });
    }, { threshold: 0.15 });

    statNumbers.forEach(stat => statsObserver.observe(stat));

    // 6. Class Schedule Tabs
    const scheduleTabs = document.querySelectorAll('.schedule-tab');
    const scheduleDays = document.querySelectorAll('.schedule-day');

    if (scheduleTabs.length > 0 && scheduleDays.length > 0) {
        // Set initial active state if not already set
        if (!document.querySelector('.schedule-tab.active')) {
            scheduleTabs[0].classList.add('active');
            scheduleDays[0].classList.add('active');
        }

        scheduleTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetDay = tab.getAttribute('data-day');

                scheduleTabs.forEach(t => t.classList.remove('active'));
                scheduleDays.forEach(d => d.classList.remove('active'));

                tab.classList.add('active');
                const targetElement = document.getElementById(targetDay);
                if (targetElement) {
                    targetElement.classList.add('active');
                }
            });
        });
    }

    // 7. Testimonial Carousel
    const track = document.querySelector('.testimonial-track');
    const slides = Array.from(document.querySelectorAll('.testimonial-card'));
    const nextButton = document.querySelector('.testimonial-arrow.next');
    const prevButton = document.querySelector('.testimonial-arrow.prev');
    
    if (track && slides.length > 0) {
        let currentIndex = 0;
        let autoPlayInterval;
        
        let dots = Array.from(document.querySelectorAll('.testimonial-dot'));

        const updateCarousel = (index) => {
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            if(dots[index]) dots[index].classList.add('active');
        };

        const moveToNextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel(currentIndex);
        };

        const moveToPrevSlide = () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel(currentIndex);
        };

        if (nextButton) nextButton.addEventListener('click', moveToNextSlide);
        if (prevButton) prevButton.addEventListener('click', moveToPrevSlide);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel(currentIndex);
            });
        });

        // Auto-play
        const startAutoPlay = () => {
            autoPlayInterval = setInterval(moveToNextSlide, 5000);
        };
        const stopAutoPlay = () => {
            clearInterval(autoPlayInterval);
        };

        startAutoPlay();
        
        const carouselContainer = document.querySelector('.testimonials-carousel-container') || track.parentElement;
        if(carouselContainer) {
            carouselContainer.addEventListener('mouseenter', stopAutoPlay);
            carouselContainer.addEventListener('mouseleave', startAutoPlay);
        }

        // Touch support
        let startX = 0;
        let endX = 0;
        
        track.addEventListener('touchstart', (e) => {
            startX = e.changedTouches[0].screenX;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        const handleSwipe = () => {
            if (startX - endX > 50) {
                moveToNextSlide();
            } else if (endX - startX > 50) {
                moveToPrevSlide();
            }
        };
    }

    // 8. Gallery Lightbox
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    if (lightbox && lightboxImg) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                lightboxImg.src = item.src;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        };

        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // 9. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 10. Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const requiredInputs = contactForm.querySelectorAll('[required]');
            requiredInputs.forEach(input => {
                if (!input.value.trim()) isValid = false;
            });

            if (isValid) {
                // Show success message
                const successMsg = document.createElement('div');
                successMsg.className = 'form-success';
                successMsg.style.cssText = 'color: #4CAF50; padding: 10px; margin-top: 10px; border: 1px solid #4CAF50; border-radius: 4px; text-align: center;';
                successMsg.textContent = 'Thank you! Your message has been sent successfully.';
                
                contactForm.appendChild(successMsg);
                contactForm.reset();

                setTimeout(() => {
                    successMsg.remove();
                }, 5000);
            }
        });
    }

    // 11. Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input[type="email"]');
            
            if (input && input.value.trim()) {
                const btn = newsletterForm.querySelector('button');
                if (btn) {
                    const originalText = btn.textContent;
                    
                    btn.textContent = 'Subscribed!';
                    btn.style.backgroundColor = '#4CAF50';
                    btn.style.color = 'white';
                    
                    newsletterForm.reset();
                    
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.style.backgroundColor = '';
                        btn.style.color = '';
                    }, 3000);
                }
            }
        });
    }

    // 12. Parallax Effect
    const hero = document.getElementById('home');
    if (hero) {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (window.innerWidth > 768) {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        const scrolled = window.scrollY;
                        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
                        ticking = false;
                    });
                    ticking = true;
                }
            } else {
                hero.style.backgroundPositionY = 'center';
            }
        }, { passive: true });
    }
});
