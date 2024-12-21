function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.querySelectorAll('.certificate-item a').forEach(link => {
  link.addEventListener('click', function() {
    alert('Opening certificate in a new tab...');
  });
});