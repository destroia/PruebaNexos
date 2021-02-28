using Microsoft.EntityFrameworkCore;
using PruebaNexos.Data.Interface;
using PruebaNexos.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PruebaNexos.Data.Data
{
    public class EditorialData : IEditorialData
    {
        readonly NexosDBContext DB;

        public EditorialData(NexosDBContext db)
        {
            DB = db;
        }

        public async  Task<bool> Delete(Editorial editorial)
        {
            try
            {
                DB.Editoriales.Remove(editorial);
                await DB.SaveChangesAsync();

                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public async Task<IEnumerable<Editorial>> Get()
        {
            return await DB.Editoriales.ToListAsync();
        }

        public async Task<Editorial> Post(Editorial editorial)
        {
            try
            {
                await DB.Editoriales.AddAsync(editorial);
                await DB.SaveChangesAsync();

                return editorial;
            }
            catch (Exception)
            {

                return null ;
            }
           
        }

        public async Task<Editorial> Update(Editorial editorial)
        {
            try
            {
                DB.Editoriales.Update(editorial);
                await DB.SaveChangesAsync();

                return editorial;
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
