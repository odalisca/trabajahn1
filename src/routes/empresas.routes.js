import { Router } from "express";
import { getEmpresas, getEmpresaById, saveEmpresa, deleteEmpresaById, updateEmpresaById, loginEmpresa, SaveSolicitudEmpleo } from '../controllers/empresas.controllers'

const router = Router()

router.get('/empresas/get', getEmpresas)

router.get('/empresa/get/:id', getEmpresaById)

router.get('/empresa/login', loginEmpresa)

router.post('/empresa/save', saveEmpresa)

router.post('/empresa/solEmpleo', SaveSolicitudEmpleo)

router.put('/empresa/update/:id', updateEmpresaById)

router.delete('/empresa/delete/:id', deleteEmpresaById)

export default router