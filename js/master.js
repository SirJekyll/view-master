var animating = false;
var degree = 0;
var delta = 360/14;

$('#lever').on('click', function(){
  if (!animating) {
    animating = true;
    degree += delta;

    $('#lever').addClass('pull');
    $('.slide-reel').css('transform', 'rotateZ(' + (degree) + 'deg)');

    setTimeout(function(){
      $('#lever').removeClass('pull');
      animating = false;
    }, 1000)
  }
});
