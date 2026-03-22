/* shared.js — scroll reveal + modal helpers */

// Modal helpers (used by index.html education coursework toggles if needed)
function openModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.remove('open'); document.body.style.overflow = ''; }
}
function closeIfOverlay(e, id) {
  if (e.target === document.getElementById(id)) closeModal(id);
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(el => {
      el.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
});

// Scroll reveal
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.07 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
