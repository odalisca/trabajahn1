"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _puestos_trabajo = require("../controllers/puestos_trabajo.controller");
var router = (0, _express.Router)();
router.post('/puesto/save', _puestos_trabajo.savePuestoTrabajo);
router.post('/tipoContrato/save', _puestos_trabajo.saveTipoContrato);
router.post('/contrato/save', _puestos_trabajo.saveContrato);
router.post('/requisito/save', _puestos_trabajo.saveRequisito);
router.post('/tipoRequisito/save', _puestos_trabajo.saveTipoRequisito);
router.get('/contrato/get', _puestos_trabajo.getContratoById);
var _default = exports["default"] = router;