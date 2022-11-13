USE [SISCOA]

GO
INSERT INTO [CONTROL].[TSISCOA_Estado]
           ([TC_Nombre])
     VALUES
           ('Pendiente'),
		   ('Completado'),
		   ('Atrasado')
GO
--SELECT * FROM [CONTROL].[TSISCOA_Estado]
GO
INSERT INTO [CONTROL].[TSISCOA_Periodo]
			([TC_Nombre], [TF_FechaInicio], [TF_FechaFin])
		VALUES
			('Noviembre', '2022-11-01', '2022-11-29'),
			('Diciembre', '2022-12-01', '2022-12-29'),
			('Enero', '2023-01-01', '2023-01-29')
GO
--SELECT * FROM [CONTROL].[TSISCOA_Periodo]
GO
INSERT INTO [CONTROL].[TSISCOA_Control]
           ([TC_Nombre]
           ,[TC_DescriptionDocumentacionEvidencia])
     VALUES
           ('Asistencia','Debe presentar una firma digital con la fecha y hora de asistencia'),
           ('Revision','Comprobante de revision firmado'),
		   ('Prestamo','Comprobante de prestamo firmado')
GO
--SELECT * FROM [CONTROL].[TSISCOA_Control]
GO
INSERT INTO [OFICINA].[TSISCOA_Oficina]
           ([TC_CodigoOficina]
           ,[TC_Nombre]
           ,[TC_Institucion]
           ,[TB_EstadoActividad])
     VALUES
           ('AB123','Cartago','OIJ',1),
           ('CD333','San Jose','OIJ',1),
           ('BG553','Heredia','OIJ',1),
           ('RU777','Puntarenas','OIJ',1)
GO
--SELECT * FROM [OFICINA].[TSISCOA_Oficina]
GO
INSERT INTO [CONTROL].[TSISCOA_OficinaControl]
           ([TC_Comentario]
           ,[FK_TN_CONTROL_SISCOA_OficinaControl]
           ,[FK_TN_OFICINA_SISCOA_OficinaControl]
           ,[FK_TN_ESTADO_SISCOA_OficinaControl]
           ,[FK_TN_PERIODO_SISCOA_OficinaControl])
     VALUES
           ('',1,1,1,1),
           ('',2,1,2,1),
           ('',3,1,2,2),
           ('',2,2,2,2),
           ('',3,3,1,1),
           ('',1,4,2,2),
		   ('',1,3,1,2)

INSERT INTO [CONTROL].[TSISCOA_OficinaControl]
           ([TC_Comentario]
           ,[FK_TN_CONTROL_SISCOA_OficinaControl]
           ,[FK_TN_OFICINA_SISCOA_OficinaControl]
           ,[FK_TN_ESTADO_SISCOA_OficinaControl]
           ,[FK_TN_PERIODO_SISCOA_OficinaControl]
		   ,[TF_FechaFin_DiasExtra])
     VALUES
		   ('',2,4,1,2,GETDATE())
GO
/**
SELECT * FROM [CONTROL].[TSISCOA_Control]
SELECT * FROM [OFICINA].[TSISCOA_Oficina]
SELECT * FROM [CONTROL].[TSISCOA_Estado]
SELECT * FROM [CONTROL].[TSISCOA_Periodo]
SELECT * FROM [CONTROL].[TSISCOA_OficinaControl]
**/


GO
INSERT INTO [USUARIO].[TSISCOA_Rol]
           ([TC_Nombre])
     VALUES
           ('Administrador del Sistema'),
		   ('Jefatura de Supervisores'),
		   ('Colaborador de Supervisor'),
		   ('Jefatura Oficina'),
		   ('Colaborador Oficina')
GO
--SELECT * FROM [USUARIO].[TSISCOA_Rol]
GO
INSERT INTO [USUARIO].[TSISCOA_Permiso]
           ([TC_Nombre])
     VALUES
           ('Puede consultar Registros'),
           ('Puede actualizar Registros'),

           ('Puede eliminar Registros'),
           ('Puede crear Registros'),

		   ('Puede consultar Graficos'),
		   ('Puede gestionar Catalogos'),

		   ('Puede consultar Actividades'),
		   ('Puede consultar Errores')

GO
--SELECT * FROM [USUARIO].[TSISCOA_Permiso]
GO
INSERT INTO [USUARIO].[TSISCOA_RolPermiso]
           ([FK_SISCOA_Rol_SISCOA_RolPermiso]
           ,[FK_SISCOA_Permiso_SISCOA_RolPermiso])
     VALUES
	 --Administrador del Sistema
           (1,1),
           (1,2),
           (1,3),
           (1,4),
           (1,5),
           (1,6),
           (1,7),
           (1,8),
	--Jefatura de Supervisores
           (2,1),
           (2,2),
           (2,3),
           (2,4),
           (2,5),
	--Colaborador de Supervisor
           (3,1),
           (3,2),
           (3,3),
           (3,4),
		   (2,5),
	--Jefatura Oficina
           (4,1),
           (4,2),
	--Colaborador Oficina
           (5,1),
           (5,2)
GO
--SELECT * FROM [USUARIO].[TSISCOA_RolPermiso]
GO
INSERT INTO [USUARIO].[TSISCOA_Usuario]
           ([TC_Identificacion]
           ,[TC_Nombre]
           ,[TC_PrimerApellido]
           ,[TC_SegundoApellido]
           ,[TV_Contrasenna]
           ,[TC_Correo]
           ,[FK_SISCOA_Oficina_SISCOA_Usuario]
           ,[FK_SISCOA_Rol_SISCOA_Usuario])
     VALUES
			--User: 12345678, password: 12345678
           ('12345678','Nombre','Apellido1','Apellido2','ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f','nombreapellido@gmail.com',1,1),
           --User2:11112222, password: 12345678
		   ('11112222','Persona2','Apellido1','Apellido2','ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f','nombre2apellido2@gmail.com',1,5)
GO
--SELECT * FROM [USUARIO].[TSISCOA_Usuario]
GO
INSERT INTO [SISTEMA].[TSISCOA_Actividad]
           ([TC_Description]
           ,[TC_Accion]
           ,[FK_ID_UsuarioActivo]
           ,[TF_FechaAccion])
     VALUES
           ('Accion de prueba','Prueba',1,GETDATE())
GO
--SELECT * FROM [SISTEMA].[TSISCOA_Actividad]
GO
INSERT INTO [SISTEMA].[TSISCOA_Error]
           ([TC_Description]
           ,[TC_UltimaAccion]
           ,[FK_ID_UsuarioActivo]
           ,[TF_FechaError])
     VALUES
           ('Error de prueba','Prueba',1,GETDATE())
GO
--SLECT * FROM [SISTEMA].[TSISCOA_Error]

