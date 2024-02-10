const menu = document.querySelector('#menu');
const menuOpen = document.querySelector('.open');
const menuClose = document.querySelector('.close');

function showMenu() {
  menu.classList.toggle('mobile');
  menuOpen.classList.toggle('exibir');
  menuOpen.classList.toggle('esconder');
  menuClose.classList.toggle('exibir');
  menuClose.classList.toggle('esconder');
}