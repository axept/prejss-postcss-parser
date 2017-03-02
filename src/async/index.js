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

let parse

if (typeof window !== 'undefined' && typeof process !== 'object') {
  
  parse = function () {
    throw new Error(
      'PreJSS fatal: Sorry, at the moment Web Browser is not supporting' +
      ' out of the box. Please use babel-plugin-prejss instead.'
    )
  }

} else {
  // @todo Check for React Native too?

  parse = require('./parser').default
}

export default parse
