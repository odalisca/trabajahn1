"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEmpresaById = exports.saveEmpresa = exports.loginEmpresa = exports.getEmpresas = exports.getEmpresaById = exports.deleteEmpresaById = exports.SaveSolicitudEmpleo = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var getEmpresas = exports.getEmpresas = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_database.queries.getAllEmpresa);
        case 6:
          result = _context.sent;
          res.json(result.recordset);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send(_context.t0.message);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getEmpresas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getEmpresaById = exports.getEmpresaById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context2.sent;
          _context2.next = 6;
          return pool.request().input('Id', id).query(_database.queries.getEmpresaById);
        case 6:
          result = _context2.sent;
          res.json(result.recordset[0]);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getEmpresaById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var saveEmpresa = exports.saveEmpresa = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, nombre, cif, director, direccion, telefono, email, estado, password, saltRounds, hashedPassword, pool;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body = req.body, nombre = _req$body.nombre, cif = _req$body.cif, director = _req$body.director, direccion = _req$body.direccion, telefono = _req$body.telefono, email = _req$body.email, estado = _req$body.estado, password = _req$body.password;
          if (!(!nombre || !cif || !director || !direccion || !telefono || !email || !estado || !password)) {
            _context3.next = 4;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            msg: 'Bad Request.  Por favor llena todos los campos'
          }));
        case 4:
          // Encriptar la contraseña
          saltRounds = 10; // Número de rondas de encriptación
          _context3.next = 7;
          return _bcrypt["default"].hash(password, saltRounds);
        case 7:
          hashedPassword = _context3.sent;
          _context3.next = 10;
          return (0, _database.getConnection)();
        case 10:
          pool = _context3.sent;
          _context3.next = 13;
          return pool.request().input('nombre', _database.sql.VarChar, nombre).input('cif', _database.sql.VarChar, cif).input('director', _database.sql.VarChar, director).input('direccion', _database.sql.VarChar, direccion).input('telefono', _database.sql.VarChar, telefono).input('email', _database.sql.VarChar, email).input('estado', _database.sql.Bit, estado).input('password', _database.sql.VarChar, hashedPassword).query(_database.queries.saveEmpresa);
        case 13:
          res.json({
            nombre: nombre,
            cif: cif,
            director: director,
            direccion: direccion,
            telefono: telefono,
            email: email,
            estado: estado
          });
          _context3.next = 20;
          break;
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](0);
          res.status(500);
          res.send(_context3.t0.message);
        case 20:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 16]]);
  }));
  return function saveEmpresa(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updateEmpresaById = exports.updateEmpresaById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, nombre, cif, director, direccion, telefono, email, estado, password, id, saltRounds, hashedPassword, pool;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body2 = req.body, nombre = _req$body2.nombre, cif = _req$body2.cif, director = _req$body2.director, direccion = _req$body2.direccion, telefono = _req$body2.telefono, email = _req$body2.email, estado = _req$body2.estado, password = _req$body2.password;
          id = req.params.id; // Encriptar la contraseña
          saltRounds = 10; // Número de rondas de encriptación
          _context4.next = 5;
          return _bcrypt["default"].hash(password, saltRounds);
        case 5:
          hashedPassword = _context4.sent;
          if (!(!nombre || !cif || !director || !direccion || !telefono || !email || !estado)) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            msg: 'Bad Request.  Por favor llena todos los campos'
          }));
        case 8:
          _context4.next = 10;
          return (0, _database.getConnection)();
        case 10:
          pool = _context4.sent;
          _context4.next = 13;
          return pool.request().input('nombre', _database.sql.VarChar, nombre).input('cif', _database.sql.VarChar, cif).input('director', _database.sql.VarChar, director).input('direccion', _database.sql.VarChar, direccion).input('telefono', _database.sql.VarChar, telefono).input('email', _database.sql.VarChar, email).input('estado', _database.sql.Bit, estado).input('password', _database.sql.VarChar, hashedPassword).input('Id', _database.sql.Int, id).query(_database.queries.updateEmpresaById);
        case 13:
          res.json({
            nombre: nombre,
            cif: cif,
            director: director,
            direccion: direccion,
            telefono: telefono,
            email: email,
            estado: estado
          });
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function updateEmpresaById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteEmpresaById = exports.deleteEmpresaById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context5.sent;
          _context5.next = 6;
          return pool.request().input('Id', id).query(_database.queries.deleteEmpresaById);
        case 6:
          result = _context5.sent;
          res.send(result);
        case 8:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function deleteEmpresaById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var loginEmpresa = exports.loginEmpresa = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body3, email, password, pool, result, empresa, match;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body3 = req.body, email = _req$body3.email, password = _req$body3.password;
          if (!(!email || !password)) {
            _context6.next = 3;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            msg: 'Bad Request. Por favor proporciona email y password.'
          }));
        case 3:
          _context6.prev = 3;
          _context6.next = 6;
          return (0, _database.getConnection)();
        case 6:
          pool = _context6.sent;
          _context6.next = 9;
          return pool.request().input('email', _database.sql.VarChar, email).query(_database.queries.getEmpresaByEmail);
        case 9:
          result = _context6.sent;
          if (!(result.recordset.length === 0)) {
            _context6.next = 12;
            break;
          }
          return _context6.abrupt("return", res.status(401).json({
            msg: 'Unauthorized. El email no está registrado.'
          }));
        case 12:
          empresa = result.recordset[0]; // Verifica la contraseña
          _context6.next = 15;
          return _bcrypt["default"].compare(password, empresa.Password);
        case 15:
          match = _context6.sent;
          if (match) {
            _context6.next = 18;
            break;
          }
          return _context6.abrupt("return", res.status(401).json({
            msg: 'Unauthorized. La contraseña es incorrecta.'
          }));
        case 18:
          // Login exitoso
          res.status(200).json({
            message: 'Login exitoso',
            empresa: {
              id: empresa.ID_Empresa,
              cif: empresa.CIF,
              nombre: empresa.Nombre,
              direccion: empresa.Direccion,
              email: empresa.Email
            }
          });
          _context6.next = 25;
          break;
        case 21:
          _context6.prev = 21;
          _context6.t0 = _context6["catch"](3);
          console.error('Error during login:', _context6.t0);
          res.status(500).json({
            error: 'Internal Server Error',
            message: 'Error durante el login.'
          });
        case 25:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[3, 21]]);
  }));
  return function loginEmpresa(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var SaveSolicitudEmpleo = exports.SaveSolicitudEmpleo = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _req$body4, tipo_puesto, limitaciones, deseos, salario_max, salario_min, pool;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _req$body4 = req.body, tipo_puesto = _req$body4.tipo_puesto, limitaciones = _req$body4.limitaciones, deseos = _req$body4.deseos, salario_max = _req$body4.salario_max, salario_min = _req$body4.salario_min;
          if (!(!tipo_puesto || !limitaciones || !deseos || !salario_max || !salario_min)) {
            _context7.next = 4;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            msg: 'Bad Request. Por favor completar todos los campos'
          }));
        case 4:
          _context7.next = 6;
          return (0, _database.getConnection)();
        case 6:
          pool = _context7.sent;
          _context7.next = 9;
          return pool.request().input('tipo_puesto', _database.sql.VarChar, tipo_puesto).input('limitaciones', _database.sql.VarChar, limitaciones).input('deseos', _database.sql.VarChar, deseos).input('salario_max', _database.sql.Float, salario_max).input('salario_min', _database.sql.Float, salario_min).query(_database.queries.saveSolicitudPuesto);
        case 9:
          res.status(201).json({
            tipo_puesto: tipo_puesto,
            limitaciones: limitaciones,
            deseos: deseos,
            salario_max: salario_max,
            salario_min: salario_min
          });
          _context7.next = 16;
          break;
        case 12:
          _context7.prev = 12;
          _context7.t0 = _context7["catch"](0);
          console.error('Error Creating Solicitud de Empleo', _context7.t0);
          res.status(500).json({
            error: 'Internal Server Error',
            message: 'Error al guardar la Solicitud de Empleo'
          });
        case 16:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 12]]);
  }));
  return function SaveSolicitudEmpleo(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();