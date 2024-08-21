"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _empresas = require("../controllers/empresas.controllers");
var router = (0, _express.Router)();
router.get('/empresas/get', _empresas.getEmpresas);
router.get('/empresa/get/:id', _empresas.getEmpresaById);
router.get('/empresa/login', _empresas.loginEmpresa);
router.post('/empresa/save', _empresas.saveEmpresa);
router.post('/empresa/solEmpleo', _empresas.SaveSolicitudEmpleo);
router.put('/empresa/update/:id', _empresas.updateEmpresaById);
router["delete"]('/empresa/delete/:id', _empresas.deleteEmpresaById);
var _default = exports["default"] = router;