'use strict';

$(function () {
  $('.color').css('color', '#f00');
});

$(function () {
  $('.add').addClass('active');
});

$(function () {
  $('.remove').removeClass('active');
});

$(function () {
  if ($('.addContent').hasClass('yes')) {
    $('.addContent').html('Yes');
  } else {
    $('.addContent').html('No');
  }
});

$(function () {
  $('.widthText').html('width:' + $('.width').width());
});

$(function () {
  $('.heightText').html('height:' + $('.height').height());
});

$(function () {
  $('.absolute').html(
    'Top:' +
      $('.absolute').offset().top +
      'px Left:' +
      $('.absolute').offset().left +
      'px'
  );
});

$(function () {
  $(window).scroll(function () {
    $('.scroll').html('Scroll: ' + $(window).scrollTop() + 'px');
  });
});
