function toggleMenuElements() {
    $('header .menu').toggle();
    $('.navbar-toggler').toggleClass('menu-animation');
    $('body').toggleClass('fixed-body');
  }
  
  //Despliega el menú mobile
  function mobileMenu() {
    $('.navbar-toggler').click(function(){
      toggleMenuElements();
    });
  }
  
  //Cierra el menu en el click del boton en mobile
  function closeMenuOnAnchor() {
    if ($(window).width() < 769){
      $('header nav li a').each(function() {
        $(this).click(function(){
          toggleMenuElements();
        });
      });
    }
  }
  
  //Funciones que se llaman en el document ready
  $(document).ready(function() {
      mobileMenu();
      closeMenuOnAnchor();
      sectionHeight();
  });
  
  //Funciones que se llaman en el windows resize
  $(window).on('resize', function(){
    closeMenuOnAnchor();
  });
  
  //Fija el header en el scroll
  window.onscroll = function() {fixHeaderOnScroll()};
  var header = document.querySelector('header');
  var sticky = header.offsetTop;
  
  function fixHeaderOnScroll() {
    if (window.pageYOffset > sticky) {
      header.classList.add("stickyHeader");
    } else {
      header.classList.remove("stickyHeader");
    }
  }
  
  