$(document).ready(function () {
  const mobileToggleMenu = document.querySelector(".toggle-menu");
  const mobMenu = document.querySelector(".header-nav__menu");
  const overlay = document.querySelector(".overlay");
  const btn = document.querySelector(".del");
  const navbtn = document.querySelectorAll(".portfolio-nav_toggle");

  //точки навигации
  $('#page-nav').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing:'swing',
    begin: function(){},
    end: function(){},
    scrollChange: function($currentListItem){}
  });

  //  кнопка вверх
  $('#back-top').hide();
  $(window).scroll(function(){
    if($(this).scrollTop() > 600){
      $('#back-top').fadeIn();
    }
    else{$('#back-top').fadeOut()}
  })

  //fix-menu
  window.addEventListener('scroll' , function(){
   const fixMenu = document.querySelector(".fix-menu");
   if(this.pageYOffset > 50){
    fixMenu.classList.add("active")
   } else{
    fixMenu.classList.remove("active")
   }
  });

  //menu
  const menu = document.querySelector(".toggle-menu");
  const mybody = document.querySelector(".body");
  const navLink = document.querySelector(".header-nav__link");
  
  function removeActivClass(){
    mobileToggleMenu.classList.remove("active");
    overlay.classList.remove("active");
    mybody.classList.remove("active");
  }

  menu.addEventListener("click", function () {
    mybody.classList.toggle("active");
  });

  mobMenu .addEventListener("click", function () {
    this.classList.toggle("active");
    removeActivClass();
    
  });

  
  //----------------------------------------------
  mobileToggleMenu.addEventListener("click", function () {
    mobMenu.classList.toggle("active");
    this.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  window.addEventListener("resize", function () {
    mobMenu.classList.remove("active");
        removeActivClass();
  });

  // fake-placeholder-contant
  const formInputs = document.querySelectorAll(".form-field ");

  for (item of formInputs) {
    const inputPlaseholder = item.nextElementSibling;

    item.addEventListener("click", function () {
      inputPlaseholder.classList.add("active");
      this.classList.add("active");
    });

    item.addEventListener("focus", function () {
      inputPlaseholder.classList.add("active");
      this.classList.add("active");
    });

    item.addEventListener("blur", function () {
      if (this.value == "") {
        inputPlaseholder.classList.remove("active");
        this.classList.remove("active");
      }
    });
  }

  
});
