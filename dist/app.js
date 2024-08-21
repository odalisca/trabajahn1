"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config"));
var _empresas = _interopRequireDefault(require("./routes/empresas.routes"));
var _personas = _interopRequireDefault(require("./routes/personas.routes"));
var _puestos_trabajo = _interopRequireDefault(require("./routes/puestos_trabajo.routes"));
var _methodOverride = _interopRequireDefault(require("method-override"));
var _cors = _interopRequireDefault(require("cors"));
var _path = _interopRequireDefault(require("path"));
var app = (0, _express["default"])();

//Settings
app.set('port', _config["default"].port);
app.use((0, _cors["default"])());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.set('public', _path["default"].join(__dirname, 'public'));
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));
app.use((0, _methodOverride["default"])('_method'));

//middlewares
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_empresas["default"], _puestos_trabajo["default"]);
app.use(_personas["default"]);
var _default = exports["default"] = app;