'use strict';

var loadCss = require('./css');
var bodyStyles = require('./bodyStyles');
var sandbox = require('sandboxed-module');

module.exports = function (window) {
  sandbox.require('./jquery.modal.js', {
    globals: window
  });
  loadCss(window);
  bodyStyles(window);
};
