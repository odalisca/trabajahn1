"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveTipoRequisito = exports.saveTipoContrato = exports.saveRequisito = exports.savePuestoTrabajo = exports.saveContrato = exports.getContratoById = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var savePuestoTrabajo = exports.savePuestoTrabajo = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, tipo_puesto, condiciones, id_empresa, pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, tipo_puesto = _req$body.tipo_puesto, condiciones = _req$body.condiciones, id_empresa = _req$body.id_empresa;
          if (!(!tipo_puesto || !condiciones || !id_empresa)) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            msg: 'Bad Request.  Por favor llena todos los campos'
          }));
        case 4:
          _context.next = 6;
          return (0, _database.getConnection)();
        case 6:
          pool = _context.sent;
          _context.next = 9;
          return pool.request().input('tipo_puesto', _database.sql.VarChar, tipo_puesto).input('condiciones', _database.sql.VarChar, condiciones).input('id_empresa', _database.sql.Int, id_empresa).query(_database.queries.savePuesto);
        case 9:
          res.json({
            tipo_puesto: tipo_puesto,
            condiciones: condiciones,
            id_empresa: id_empresa
          });
          _context.next = 16;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send(_context.t0.message);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return function savePuestoTrabajo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var saveTipoContrato = exports.saveTipoContrato = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, id_tipo_contrato, tipo_contrato, salario_por_hora, horas_contrato, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, id_tipo_contrato = _req$body2.id_tipo_contrato, tipo_contrato = _req$body2.tipo_contrato, salario_por_hora = _req$body2.salario_por_hora, horas_contrato = _req$body2.horas_contrato;
          if (!(!id_tipo_contrato || !tipo_contrato || !salario_por_hora || !horas_contrato)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: 'Bad Request.  Por favor llena todos los campos'
          }));
        case 4:
          _context2.next = 6;
          return (0, _database.getConnection)();
        case 6:
          pool = _context2.sent;
          _context2.next = 9;
          return pool.request().input('id_tipo_contrato', _database.sql.Int, id_tipo_contrato).input('tipo_contrato', _database.sql.VarChar, tipo_contrato).input('salario_por_hora', _database.sql.Float, salario_por_hora).input('horas_contrato', _database.sql.Int, horas_contrato).query(_database.queries.saveTipoContrato);
        case 9:
          res.json({
            id_tipo_contrato: id_tipo_contrato,
            tipo_contrato: tipo_contrato,
            salario_por_hora: salario_por_hora,
            horas_contrato: horas_contrato
          });
          _context2.next = 16;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          res.status(500);
          res.send(_context2.t0.message);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return function saveTipoContrato(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var saveContrato = exports.saveContrato = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body3, id_puesto, id_tipo_contrato, pool;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body3 = req.body, id_puesto = _req$body3.id_puesto, id_tipo_contrato = _req$body3.id_tipo_contrato;
          if (!(!id_puesto || !id_tipo_contrato)) {
            _context3.next = 4;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            msg: 'Bad Request.  Por favor llena todos los campos'
          }));
        case 4:
          _context3.next = 6;
          return (0, _database.getConnection)();
        case 6:
          pool = _context3.sent;
          _context3.next = 9;
          return pool.request().input('id_puesto', _database.sql.Int, id_puesto).input('id_tipo_contrato', _database.sql.Int, id_tipo_contrato).query(_database.queries.saveContrato);
        case 9:
          res.json({
            id_puesto: id_puesto,
            id_tipo_contrato: id_tipo_contrato
          });
          _context3.next = 16;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          res.status(500);
          res.send(_context3.t0.message);
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return function saveContrato(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var saveRequisito = exports.saveRequisito = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body4, id_requisito, requisito, pool;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body4 = req.body, id_requisito = _req$body4.id_requisito, requisito = _req$body4.requisito;
          if (!(!id_requisito || !requisito)) {
            _context4.next = 4;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            msg: 'Bad Request.  Por favor llena todos los campos'
          }));
        case 4:
          _context4.next = 6;
          return (0, _database.getConnection)();
        case 6:
          pool = _context4.sent;
          _context4.next = 9;
          return pool.request().input('id_requisito', _database.sql.Int, id_requisito).input('requisito', _database.sql.VarChar, requisito).query(_database.queries.saveRequisito);
        case 9:
          res.json({
            id_requisito: id_requisito,
            requisito: requisito
          });
          _context4.next = 16;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          res.status(500);
          res.send(_context4.t0.message);
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return function saveRequisito(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var saveTipoRequisito = exports.saveTipoRequisito = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body5, id_tipo_requisito, id_requisito, id_puesto, tipo, pool;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body5 = req.body, id_tipo_requisito = _req$body5.id_tipo_requisito, id_requisito = _req$body5.id_requisito, id_puesto = _req$body5.id_puesto, tipo = _req$body5.tipo;
          if (!(!id_tipo_requisito || !id_requisito || !id_puesto || !tipo)) {
            _context5.next = 4;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            msg: 'Bad Request.  Por favor llena todos los campos'
          }));
        case 4:
          _context5.next = 6;
          return (0, _database.getConnection)();
        case 6:
          pool = _context5.sent;
          _context5.next = 9;
          return pool.request().input('id_tipo_requisito', _database.sql.Int, id_tipo_requisito).input('id_requisito', _database.sql.Int, id_requisito).input('id_puesto', _database.sql.Int, id_puesto).input('tipo', _database.sql.VarChar, tipo).query(_database.queries.saveTipoRequisito);
        case 9:
          res.json({
            id_tipo_requisito: id_tipo_requisito,
            id_requisito: id_requisito,
            id_puesto: id_puesto,
            tipo: tipo
          });
          _context5.next = 16;
          break;
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](0);
          res.status(500);
          res.send(_context5.t0.message);
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 12]]);
  }));
  return function saveTipoRequisito(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getContratoById = exports.getContratoById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body6, id_puesto, id_tipo_contrato, pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body6 = req.body, id_puesto = _req$body6.id_puesto, id_tipo_contrato = _req$body6.id_tipo_contrato;
          _context6.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context6.sent;
          _context6.next = 6;
          return pool.request().input('id_puesto', _database.sql.Int, id_puesto).input('id_tipo_contrato', _database.sql.Int, id_tipo_contrato).query(_database.queries.getContratoById);
        case 6:
          result = _context6.sent;
          res.json(result.recordset[0]);
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function getContratoById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();