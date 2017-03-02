'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

var _postcssSafeParser = require('postcss-safe-parser');

var _postcssSafeParser2 = _interopRequireDefault(_postcssSafeParser);

var _postcssJs = require('postcss-js');

var _postcssJs2 = _interopRequireDefault(_postcssJs);

var _postcssLoadConfig = require('postcss-load-config');

var _postcssLoadConfig2 = _interopRequireDefault(_postcssLoadConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @see https://gist.github.com/muratgozel/e3ca2c08f74c9cb6eb7314e3088edb77#gistcomment-1802108
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var config = void 0;
var options = void 0;
var processor = void 0;

/**
 * 1. Initiate config, options and processor variables in module scope,
 *    if they are not initiated yet
 *
 * 2. Process parsing with initiated options
 * 
 * @param {String} rawStyles
 * @returns {Object} JSS Object
 */
var processParsing = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(rawStyles) {
    var loadedConfig;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (config) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return (0, _postcssLoadConfig2.default)();

          case 3:
            config = _context.sent;
            loadedConfig = config.options || {};

            options = _extends({ parser: _postcssSafeParser2.default }, loadedConfig);

          case 6:

            if (!processor) {
              processor = (0, _postcss2.default)(config.plugins || []);
            }

            return _context.abrupt('return', processor.process(rawStyles, options));

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function processParsing(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Parse specified Tagged Template Strings with CSS and expressions
 *
 * @param {String}
 * @returns {Object} JSS object
 */

exports.default = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(rawStyles) {
    var processed;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return processParsing(rawStyles);

          case 2:
            processed = _context2.sent;
            return _context2.abrupt('return', _postcssJs2.default.objectify(processed.root));

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();