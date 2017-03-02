'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

var _postcssSafeParser = require('postcss-safe-parser');

var _postcssSafeParser2 = _interopRequireDefault(_postcssSafeParser);

var _postcssJs = require('postcss-js');

var _postcssJs2 = _interopRequireDefault(_postcssJs);

var _postcssLoadConfig = require('postcss-load-config');

var _postcssLoadConfig2 = _interopRequireDefault(_postcssLoadConfig);

var _deasync = require('deasync');

var _deasync2 = _interopRequireDefault(_deasync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postcssrcSync = (0, _deasync2.default)(function (cb) {
  (0, _postcssLoadConfig2.default)().then(function (res) {
    return cb(null, res);
  }).catch(function (err) {
    return cb(err);
  });
}); /**
     * @see https://gist.github.com/muratgozel/e3ca2c08f74c9cb6eb7314e3088edb77#gistcomment-1802108
     *
     * At the moment PostCSS async parser is using.
     *
     * To get it as sync function deasync package has been used.
     * Be careful! It blocks event loop. See more details in deasync README.
     *
     * @todo Find a way to do not use deasync
     */


var config = {};
try {
  config = postcssrcSync();
} catch (err) {
  console.error(err);
}

var processor = (0, _postcss2.default)(config.plugins || []);
var options = config.options || {};
var finalOptions = (0, _extends3.default)({ parser: _postcssSafeParser2.default }, options);

var processSync = (0, _deasync2.default)(function (raw, cb) {
  return processor.process(raw, finalOptions).then(function (res) {
    return cb(null, res);
  }).catch(function (err) {
    return cb(err);
  });
});

/**
 * Parse specified Tagged Template Strings with CSS and expressions
 *
 * @param {String} 
 * @returns {Object} JSS object
 */

exports.default = function (rawStyles) {
  var processed = processSync(rawStyles);
  return _postcssJs2.default.objectify(processed.root);
};