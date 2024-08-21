"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = exports.queries = {
  getAllEmpresa: "SELECT * FROM Empresas",
  saveEmpresa: "INSERT INTO Empresas (Nombre, CIF, Director, Direccion, Telefono, Email, Estado, Password) VALUES\n                    (@nombre, @cif, @director, @direccion, @telefono, @email, @estado, @password);",
  getEmpresaById: "SELECT * FROM Empresas\n                        WHERE ID_Empresa = @Id",
  deleteEmpresaById: "DELETE FROM Empresas WHERE ID_Empresa = @Id",
  updateEmpresaById: "UPDATE Empresas SET Nombre = @nombre, CIF = @cif, Director = @director, Direccion = @direccion, Telefono = @telefono, Email = @email, Estado = @estado, Password = @password\n                            WHERE ID_Empresa = @Id",
  getEmpresaByEmail: "SELECT * FROM Empresas WHERE email = @email",
  savePuesto: "INSERT INTO Puestos_Trabajo (Tipo_Puesto, Condiciones, ID_Empresa) VALUES\n                    (@tipo_puesto, @condiciones, @id_empresa)",
  saveTipoContrato: "INSERT INTO Tipo_Contratos (IdTipoContrato, TipoContrato, SalarioPorHora, horasContrato) VALUES\n                        (@id_tipo_contrato, @tipo_contrato, @salario_por_hora, @horas_contrato);",
  saveContrato: "INSERT INTO Contratos (Sueldo, ID_Puesto, IdTipoContrato)\n                    VALUES (\n                        (SELECT SueldoBase \n                        FROM Tipo_Contratos \n                        WHERE Tipo_Contratos.IdTipoContrato = @id_tipo_contrato\n                        ), @id_puesto, @id_tipo_contrato\n                    );",
  getContratoById: "SELECT c.Sueldo, pt.Tipo_Puesto, pt.Condiciones, tc.TipoContrato, tc.SalarioPorHora,\n                        tc.horasContrato, e.Nombre AS Empresa, tr.Tipo AS Requisito, r.Requisito AS TipoRequisito FROM Contratos c\n                        INNER JOIN Puestos_Trabajo pt ON c.ID_Puesto = pt.ID_Puesto\n                        INNER JOIN Tipo_Contratos tc ON c.IdTipoContrato = tc.IdTipoContrato\n                        INNER JOIN Empresas e ON pt.ID_Empresa = e.ID_Empresa\n                        INNER JOIN TiposRequisitos tr ON pt.ID_Puesto = tr.ID_Puesto\n                        INNER JOIN Requisitos r ON tr.IdRequisito = r.IdRequisito\n                        WHERE c.ID_Puesto = @id_puesto AND c.IdTipoContrato = @id_tipo_contrato",
  saveRequisito: "INSERT INTO Requisitos (IdRequisito, Requisito) VALUES\n                        (@id_requisito, @requisito)",
  saveTipoRequisito: "INSERT INTO TiposRequisitos (IDTipoRequisito, IdRequisito, ID_Puesto, Tipo) VALUES\n                            (@id_tipo_requisito, @id_requisito, @id_puesto, @tipo);",
  saveSolicitudPuesto: 'INSERT INTO Solicitudes_Empleo (Tipo_Puesto_Solicitado, Limitaciones, Deseos, SalarioMax, SalarioMin) VALUES (@tipo_puesto, @limitaciones, @deseos, @salario_max, @salario_min)',
  getAllPersonas: "SELECT * FROM Personas",
  getPersonaByEmail: "SELECT * FROM Personas WHERE email = @email",
  savePersona: "INSERT INTO Personas (ID_Persona, Nombre, Apellido, Fecha_Nacimiento, Direccion, Telefono, Email, Password, CV)\n                    VALUES (@identidad, @nombre, @apellido, @fecha_nacimiento, @direccion, @telefono, @email, @password, @cv);",
  saveSolicitantes: 'INSERT INTO Solicitantes (ID_Persona, Estado) VALUES (@ID_Persona, @estado);',
  saveInfoFamilia: 'INSERT INTO Familiares (Solicitantes_ID_Persona, ID_Persona_Familiar, IDRelacion, Nombre, Telefono) VALUES (@solicitante_Id_Persona, @id_familiar, @id_parentesco, @nombre_fam, @telefono_fam)',
  saveEstudios: 'INSERT INTO Estudios (Tipo_Estudio, Especialidad, Calificacion_Media, Solicitantes_ID_Persona) VALUES (@tipo_estudio, @especialidad, @promedio, @solicitante_Id_Persona)',
  saveInfoLegal: 'INSERT INTO Datos_Legales (Servicio_Militar, Relacion_Justicia, Solicitantes_ID_Persona) VALUES (@servicio_militar, @relacion_justicia, @solicitante_Id_Persona)',
  saveInfoSanitaria: 'INSERT INTO Datos_Sanitarios (ID_Persona, Informacion_Sanitaria, Solicitantes_ID_Persona) VALUES (@id_persona_San, @info_sanitaria, @solicitante_id_Persona)',
  saveExperienciaLaboral: "INSERT INTO Experiencia_Laboral (ID_Solicitante, Empresa, Puesto, Anios_Experiencia, Solicitantes_ID_Persona) VALUES (@id_persona, @empresa, @puesto, @anios_experiencia, @solicitante_Id_Persona)",
  getAllSolEmpleo: 'SELECT * FROM Solicitudes_Empleo',
  saveSolicitudesTipo: 'INSERT INTO Solicitudes_Tipos (ID_Solicitud, ID_Solicitante, ID_Puesto, TipoPuesto) VALUES (@ID_Solicitud, @ID_Solicitante, @ID_Puesto, , @Tipo_Empleo)',
  saveReqEmpleo: 'INSERT INTO Requisitos_Empleo (ID_Solicitante, Tipo_Puesto, Condiciones, Salario, Solicitantes_ID_Persona) VALUES (@id_solicitante, @tipo_puesto, @condiciones, @salario, @id_solicitantes)'
};