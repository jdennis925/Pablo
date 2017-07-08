CREATE TABLE [dbo].[Results]
(
	[Id] INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	[PlayerMove] INT NOT NULL,
	[CompMove] INT NOT NULL,
	[PlayerWon] BIT
)
