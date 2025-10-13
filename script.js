function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');

  // Prevent background scroll when menu is open (mobile only)
  if (navLinks.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Optional: Close menu with ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
});
