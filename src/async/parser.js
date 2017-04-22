/**
 * @see https://gist.github.com/muratgozel/e3ca2c08f74c9cb6eb7314e3088edb77#gistcomment-1802108
 */
import postcssJs from 'postcss-js'

import processParsing from '../common/process-parsing'

/**
 * Parse specified Tagged Template Strings with CSS and expressions
 *
 * @param {String} rawStyles
 * @param {Object} processOptions
 * @returns {Object} JSS object
 */
export default async (rawStyles, processOptions) => {
  const processed = await processParsing(rawStyles, processOptions)
  return postcssJs.objectify(processed.root)
}
