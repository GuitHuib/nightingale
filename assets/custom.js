$(window).scroll(function() {
   var scroll = $(window).scrollTop();

   if (scroll >= 20) {
      $("#main-header").addClass("header-scroll");
      $("#header-logo").removeClass("hidden");
      $("#main-nav").removeClass("navbar-dark");
      $("#main-nav").addClass("navbar-light");
   }
   else {
     $("#main-header").removeClass("header-scroll");
     $("#header-logo").addClass("hidden");
     $("#main-nav").removeClass("navbar-light");
     $("#main-nav").addClass("navbar-dark");
   }
});

$('.headshot').click(function() {
  $(".headshot").removeClass("is-active");
  $(this).addClass("is-active");
});
