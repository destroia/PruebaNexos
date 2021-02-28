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
    public class LibrosController : ControllerBase
    {
        readonly ILibroData Repo;
        public LibrosController(ILibroData repo)
        {
            Repo = repo;
        }
        // GET: api/<LibrosController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<LibrosController>/5
        [HttpGet("{id}")]
        public async Task<IEnumerable<Libro>> Get(Guid id)
        {
            return await Repo.GetByAutor(id);
        }

        // POST api/<LibrosController>
        [HttpPost]
        public async Task<Libro> Post(Libro libro)
        {
            return await Repo.Post(libro);
        }

        [HttpPost]
        public async Task<Libro> Update(Libro libro)
        {
            return await Repo.Update(libro);
        }

        [HttpPost]
        public async Task<bool> Delete(Libro libro)
        {
            return await Repo.Delete(libro);
        }


    }
}
