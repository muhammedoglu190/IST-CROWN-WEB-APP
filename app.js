const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const toggleIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  
  // تبديل أيقونة القائمة بين (Bars) و (Close X)
  if (navLinks.classList.contains('show')) {
    toggleIcon.classList.remove('fa-bars');
    toggleIcon.classList.add('fa-times');
  } else {
    toggleIcon.classList.remove('fa-times');
    toggleIcon.classList.add('fa-bars');
  }
});