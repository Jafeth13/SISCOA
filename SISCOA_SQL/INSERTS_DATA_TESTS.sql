USE [SISCOA]
GO

INSERT INTO [CONTROL].[TSISCOA_Estado]
           ([TC_Nombre])
     VALUES
           ('Pendiente'),
		   ('Completado')
GO

--SELECT [TC_Nombre] FROM [CONTROL].[TSISCOA_Estado]
