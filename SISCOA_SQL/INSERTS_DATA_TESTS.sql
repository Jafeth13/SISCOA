USE [SISCOA]

GO
INSERT INTO [CONTROL].[TSISCOA_Estado]
           ([TC_Nombre])
     VALUES
           ('Pendiente'),
		   ('Completado')
GO
--SELECT * FROM [CONTROL].[TSISCOA_Estado]
GO
INSERT INTO [CONTROL].[TSISCOA_Periodo]
			([TC_Nombre], [TF_FechaInicio], [TF_FechaFin])
		VALUES
			('Noviembre', '2022-11-01', '2022-11-29'),
			('Diciembre', '2022-12-01', '2022-12-29')
GO
--SELECT * FROM [CONTROL].[TSISCOA_Periodo]
GO
INSERT INTO [CONTROL].[TSISCOA_Control]
           ([TC_Nombre]
           ,[TC_DescriptionDocumentacionEvidencia]
           ,[FK_TN_Periodo])
     VALUES
           ('Asistencia','Debe presentar una firma digital con la fecha y hora de asistencia',1),
           ('Revision','Comprobante de revision firmado',1),
		   ('Prestamo','Comprobante de prestamo firmado',1)
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
GO
/**
SELECT * FROM [CONTROL].[TSISCOA_Control]
SELECT * FROM [OFICINA].[TSISCOA_Oficina]
SELECT * FROM [CONTROL].[TSISCOA_Estado]
SELECT * FROM [CONTROL].[TSISCOA_Periodo]
**/
SELECT
*
FROM [CONTROL].[TSISCOA_OficinaControl]
WHERE [TSISCOA_OficinaControl].[FK_TN_ESTADO_SISCOA_OficinaControl] = 1
GROUP BY [FK_TN_ESTADO_SISCOA_OficinaControl]

GO
INSERT INTO [USUARIO].[TSISCOA_Rol]
           ([TC_Nombre])
     VALUES
           ('Administrador')
GO
--SELECT * FROM [USUARIO].[TSISCOA_Rol]
GO
INSERT INTO [USUARIO].[TSISCOA_Permiso]
           ([TC_Nombre])
     VALUES
           ('Puede consultar Actividades'),
           ('Puede consultar Controles'),
           ('Puede consultar Errores'),
           ('Puede consultar Estados'),
           ('Puede consultar Oficinas'),
           ('Puede consultar Periodos'),
           ('Puede consultar Permisos'),
           ('Puede consultar Roles'),
		   ('Puede consultar Usuarios'),

           ('Puede crear Actividades'),
           ('Puede crear Controles'),
           ('Puede crear Errores'),
           ('Puede crear Estados'),
           ('Puede crear Oficinas'),
           ('Puede crear Periodos'),
           ('Puede crear Permisos'),
           ('Puede crear Roles'),
		   ('Puede crear Usuarios'),

           ('Puede actualizar Actividades'),
           ('Puede actualizar Controles'),
           ('Puede actualizar Errores'),
           ('Puede actualizar Estados'),
           ('Puede actualizar Oficinas'),
           ('Puede actualizar Periodos'),
           ('Puede actualizar Permisos'),
           ('Puede actualizar Roles'),
		   ('Puede actualizar Usuarios'),

           ('Puede eliminar Actividades'),
           ('Puede eliminar Controles'),
           ('Puede eliminar Errores'),
           ('Puede eliminar Estados'),
           ('Puede eliminar Oficinas'),
           ('Puede eliminar Periodos'),
           ('Puede eliminar Permisos'),
           ('Puede eliminar Roles'),
		   ('Puede eliminar Usuarios')

GO
--SELECT * FROM [USUARIO].[TSISCOA_Permiso]
