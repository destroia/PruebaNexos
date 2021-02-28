using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PruebaNexos.Data.Interface;
using PruebaNexos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PruebaNexos.Data.Data
{
    public class LibroData : ILibroData
    {
        readonly NexosDBContext DB;
        public LibroData(NexosDBContext db)
        {
            DB = db;
        }

        public async Task<bool> Delete(Libro libro)
        {
            try
            {
                DB.Libros.Remove(libro);
                await DB.SaveChangesAsync();

                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<IEnumerable<Libro>> GetByAutor(Guid id)
        {
            return await DB.Libros.Where(x => x.AutorId == id).ToArrayAsync();
        }

        public async Task<IEnumerable<Libro>> GetByEditorial(Guid id)
        {
            return await DB.Libros.Where(x => x.EditorialId == id).ToArrayAsync();
        }

        public async Task<Libro> GetByLibro(Guid id)
        {
            return await DB.Libros.FindAsync(id);
        }

        public async Task<Libro> Post(Libro libro)
        {
            try
            {
                var Edi = await DB.Editoriales.FindAsync(libro.EditorialId);
                if (Edi == null)
                {
                    return null;
                }
                if (Edi.MaxLibros == Edi.NumLibros)
                {
                    return null;
                }
                libro.Id = Guid.NewGuid();

                await DB.Libros.AddAsync(libro);
                await DB.SaveChangesAsync();

                return libro; ;
            }
            catch (Exception)
            {

                return null ;
            }
        }

        private ActionResult BadRequest()
        {
            throw new NotImplementedException();
        }

        public async Task<Libro> Update(Libro libro)
        {
            try
            {
                DB.Libros.Update(libro);
                await DB.SaveChangesAsync();

                return libro;
            }
            catch (Exception)
            {

                return null;
            }
        }
    }
}
