// Hamburger Menü Steuerung
const navSlide = () => {
    const burger = document.querySelector('#burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinks.forEach(l => l.style.animation = '');
            }
        });
    });
}

navSlide();

// Modal Steuerung
function openModal(id) {
    const modal = document.getElementById('modal-' + id);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

function closeModal(id) {
    const modal = document.getElementById('modal-' + id);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Lightbox Logik
document.querySelectorAll('.zoomable').forEach(image => {
    image.onclick = function() {
        const lightbox = document.getElementById('lightbox');
        const lbImg = document.getElementById('lightbox-img');
        const lbCap = document.getElementById('lightbox-caption');
        
        lightbox.style.display = "block";
        lbImg.src = this.src;
        lbCap.innerHTML = this.getAttribute('data-description') || "";
        document.body.style.overflow = "hidden";
    }
});

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
    document.body.style.overflow = "auto";
}

// Schließen bei Klick außerhalb
window.onclick = function(event) {
    if (event.target.className === 'modal' || event.target.className === 'lightbox') {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
        const burger = document.querySelector('#burger');
        const nav = document.querySelector('.nav-links');
        if (nav && nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    }
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId !== "#" && targetId.startsWith("#")) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
/* ... DEINE BESTEHENDE LOGIK (navSlide, Modal, Lightbox, etc.) ... */

// NEU: Scroll Reveal Animation
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements); // Startet Animation auch beim Laden

// Navigations-Logik bleibt gleich...

// Scroll Reveal
const scrollReveal = () => {
    const targets = document.querySelectorAll('.reveal');
    targets.forEach(target => {
        const pos = target.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            target.classList.add('active');
        }
    });
}
window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal);

// Lightbox Funktion für alle Bilder mit der Klasse "zoomable"
document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
        const lb = document.getElementById('lightbox');
        const lbImg = document.getElementById('lightbox-img');
        const lbCap = document.getElementById('lightbox-caption');
        lb.style.display = 'block';
        lbImg.src = img.src;
        lbCap.innerHTML = img.getAttribute('data-description') || '';
    });
});

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
