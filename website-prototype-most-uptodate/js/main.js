
$('span').mouseover(function(e) {
  e.preventDefault();
  $(this).nextAll().css('color','#d7d7d7');
  $(this).css('color','#F8D64E');
  $(this).prevAll().css('color','#F8D64E');
});
