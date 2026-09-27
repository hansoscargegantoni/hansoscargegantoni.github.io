/**
 * Minimalist Portfolio & Resume Interactivity
 * Oscar Gegantoni — Front-End Developer
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initActiveNavSpy();
  initClipboardButtons();
  initPrintButtons();
  initCurrentYear();
});

/* ==========================================================================
   1. THEME CONTROLLER (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  
  // 1. Determine initial theme: localStorage > system preference > default dark
  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const initialTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');
  setTheme(initialTheme);

  // 2. Toggle on button click
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
    });
  }

  // 3. React to system preference changes if user hasn't explicitly set one
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('portfolio-theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
  }
}

/* ==========================================================================
   2. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileNav) return;

  function toggleMenu(isOpen) {
    const nextState = typeof isOpen === 'boolean' ? isOpen : menuBtn.getAttribute('aria-expanded') !== 'true';
    menuBtn.setAttribute('aria-expanded', String(nextState));
    mobileNav.hidden = !nextState;
  }

  menuBtn.addEventListener('click', () => toggleMenu());

  // Close menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (
      !menuBtn.contains(event.target) &&
      !mobileNav.contains(event.target) &&
      menuBtn.getAttribute('aria-expanded') === 'true'
    ) {
      toggleMenu(false);
    }
  });
}

/* ==========================================================================
   3. ACTIVE NAVIGATION SPY (IntersectionObserver)
   ========================================================================== */
function initActiveNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');

  if (!sections.length || !desktopNavLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopNavLinks.forEach((link) => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/* ==========================================================================
   4. CLIPBOARD COPY & TOAST NOTIFICATION
   ========================================================================== */
function initClipboardButtons() {
  const heroCopyBtn = document.getElementById('hero-copy-email');
  const contactCopyBtn = document.getElementById('copy-email-btn');
  const contactEmailCode = document.getElementById('contact-email-text');

  if (heroCopyBtn) {
    heroCopyBtn.addEventListener('click', () => {
      const email = heroCopyBtn.getAttribute('data-email') || 'oscar.gegantoni@example.com';
      copyToClipboard(email, 'Email address copied to clipboard!');
    });
  }

  if (contactCopyBtn && contactEmailCode) {
    contactCopyBtn.addEventListener('click', () => {
      const email = contactEmailCode.textContent.trim();
      copyToClipboard(email, 'Email address copied to clipboard!');
    });
  }
}

async function copyToClipboard(text, successMessage) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      // Fallback for older browsers or non-HTTPS contexts
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      textArea.remove();
    }
    showToast(successMessage || 'Copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy: ', err);
    showToast('Failed to copy. Please copy manually.');
  }
}

let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');

  if (!toast) return;

  if (toastMsg) {
    toastMsg.textContent = message;
  }

  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

/* ==========================================================================
   5. PRINT RESUME CONTROLLER
   ========================================================================== */
function initPrintButtons() {
  const printBtn = document.getElementById('print-resume-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* ==========================================================================
   6. DYNAMIC CURRENT YEAR
   ========================================================================== */
function initCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
