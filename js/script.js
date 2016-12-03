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

//project tile flip animation
  $('.hover').hover(function(){
      $(this).addClass('flip');
        },function(){
      $(this).removeClass('flip');
  });

  //Scroll to top button animation
	$(window).scroll(function(){
		if ($(this).scrollTop() > 400) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});
