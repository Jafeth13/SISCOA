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
           ,[FK_TN_Estado]
           ,[FK_TN_Periodo])
     VALUES
           ('Asistencia','Debe presentar una firma digital con la fecha y hora de asistencia',1,1),
           ('Revision','Comprobante de revision firmado',1,1)
GO
--SELECT * FROM [CONTROL].[TSISCOA_Control]
GO
INSERT INTO [USUARIO].[TSISCOA_Rol]
           ([TC_Nombre])
     VALUES
           ('Administrador')
GO
--SELECT * FROM [USUARIO].[TSISCOA_Rol]
GO
INSERT INTO [OFICINA].[TSISCOA_Oficina]
           ([TC_CodigoOficina]
           ,[TC_Nombre]
           ,[TC_Institucion]
           ,[TB_EstadoActividad])
     VALUES
           ('AB123','Cartago','OIJ',1)
GO
--SELECT * FROM [OFICINA].[TSISCOA_Oficina]
