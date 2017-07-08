CREATE TABLE [dbo].[Result]
(
	[Id] INT NOT NULL PRIMARY KEY,
	[PlayerMove] INT NOT NULL,
	[CompMove] INT NOT NULL,
	[PlayerWon] BIT
)
