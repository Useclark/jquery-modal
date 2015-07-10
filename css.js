'use strict';

var fs = require('fs');
var Promise = require('promise');
var transforms = require('useclark-transforms');

var insertCssFactory = function ($) {
  return function (css) {
    return $('<style/>').html(css).appendTo('head');
  };
};

module.exports = function (window) {
  var $ = window.jQuery;
  var insertCss = insertCssFactory($);
  return transforms.less(__dirname + '/jquery.modal.css')(Promise)
    .then(insertCss);
};
