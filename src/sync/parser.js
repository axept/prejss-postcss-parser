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
import postcss from 'postcss'
import safeParse from 'postcss-safe-parser'
import postcssJs from 'postcss-js'
import postcssrc from 'postcss-load-config'
import deasync from 'deasync'

let config
let processor

/**
 * 1. Initiate config, options and processor variables in module scope,
 *    if they are not initiated yet
 *
 * 2. Process parsing with initiated options
 *
 * @param {String} rawStyles
 * @param {Object} processOptions
 * @returns {Object} JSS Object
 */
const processParsing = async (rawStyles, processOptions = {}) => {
  const { config: customConfig } = processOptions
  if (!config && customConfig) {
    config = customConfig
  } else if (!config) {
    config = await postcssrc()
  }

  const { plugins = [], options = {} } = config
  const finalOptions = { parser: safeParse, ...options }

  if (!processor) {
    processor = postcss(plugins)
  }

  return processor.process(rawStyles, finalOptions)
}

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



