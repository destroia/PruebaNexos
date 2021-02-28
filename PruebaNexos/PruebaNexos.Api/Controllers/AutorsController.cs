using Microsoft.AspNetCore.Mvc;
using PruebaNexos.Data.Interface;
using PruebaNexos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PruebaNexos.Api.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class AutorsController : ControllerBase
    {
        readonly IAutorData Repo;
        public AutorsController(IAutorData repo)
        {
            Repo = repo;
        }
        // GET: api/<AutorsController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<AutorsController>/5
        [HttpGet("{id}")]
        public async Task<IEnumerable<Autor>> Get(Guid id)
        {
            return await Repo.GetByEditorial(id);
        }

        [HttpPost]
        public async Task<Autor> Update(Autor autor)
        {
            return await Repo.Update(autor);
        }
        [HttpPost]
        public async Task<bool> Delete(Autor autor)
        {
            return await Repo.Delete(autor);
        }
        // POST api/<AutorsController>
        [HttpPost]
        public async Task<Autor> Post(Autor autor)
        {
            return await Repo.Post(autor);
        }

        // PUT api/<AutorsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AutorsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
