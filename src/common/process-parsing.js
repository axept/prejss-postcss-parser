import postcss from 'postcss'
import postcssrc from 'postcss-load-config'
import safeParse from 'postcss-safe-parser'

import defaultConfig from './default-config'

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
    try {
      config = await postcssrc()
    } catch (e) {
      config = defaultConfig
    }
  }

  const { plugins = [], options = {} } = config
  const finalOptions = { parser: safeParse, ...options }

  if (!processor) {
    processor = postcss(plugins)
  }

  return processor.process(rawStyles, finalOptions)
}

export default processParsing
