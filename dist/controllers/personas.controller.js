"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveRequisitoEmpleo = exports.savePersona = exports.loginPersona = exports.getSolEmpleo = exports.getPersona = exports.getHtml = exports.aplicarTrabajo = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mssql = require("mssql");
var _database = require("../database");
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _path = _interopRequireDefault(require("path"));
var getHtml = exports.getHtml = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          res.sendFile(_path["default"].resolve(__dirname, '../../public/index.html'));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getHtml(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getPersona = exports.getPersona = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context2.sent;
          _context2.next = 6;
          return pool.request().query(_database.queries.getAllPersonas);
        case 6:
          result = _context2.sent;
          res.json(result.recordset);
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          res.status(500);
          res.send(_context2.t0.message);
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function getPersona(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var loginPersona = exports.loginPersona = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, email, password, pool, result, persona, match;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          if (!(!email || !password)) {
            _context3.next = 3;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            msg: 'Bad Request. Por favor proporciona email y password.'
          }));
        case 3:
          _context3.prev = 3;
          _context3.next = 6;
          return (0, _database.getConnection)();
        case 6:
          pool = _context3.sent;
          _context3.next = 9;
          return pool.request().input('email', _database.sql.VarChar, email).query(_database.queries.getPersonaByEmail);
        case 9:
          result = _context3.sent;
          if (!(result.recordset.length === 0)) {
            _context3.next = 12;
            break;
          }
          return _context3.abrupt("return", res.status(401).json({
            msg: 'Unauthorized. El email no está registrado.'
          }));
        case 12:
          persona = result.recordset[0]; // Verifica la contraseña
          _context3.next = 15;
          return _bcrypt["default"].compare(password, persona.Password);
        case 15:
          match = _context3.sent;
          if (match) {
            _context3.next = 18;
            break;
          }
          return _context3.abrupt("return", res.status(401).json({
            msg: 'Unauthorized. La contraseña es incorrecta.'
          }));
        case 18:
          // Login exitoso
          res.status(200).json({
            message: 'Login exitoso',
            persona: {
              id: persona.ID_Persona,
              nombre: persona.Nombre,
              apellido: persona.Apellido,
              email: persona.Email
            }
          });
          _context3.next = 25;
          break;
        case 21:
          _context3.prev = 21;
          _context3.t0 = _context3["catch"](3);
          console.error('Error during login:', _context3.t0);
          res.status(500).json({
            error: 'Internal Server Error',
            message: 'Error durante el login.'
          });
        case 25:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[3, 21]]);
  }));
  return function loginPersona(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var savePersona = exports.savePersona = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, identidad, nombre, apellido, fecha_nacimiento, direccion, telefono, email, password, cv, estado, nombre_fam, telefono_fam, id_parentesco, tipo_estudio, especialidad, promedio, servicio_militar, relacion_justicia, info_sanitaria, empresa, puesto, anios_experiencia, saltRounds, hashedPassword, pool, cvBuffer, estadoBuffer;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body2 = req.body, identidad = _req$body2.identidad, nombre = _req$body2.nombre, apellido = _req$body2.apellido, fecha_nacimiento = _req$body2.fecha_nacimiento, direccion = _req$body2.direccion, telefono = _req$body2.telefono, email = _req$body2.email, password = _req$body2.password, cv = _req$body2.cv, estado = _req$body2.estado, nombre_fam = _req$body2.nombre_fam, telefono_fam = _req$body2.telefono_fam, id_parentesco = _req$body2.id_parentesco, tipo_estudio = _req$body2.tipo_estudio, especialidad = _req$body2.especialidad, promedio = _req$body2.promedio, servicio_militar = _req$body2.servicio_militar, relacion_justicia = _req$body2.relacion_justicia, info_sanitaria = _req$body2.info_sanitaria, empresa = _req$body2.empresa, puesto = _req$body2.puesto, anios_experiencia = _req$body2.anios_experiencia; // Validación básica
          if (!(!identidad || !nombre || !apellido || !fecha_nacimiento || !direccion || !telefono || !email || !password || !nombre_fam || !telefono_fam)) {
            _context4.next = 4;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            msg: 'Bad Request. Por favor llena todos los campos'
          }));
        case 4:
          // Encriptar la contraseña
          saltRounds = 10; // Número de rondas de encriptación
          _context4.next = 7;
          return _bcrypt["default"].hash(password, saltRounds);
        case 7:
          hashedPassword = _context4.sent;
          _context4.next = 10;
          return (0, _database.getConnection)();
        case 10:
          pool = _context4.sent;
          cvBuffer = req.file.buffer;
          _context4.next = 14;
          return pool.request().input('identidad', _database.sql.BigInt, identidad).input('nombre', _database.sql.VarChar, nombre).input('apellido', _database.sql.VarChar, apellido).input('fecha_nacimiento', _database.sql.Date, fecha_nacimiento).input('direccion', _database.sql.VarChar, direccion).input('telefono', _database.sql.VarChar, telefono).input('email', _database.sql.VarChar, email).input('cv', _database.sql.VarBinary, cvBuffer).input('password', _database.sql.VarChar, hashedPassword) //la contrasenia ya encriptada es la que mando a guardar a la ddbb
          .query(_database.queries.savePersona);
        case 14:
          estadoBuffer = Buffer.from([estado]);
          _context4.next = 17;
          return pool.request().input("ID_Persona", _database.sql.BigInt, identidad).input("estado", _database.sql.Binary, estadoBuffer).query(_database.queries.saveSolicitantes);
        case 17:
          _context4.next = 19;
          return pool.request().input("solicitante_Id_Persona", _database.sql.BigInt, identidad).input("id_familiar", _database.sql.BigInt, identidad).input("nombre_fam", _database.sql.VarChar, nombre_fam).input("telefono_fam", _database.sql.VarChar, telefono_fam).input("id_parentesco", _database.sql.Int, id_parentesco).query(_database.queries.saveInfoFamilia);
        case 19:
          _context4.next = 21;
          return pool.request().input("tipo_estudio", _database.sql.VarChar, tipo_estudio).input("especialidad", _database.sql.VarChar, especialidad).input("promedio", _database.sql.Decimal, promedio).input("solicitante_Id_Persona", _database.sql.BigInt, identidad).query(_database.queries.saveEstudios);
        case 21:
          _context4.next = 23;
          return pool.request().input("servicio_militar", _database.sql.VarChar, servicio_militar).input("relacion_justicia", _database.sql.VarChar, relacion_justicia).input("solicitante_id_Persona", _database.sql.BigInt, identidad).query(_database.queries.saveInfoLegal);
        case 23:
          _context4.next = 25;
          return pool.request().input("id_persona_San", _database.sql.BigInt, identidad).input("info_sanitaria", _database.sql.VarChar, info_sanitaria).input("solicitante_Id_Persona", _database.sql.BigInt, identidad).query(_database.queries.saveInfoSanitaria);
        case 25:
          _context4.next = 27;
          return pool.request().input("id_persona", _database.sql.BigInt, identidad).input("empresa", _database.sql.VarChar, empresa).input("puesto", _database.sql.VarChar, puesto).input("anios_experiencia", _database.sql.Int, anios_experiencia).input("solicitante_Id_Persona", _database.sql.BigInt, identidad).query(_database.queries.saveExperienciaLaboral);
        case 27:
          res.status(201).json({
            identidad: identidad,
            nombre: nombre,
            apellido: apellido,
            fecha_nacimiento: fecha_nacimiento,
            direccion: direccion,
            telefono: telefono,
            email: email,
            estado: estado,
            nombre_fam: nombre_fam,
            telefono_fam: telefono_fam,
            id_parentesco: id_parentesco,
            tipo_estudio: tipo_estudio,
            especialidad: especialidad,
            promedio: promedio,
            servicio_militar: servicio_militar,
            relacion_justicia: relacion_justicia,
            info_sanitaria: info_sanitaria,
            empresa: empresa,
            puesto: puesto,
            anios_experiencia: anios_experiencia
          });
          _context4.next = 34;
          break;
        case 30:
          _context4.prev = 30;
          _context4.t0 = _context4["catch"](0);
          console.error('Error saving persona:', _context4.t0);
          res.status(500).json({
            error: 'Internal Server Error',
            message: 'Error al guardar la persona.'
          });
        case 34:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 30]]);
  }));
  return function savePersona(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getSolEmpleo = exports.getSolEmpleo = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context5.sent;
          _context5.next = 6;
          return pool.request().query(_database.queries.getAllSolEmpleo);
        case 6:
          result = _context5.sent;
          res.json(result.recordset);
          _context5.next = 14;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          res.status(500);
          res.send(_context5.t0.message);
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function getSolEmpleo(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var saveRequisitoEmpleo = exports.saveRequisitoEmpleo = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body3, identidad, tipo_puesto, condiciones, salario, pool;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _req$body3 = req.body, identidad = _req$body3.identidad, tipo_puesto = _req$body3.tipo_puesto, condiciones = _req$body3.condiciones, salario = _req$body3.salario; // Validación básica
          if (!(!identidad || !tipo_puesto || !condiciones || !salario)) {
            _context6.next = 4;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            msg: 'Bad Request. Por favor llena todos los campos'
          }));
        case 4:
          _context6.next = 6;
          return (0, _database.getConnection)();
        case 6:
          pool = _context6.sent;
          _context6.next = 9;
          return pool.request().input("id_solicitante", _database.sql.BigInt, identidad).input("tipo_puesto", _database.sql.VarChar, tipo_puesto).input("condiciones", _database.sql.VarChar, condiciones).input("salario", _database.sql.Decimal, salario).input("id_solicitantes", _database.sql.BigInt, identidad).query(_database.queries.saveReqEmpleo);
        case 9:
          res.status(201).json({
            identidad: identidad,
            tipo_puesto: tipo_puesto,
            condiciones: condiciones,
            salario: salario
          });
          _context6.next = 16;
          break;
        case 12:
          _context6.prev = 12;
          _context6.t0 = _context6["catch"](0);
          console.error('Error saving requisitos empleo', _context6.t0);
          res.status(500).json({
            error: 'Internal Server Error',
            message: 'Error al guardar los requisitos del Eempleo'
          });
        case 16:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 12]]);
  }));
  return function saveRequisitoEmpleo(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var aplicarTrabajo = exports.aplicarTrabajo = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _req$body4, id_solicitudPuesto, id_solicitud, tipo_empleo, id_solicitante, pool;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          if (!(!req.user || !req.body.id_solicitudPuesto || !req.body.id_solicitud || !req.body.tipo_empleo)) {
            _context7.next = 3;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            msg: 'Bad Request. Por favor completa todos los campos.'
          }));
        case 3:
          _req$body4 = req.body, id_solicitudPuesto = _req$body4.id_solicitudPuesto, id_solicitud = _req$body4.id_solicitud, tipo_empleo = _req$body4.tipo_empleo;
          id_solicitante = req.user.id; // Obtener ID del solicitante del token o sesión
          _context7.next = 7;
          return (0, _database.getConnection)();
        case 7:
          pool = _context7.sent;
          _context7.next = 10;
          return pool.request().input('ID_Solicitud', _database.sql.BigInt, id_solicitud).input('ID_Solicitante', _database.sql.BigInt, id_solicitante).input('ID_Puesto', _database.sql.BigInt, id_solicitudPuesto).input('Tipo_Empleo', _database.sql.VarChar, tipo_empleo);
        case 10:
          res.status(201).json({
            id_solicitante: id_solicitante,
            id_solicitud: id_solicitud,
            id_solicitudPuesto: id_solicitudPuesto,
            tipo_empleo: tipo_empleo
          });
          _context7.next = 17;
          break;
        case 13:
          _context7.prev = 13;
          _context7.t0 = _context7["catch"](0);
          console.error('Error applying to job:', _context7.t0);
          res.status(500).json({
            error: 'Internal Server Error',
            message: 'Error al aplicar al puesto de trabajo.'
          });
        case 17:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 13]]);
  }));
  return function aplicarTrabajo(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

/*
export const updatePersona = async (req, res) =>{
    try {
        const { direccion, telefono, password, estado, nombre_fam, telefono_fam, id_parentesco, tipo_estudio, especialidad, promedio, servicio_militar, relacion_justicia, info_sanitaria, empresa, puesto, anios_experiencia } = req.body;

        // Encriptar la contraseña
        const saltRounds = 10; // Número de rondas de encriptación
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const pool = await getConnection();

        await pool.request()
            .input('direccion', sql.VarChar, direccion)
            .input('telefono', sql.VarChar, telefono)
            .input('email', sql.VarChar, email)
            .input('password', sql.VarChar, hashedPassword) //la contrasenia ya encriptada es la que mando a guardar a la ddbb
            .query(queries.updatePersona;

        const estadoBuffer = Buffer.from([estado]);
            
        await pool.request()
            .input("ID_Persona", sql.BigInt, identidad)
            .input("estado", sql.Binary, estadoBuffer)
            .query(queries.saveSolicitantes);

        await pool.request()
            .input("solicitante_Id_Persona", sql.BigInt, identidad)
            .input("id_familiar", sql.BigInt, identidad)
            .input("nombre_fam", sql.VarChar, nombre_fam)
            .input("telefono_fam", sql.VarChar, telefono_fam)
            .input("id_parentesco", sql.Int, id_parentesco)
            .query(queries.saveInfoFamilia);

         await pool.request()
            .input("tipo_estudio", sql.VarChar, tipo_estudio)
            .input("especialidad", sql.VarChar, especialidad)
            .input("promedio", sql.Decimal, promedio)
            .input("solicitante_Id_Persona", sql.BigInt, identidad)
            .query(queries.saveEstudios);

        await pool.request()
            .input("servicio_militar", sql.VarChar, servicio_militar)
            .input("relacion_justicia", sql.VarChar, relacion_justicia)
            .input("solicitante_id_Persona", sql.BigInt, identidad)
            .query(queries.saveInfoLegal);

        await pool.request()
            .input("id_persona_San", sql.BigInt, identidad)
            .input("info_sanitaria", sql.VarChar, info_sanitaria)
            .input("solicitante_Id_Persona", sql.BigInt, identidad)
            .query(queries.saveInfoSanitaria);

        await pool.request()
            .input("id_persona", sql.BigInt, identidad)
            .input("empresa", sql.VarChar, empresa)
            .input("puesto", sql.VarChar, puesto)
            .input("anios_experiencia", sql.Int, anios_experiencia)
            .input("solicitante_Id_Persona", sql.BigInt, identidad)
            .query(queries.saveExperienciaLaboral);


        res.status(201).json({ identidad, nombre, apellido, fecha_nacimiento, direccion, telefono, email, estado, nombre_fam, telefono_fam, id_parentesco, tipo_estudio, especialidad, promedio, servicio_militar, relacion_justicia, info_sanitaria, empresa, puesto, anios_experiencia });

    } catch (error) {
        console.error('Error saving persona:', error);
        res.status(500).json({ error: 'Internal Server Error', message: 'Error al guardar la persona.' });
    }
}*/