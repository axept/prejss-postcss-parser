/**
 * Full-featured PostCSS Async Parser for PreJSS
 *
 * Until we did not solved how we can get all PostCSS plugins in browser
 * in high performant way, we have to throw error and require
 * to use babel-plugin-transform-prejss.
 *
 * Any suggestions? Feel free to share it:
 * - https://github.com/axept/prejss/issues/new
 */

let parse


const isBrowser = (typeof window !== 'undefined' && typeof process !== 'object') 

if (isBrowser) {

  parse = function () {
    throw new Error(
      'PostCSS Parser for PreJSS fatal: Sorry, at the moment Web Browser is not supporting' +
      ' out of the box. Please use babel-plugin-transform-prejss instead.'
    )
  }

} else {
  // @todo Check for React Native too?

  parse = require('./parser').default
}

export default parse
