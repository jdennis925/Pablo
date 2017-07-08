using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using RockPaperScissors.Models;
using RockPaperScissors.Managers;

namespace RockPaperScissors.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        PlayManager _manager = new PlayManager();

        // GET api/values
        [HttpGet]
        public IEnumerable<MoveDTO> Get()
        {
            return new List<MoveDTO>
            {
                new MoveDTO
                {
                    Name = "Rock",
                }
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ResultDTO Get(int id)
        {
            var result = _manager.GetPlay(id);
            return result;
        }

        // POST api/values
        [HttpPost]
        public int Post([FromBody]MoveDTO value)
        {
            return _manager.CreatePlay(value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, MoveDTO value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}