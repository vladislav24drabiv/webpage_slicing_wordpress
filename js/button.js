$(document).ready(function() {
$('body').append('<a href="#home" id="go-top" title="up">Вверх</a>');
});
$(function(){
  $.fn.scrollToTop = function(){
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "300") $(this).fadeIn("slow")
      var scrollDiv = $(this);
    $(window).scroll(function(){
      if ($(window).scrollTop() <= "300") $(scrollDiv).fadeOut("slow")
        else $(scrollDiv).fadeIn("slow")
    });
    $(this).click(function(){


    $("html, body").animate({scrollTop: 0}, "slow")
    })
  }
});
$(function(){
  $("#go-top").scrollToTop();
});
