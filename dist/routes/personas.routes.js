"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _personas = require("../controllers/personas.controller");
// routes/personas.routes.js

var router = (0, _express.Router)();
router.get('/', _personas.getHtml);
router.post('/personas/save', _personas.savePersona);
router.post('/personas/login', _personas.loginPersona);
router.get('/personas/get', _personas.getPersona);
router.get('/personas/getSolEmpleo', _personas.getSolEmpleo);
router.post('/personas/apliTrabajo', _personas.aplicarTrabajo);
router.post('/persona/ReqEmpleo', _personas.saveRequisitoEmpleo);
var _default = exports["default"] = router;