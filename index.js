'use strict';

var getCssPath = require('./css');
var bodyStyles = require('./bodyStyles');
var sandbox = require('sandboxed-module');

module.exports = function (window) {
  sandbox.require('./jquery.modal.js', {
    globals: window
  });
  bodyStyles(window);
};

module.exports.css = getCssPath;
