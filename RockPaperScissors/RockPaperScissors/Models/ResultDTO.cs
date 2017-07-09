using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RockPaperScissors.Models
{
    public class ResultDTO
    {
        public int PlayerMove { get; set; }
        public int CompMove { get; set; }
        public bool? Win { get; set; }
        public int id { get; set; }
    }
}
