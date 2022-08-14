const ham=document.querySelector('.header-nav__menu-icon-container');
const enlaces=document.querySelector('.header-nav__menu-list');

ham.addEventListener('click', ()=>{
    enlaces.classList.toggle('activado');
});
document.getElementById('header-nav__menu-link-id1').onclick=function(){
    enlaces.classList.toggle('activado')
};
document.getElementById('header-nav__menu-link-id2').onclick=function(){
    enlaces.classList.toggle('activado')
};
document.getElementById('header-nav__menu-link-id3').onclick=function(){
    enlaces.classList.toggle('activado')
};
document.getElementById('header-nav__menu-link-id4').onclick=function(){
    enlaces.classList.toggle('activado')
};
document.getElementById('header-nav__menu-link-id5').onclick=function(){
    enlaces.classList.toggle('activado')
};