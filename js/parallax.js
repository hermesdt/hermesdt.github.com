$(document).foundation();

$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('#awesome').css('background-position','center ' + -(scrolled*0.5)+'px');
}