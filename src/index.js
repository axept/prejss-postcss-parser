import syncParser from './sync'
import asyncParser from './async'

const wrappedSync = prepareParser(syncParser)
const wrappedAsync = prepareParser(asyncParser)

function prepareParser(parser) {
  return (raw, options = {}) => {
    const { config } = options
    if (config && config.plugins) {
      return parser(raw, {
        ...options,
        config: {
          ...config,
          plugins: config.plugins.map(plugin => {
            return require(plugin)
          }),
        }
      })
    } else {
      return parser(raw, options)
    }
  }
}

export { wrappedSync as syncParser }
export { wrappedAsync as asyncParser }
export default wrappedSync
