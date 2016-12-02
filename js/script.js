/**
 * Created by 915128 on 12/2/16.
 */
$(document).ready(function(){

  //timeline scroll animation
  $(window).scroll(function () {
    $(".timeline_item").each(function(){
      var y = $(window).scrollTop() + 400;
      var z = $(this).offset().top;

      if (y >= z) {
        $(this).addClass('active');
        $(this).children(".animate").css("opacity","1");
      }
      else {
        $(this).removeClass('active');
        $(this).children(".animate").css("opacity","0");
      }
    });
  });

  //Project box fade animation
  $(".animated-toggle").each(function(){

     $(this).mouseenter(function(){
       $(this).children(".description").fadeIn("slow");
     });
      $(this).mouseleave(function(){
        $(this).children(".description").fadeOut("slow");
      });
  });

});