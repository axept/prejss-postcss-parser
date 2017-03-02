'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * PostCSS Sync Adapter for PreJSS
 *
 * Until we did not solved how we can get all PostCSS plugins in browser
 * in high performant way, we have to throw error and require
 * to use babel-plugin-transform-prejss.
 *
 * Any suggestions? Feel free to share it:
 * - https://github.com/axept/prejss/issues/new
 */

var parse = void 0;

if (typeof window !== 'undefined' && (typeof process === 'undefined' ? 'undefined' : (0, _typeof3.default)(process)) !== 'object') {

  parse = function parse() {
    throw new Error('PreJSS fatal: Sorry, at the moment Web Browser is not supporting' + ' out of the box. Please use babel-plugin-transform-prejss instead.');
  };
} else {
  // @todo Check for React Native too?

  parse = require('./parser').default;
}

exports.default = parse;