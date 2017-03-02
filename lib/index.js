'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncAdapter = exports.syncAdapter = undefined;

var _sync = require('./sync');

var _sync2 = _interopRequireDefault(_sync);

var _async = require('./async');

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.syncAdapter = _sync2.default;
exports.asyncAdapter = _async2.default;
exports.default = _sync2.default;