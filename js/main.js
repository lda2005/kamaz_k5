/* ============================================================
   АК ГРАНАТ — КАМАЗ К5 | Main JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Mobile menu ──────────────────────────────────────── */
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');

  burger?.addEventListener('click', () => mobileMenu?.classList.add('open'));
  mobileClose?.addEventListener('click', () => mobileMenu?.classList.remove('open'));

  /* ── Modal ────────────────────────────────────────────── */
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');

  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      modalOverlay?.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modalOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalClose?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });

  /* ── Form submit ──────────────────────────────────────── */
  document.querySelectorAll('[data-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const success = form.parentElement.querySelector('.form-success');
      if (success) {
        form.style.display = 'none';
        success.style.display = 'block';
      }
    });
  });

  /* ── Sticky header shadow ─────────────────────────────── */
  const header = document.querySelector('.site-header');
  const updateHeader = () => {
    if (window.scrollY > 10) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', updateHeader, { passive: true });

  /* ── Animate on scroll ────────────────────────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* ── Active nav link ──────────────────────────────────── */
  const currentPath = window.location.pathname.split('/').filter(Boolean).pop() || 'index.html';
  document.querySelectorAll('.site-nav a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === currentPath || a.getAttribute('href') === './' + currentPath) {
      a.classList.add('active');
    }
  });

});
