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
           ('Asistencia','Debe presentar una firma digital con la fecha y hora de asistencia',1,6),
           ('Revision','Comprobante de revision firmado',1,6)
GO
--SELECT * FROM [CONTROL].[TSISCOA_Control]
