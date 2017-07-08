using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RockPaperScissors.Models;
using System.Collections.Concurrent;
using RockPaperScissors.Repositories;

namespace RockPaperScissors.Managers
{
    public class PlayManager
    { 
        ResultsRepository _repo = new ResultsRepository();

        //todo: thread safe...

        public ResultDTO GetPlay(int id)
        {
            return _repo.ReadResult(id);
        }

        public int CreatePlay(MoveDTO playerMove)
        {
            var rand = new Random();
            var compMove = rand.Next(1, 4);

            bool? result = null;
            switch (compMove)
            {
                //Rock
                case 1:
                    if (playerMove.Id == 2)
                        result = true;
                    else if (playerMove.Id == 3)
                        result = false;
                    break;
                //Paper
                case 2:
                    if (playerMove.Id == 1)
                        result = false;
                    else if (playerMove.Id == 3)
                        result = true;
                    break;
                //Scissors
                case 3:
                    if (playerMove.Id == 1)
                        result = true;
                    else if (playerMove.Id == 2)
                        result = false;
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }

            var resultDTO = new ResultDTO { PlayerMove = playerMove.Id, CompMove = compMove, Win = result };
            return _repo.CreateResult(resultDTO);
        }
    }
}
