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
    public class EditorialsController : ControllerBase
    {
        readonly IEditorialData Repo;
        public EditorialsController(IEditorialData repo)
        {
            Repo = repo;
        }
        // GET: api/<EditorialsController>
        [HttpGet]
        public async Task<IEnumerable<Editorial>> Get()
        {
            return await Repo.Get();
        }

        // GET api/<EditorialsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public async Task<Editorial> Update(Editorial editorial)
        {
            return await Repo.Update(editorial);
        }
        [HttpPost]
        public async Task<bool> Delete(Editorial editorial)
        {
            return await Repo.Delete(editorial);
        }
        // POST api/<EditorialsController>
        [HttpPost]
        public async Task<Editorial> Post(Editorial editorial)
        {
            return await Repo.Post(editorial);
        }

        // PUT api/<EditorialsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<EditorialsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
