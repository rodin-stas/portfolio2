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

  //menu
  const menu = document.querySelector(".toggle-menu");
  const body = document.querySelector(".body");
  menu.addEventListener("click", function () {
    body.classList.toggle("active");
  });
  //----------------------------------------------
  mobileToggleMenu.addEventListener("click", function () {
    mobMenu.classList.toggle("active");
    this.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  window.addEventListener("resize", function () {
    mobMenu.classList.remove("active");
    mobileToggleMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

  // fake-placeholder-conta
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
