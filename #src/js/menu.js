
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  const bodyMenu = document.querySelector('.menu__body');
  iconMenu.addEventListener("click", function(params) {
    iconMenu.classList.toggle('_active');
  });
}