// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
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

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
        // Simulate form submission
        alert('Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.');
        this.reset();
    } else {
        alert('Mohon lengkapi semua field yang wajib diisi.');
    }
});

// Gallery item click effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        }, 100);
    });
});

// Service card hover sound effect (visual feedback)
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(45deg, #fff, #f8f9ff)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.background = 'white';
    });
});

// Dynamic greeting based on time
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = '';
    
    if (hour < 12) {
        greeting = 'Selamat Pagi! ☀️';
    } else if (hour < 17) {
        greeting = 'Selamat Siang! 🌤️';
    } else {
        greeting = 'Selamat Sore! 🌅';
    }
    
    // Add greeting to hero if desired
    console.log(greeting + ' Selamat datang di Florist Premium!');
}

updateGreeting();

// Add loading animation when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading completion
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// Apply ripple effect to buttons
document.querySelectorAll('.cta-button, .submit-btn').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 600ms linear;
        background-color: rgba(255, 255, 255, 0.6);
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Auto-hide mobile navigation on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.getElementById('navbar');
    
    if (window.innerWidth <= 768) {
        if (currentScroll > lastScrollTop && currentScroll > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Add intersection observer for counting animation (if needed)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = +counter.innerText;
        const increment = target / 200;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCounters(), 10);
        } else {
            counter.innerText = target;
        }
    });
}

// Enhanced form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Enhanced form submission with better validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    let errorMessage = '';
    
    // Validasi nama
    if (!name) {
        errorMessage += 'Nama harus diisi.\n';
        isValid = false;
    }
    
    // Validasi email
    if (!email) {
        errorMessage += 'Email harus diisi.\n';
        isValid = false;
    } else if (!validateEmail(email)) {
        errorMessage += 'Format email tidak valid.\n';
        isValid = false;
    }
    
    // Validasi phone (opsional)
    if (phone && !validatePhone(phone)) {
        errorMessage += 'Format nomor telepon tidak valid.\n';
        isValid = false;
    }
    
    // Validasi pesan
    if (!message) {
        errorMessage += 'Pesan harus diisi.\n';
        isValid = false;
    }
    
    // Tampilkan error jika ada
    if (!isValid) {
        alert(errorMessage);
        return;
    }
    
    // Jika valid, proses form
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Mengirim...';
    submitBtn.disabled = true;
    
    // Simulasi pengiriman (ganti dengan logika pengiriman sebenarnya)
    setTimeout(() => {
        // Reset form setelah berhasil
        document.getElementById('contactForm').reset();
        
        // Reset tombol
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Tampilkan pesan sukses
        alert('Pesan berhasil dikirim! Terima kasih.');
        
    }, 2000); // Simulasi delay 2 detik
});

// Fungsi validasi email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fungsi validasi nomor telepon Indonesia
function validatePhone(phone) {
    // Regex untuk nomor telepon Indonesia (08xx, +62xx, atau 62xx)
    const phoneRegex = /^(\+62|62|0)[0-9]{8,13}$/;
    return phoneRegex.test(phone.replace(/[\s-]/g, ''));
}