using RockPaperScissors.Models;
using System;
using System.Data.SqlClient;
using System.Threading;

namespace RockPaperScissors.Repositories
{
    public class ResultsRepository
    {
        string _connection = "Server=localhost;Database=Database;Trusted_Connection=True;";


        public ResultDTO ReadResult(int id)
        {
            string query = $"SELECT * FROM dbo.Results AS R WHERE R.Id = {id}";

            Thread.Sleep(500);

            ResultDTO result = null;
            using (var connection = new SqlConnection(_connection))
            {
                var command = new SqlCommand(query, connection);
                connection.Open();

                var reader = command.ExecuteReader();
                reader.Read();
                result = new ResultDTO
                {
                    PlayerMove = reader.GetInt32(1),
                    CompMove = reader.GetInt32(2),
                    Win = reader[3] as bool?
                };
            }
            return result;
        }

        public int CreateResult(ResultDTO resultToAdd)
        {
            string winBit = "NULL";
            if (resultToAdd.Win.HasValue)
            {
                winBit = (resultToAdd.Win.Value) ? "1" : "0";
            }

            string query = $"INSERT INTO dbo.Results(PlayerMove,CompMove,PlayerWon)OUTPUT inserted.Id VALUES({resultToAdd.PlayerMove},{resultToAdd.CompMove},{winBit}); ";

            int result;
            using (var connection = new SqlConnection(_connection))
            {
                var command = new SqlCommand(query, connection);
                connection.Open();

                var reader = command.ExecuteReader();
                reader.Read();
                result = reader.GetInt32(0);
            }
            return result;
        }
    }
}
