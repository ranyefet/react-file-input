(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.FileInput = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var FileInput = function FileInput(_ref) {
  var _ref$name = _ref.name;
  var name = _ref$name === undefined ? 'file' : _ref$name;
  var disabled = _ref.disabled;
  var accept = _ref.accept;
  var onChange = _ref.onChange;
  var style = _ref.style;
  var _ref$className = _ref.className;
  var className = _ref$className === undefined ? '' : _ref$className;
  var children = _ref.children;
  return _react2['default'].createElement(
    'div',
    { style: _extends({ position: 'relative', display: 'inline-block' }, style), className: className },
    _react2['default'].createElement('input', {
      type: 'file',
      name: name,
      onChange: onChange,
      disabled: disabled,
      accept: accept,
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }
    }),
    children
  );
};

FileInput.propTypes = {
  accept: _react.PropTypes.string,
  children: _react.PropTypes.any.isRequired,
  className: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  name: _react.PropTypes.string,
  onChange: _react.PropTypes.func.isRequired,
  style: _react.PropTypes.object
};

exports['default'] = FileInput;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});