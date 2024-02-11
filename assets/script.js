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

function closeMenu() {
  menu.classList.remove('mobile');
  menuOpen.classList.add('exibir');
  menuOpen.classList.remove('esconder');
  menuClose.classList.add('esconder');
  menuClose.classList.remove('exibir');
}