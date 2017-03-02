'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

if (typeof window !== 'undefined') {

  parse = function parse() {
    throw new Error('PreJSS fatal: Sorry, at the moment Web Browser is not supporting' + ' out of the box. Please use babel-plugin-prejss instead.');
  };
} else {
  // @todo Check for React Native too?

  parse = require('./parser').default;
}

exports.default = { parse: parse };