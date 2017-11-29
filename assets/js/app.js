$( document ).ready(function() {

  $("#contacto").stick_in_parent();
  $("#contacto2").stick_in_parent();

  $(".ham").on("click", function(){
    $(".ham").toggleClass("clicked");
    $(".menu ul").toggleClass("grow");

  });


  $(".bla").on("click", function(){
    $(".overlay").css("display", "flex");
    $(".li-blanqueamiento").css("display", "block");
  });

  $(".ca").on("click", function(){
    $(".overlay").css("display", "flex");
    $(".car").css("display", "block");
  });


  $(".po").on("click", function(){
    $(".overlay").css("display", "flex");
    $(".por").css("display", "block");
  });

  $(".co").on("click", function(){
    $(".overlay").css("display", "flex");
    $(".cor").css("display", "block");
  });

  $(".im").on("click", function(){
    $(".overlay").css("display", "flex");
    $(".imp").css("display", "block");
  });

  $(".re").on("click", function(){
    $(".overlay").css("display", "flex");
    $(".res").css("display", "block");
  });

  $(".pe").on("click", function(){
    $(".overlay").css("display", "flex");
    $(".per").css("display", "block");
  });

  $(".en").on("click", function(){
    $(".overlay").css("display", "flex");
    $(".end").css("display", "block");
  });

  $(".or").on("click", function(){
    $(".overlay").css("display", "flex");
    $(".ort").css("display", "block");
  });

  $(".gu").on("click", function(){
    $(".overlay").css("display", "flex");
    $(".gua").css("display", "block");
  });

  $(".ci").on("click", function(){
    $(".overlay").css("display", "flex");
    $(".cir").css("display", "block");
  });

  $(".impla").on("click", function(){
    $(".overlay").css("display", "flex");
    $(".impl").css("display", "block");
  });

  $(".od").on("click", function(){
    $(".overlay").css("display", "flex");
    $(".odo").css("display", "block");
  });











  $(".x").on("click", function(){
    $(".overlay").css("display", "none");
    $(".li-blanqueamiento").css("display", "none");
    $(".car").css("display", "none");
    $(".por").css("display", "none");
    $(".cor").css("display", "none");
    $(".imp").css("display", "none");
    $(".res").css("display", "none");
    $(".per").css("display", "none");
    $(".end").css("display", "none");
    $(".ort").css("display", "none");
    $(".gua").css("display", "none");
    $(".cir").css("display", "none");
    $(".impl").css("display", "none");
    $(".odo").css("display", "none");
  });


});


$(document).keyup(function(e) {
     if (e.keyCode == 27) {
       $(".overlay").css("display", "none");
       $(".li-blanqueamiento").css("display", "none");
       $(".car").css("display", "none");
       $(".por").css("display", "none");
       $(".cor").css("display", "none");
       $(".imp").css("display", "none");
       $(".res").css("display", "none");
       $(".per").css("display", "none");
       $(".end").css("display", "none");
       $(".ort").css("display", "none");
       $(".gua").css("display", "none");
       $(".cir").css("display", "none");
       $(".impl").css("display", "none");
       $(".odo").css("display", "none");
    }
});










$( document ).ready(function(){
  $('#carousel').slick({
    arrows: true,
    infinite: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
  });
});






// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
