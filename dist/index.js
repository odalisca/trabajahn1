"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
_app["default"].listen(_app["default"].get('port'));
console.log('object');
console.log("server http://localhost:".concat(_app["default"].get('port')));