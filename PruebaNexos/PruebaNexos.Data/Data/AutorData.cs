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
    public class AutorData : IAutorData
    {
        readonly NexosDBContext DB;

        public AutorData(NexosDBContext db)
        {
            DB = db;
        }
        public async Task<bool> Delete(Autor autor)
        {
            try
            {
                DB.Autores.Remove(autor);
                await DB.SaveChangesAsync();

                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public async Task<Autor> GetByAutor(Guid id)
        {
            return await DB.Autores.FindAsync(id);
        }

        public async Task<IEnumerable<Autor>> GetByEditorial(Guid id)
        {
            return await DB.Autores.Where(x => x.EditorialId == id).ToArrayAsync();
        }

        public async Task<Autor> Post(Autor autor)
        {
            try
            {
                autor.Id = Guid.NewGuid();
                await DB.Autores.AddAsync(autor);
                await DB.SaveChangesAsync();

                return autor;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public async Task<Autor> Update(Autor autor)
        {
            try
            {
                
                DB.Autores.Update(autor);
                await DB.SaveChangesAsync();

                return autor;
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
