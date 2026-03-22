/* shared.js — modal helpers + scroll reveal + zoom scale */

function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
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

// Scale to fit on small screens
function scaleToFit() {
  const min = 1200;
  const w = window.innerWidth;
  if (w < min) {
    const s = w / min;
    document.body.style.transform = `scale(${s})`;
    document.body.style.transformOrigin = 'top left';
    document.body.style.width = min + 'px';
    document.documentElement.style.height = Math.ceil(document.body.scrollHeight * s) + 'px';
    document.documentElement.style.overflowX = 'hidden';
  } else {
    document.body.style.transform = '';
    document.body.style.width = '';
    document.documentElement.style.height = '';
    document.documentElement.style.overflowX = '';
  }
}
scaleToFit();
window.addEventListener('resize', scaleToFit);
