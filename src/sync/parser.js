/**
 * @see https://gist.github.com/muratgozel/e3ca2c08f74c9cb6eb7314e3088edb77#gistcomment-1802108
 *
 * At the moment PostCSS async parser is using.
 *
 * To get it as sync function deasync package has been used.
 * Be careful! It blocks event loop. See more details in deasync README.
 *
 * @todo Find a way to do not use deasync
 */
import postcssJs from 'postcss-js'
import deasync from 'deasync'

import processParsing from '../common/process-parsing'

/**
 * Parse specified Tagged Template Strings with CSS and expressions
 *
 * @param {String} raw source
 * @param {Object} processOptions from api
 * @returns {Object} JSS object
 */
export default deasync((rawStyles, processOptions = {}, cb) => {
  processParsing(rawStyles, processOptions)
    .then(result => postcssJs.objectify(result.root))
    .then(result => cb(null, result))
    .catch(error => cb(error))
})
