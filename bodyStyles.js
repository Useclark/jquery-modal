'use strict';

var getScrollbarWidth = function ($) {
  var $scrollbar = $('<div class="scrollbar-measure">').appendTo('body');
  var scrollbarWidth = $scrollbar[0].offsetWidth - $scrollbar[0].clientWidth;
  $scrollbar.remove();
  return scrollbarWidth;
};

module.exports = function (window) {
  var $ = window.jQuery;
  var scrollbarWidth = getScrollbarWidth($);
  var $body = $('body');
  $body
    .on($.modal.OPEN, function () {
      var contentExceedsViewport = $(window).height() < $(window.document).height();
      $body.addClass('modal-open');
      if (contentExceedsViewport) {
        $body.css('margin-right', scrollbarWidth + 'px');
      }
    })
    .on($.modal.CLOSE, function () {
      $body.removeClass('modal-open').css('margin-right', '');
    });
};
