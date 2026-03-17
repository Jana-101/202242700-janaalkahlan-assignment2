/* ============================================================
   PORTFOLIO — script.js
   Author: Jana Alkahlan
   ============================================================ */

/* ─── 1. TIME-BASED GREETING ────────────────────────────────── */
/**
 * Shows a simple time-based symbol instead of a text greeting.
 * Morning   05-11 → ☀
 * Afternoon 12-17 → ✦
 * Evening   18-23 → ✦
 * Night     00-04 → ✦
 */
function setGreeting() {
  const el = document.getElementById('greeting');
  if (!el) return;

  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    el.textContent = 'Software Engineering Student ☀';
  } else if (hour >= 12 && hour < 18) {
    el.textContent = 'Software Engineering Student ✦';
  } else {
    el.textContent = 'Software Engineering Student ✦';
  }
}

/* ─── 2. THEME TOGGLE ───────────────────────────────────────── */
const themeBtn  = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlEl    = document.documentElement;

function applyTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  themeIcon.textContent = theme === 'light' ? '☾' : '☀';
  localStorage.setItem('portfolio-theme', theme);
}

// Restore saved preference (default: light)
const saved = localStorage.getItem('portfolio-theme') || 'light';
applyTheme(saved);

themeBtn.addEventListener('click', () => {
  const current = htmlEl.getAttribute('data-theme');
  applyTheme(current === 'light' ? 'dark' : 'light');
});

/* ─── 3. STICKY NAV ─────────────────────────────────────────── */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ─── 4. HAMBURGER MENU ─────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen     = false;

function toggleMenu(open) {
  menuOpen = open;
  mobileMenu.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';

  const bars = hamburger.querySelectorAll('span');
  if (open) {
    bars[0].style.transform = 'translateY(6.5px) rotate(45deg)';
    bars[1].style.opacity   = '0';
    bars[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
  } else {
    bars[0].style.transform = '';
    bars[1].style.opacity   = '';
    bars[2].style.transform = '';
  }
}

hamburger.addEventListener('click', () => toggleMenu(!menuOpen));

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => toggleMenu(false));
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menuOpen) toggleMenu(false);
});

/* ─── 5. SCROLL REVEAL ──────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ─── 6. SMOOTH SCROLLING ───────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();

    const offset = target.getBoundingClientRect().top
                 + window.scrollY
                 - nav.offsetHeight;

    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
});

/* ─── 7. FORM VALIDATION ────────────────────────────────────── */
const form = document.getElementById('contactForm');

function validate(id, type) {
  const val = document.getElementById(id).value.trim();
  if (!val) return 'This field is required.';
  if (type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
    return 'Please enter a valid email address.';
  if (type === 'textarea' && val.length < 10)
    return 'Please write at least 10 characters.';
  return '';
}

function showErr(id, msg) {
  document.getElementById(id).textContent = msg;
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const nameErr    = validate('name',    'text');
  const emailErr   = validate('email',   'email');
  const messageErr = validate('message', 'textarea');

  showErr('nameError',    nameErr);
  showErr('emailError',   emailErr);
  showErr('messageError', messageErr);

  if (nameErr || emailErr || messageErr) return;

  const btn     = form.querySelector('button[type="submit"]');
  const success = document.getElementById('formSuccess');

  btn.disabled    = true;
  btn.textContent = 'Sent ✓';
  success.classList.add('show');

  setTimeout(() => {
    form.reset();
    btn.disabled    = false;
    btn.textContent = 'Send Message';
    success.classList.remove('show');
  }, 4000);
});

/* ─── INIT ──────────────────────────────────────────────────── */
setGreeting();
