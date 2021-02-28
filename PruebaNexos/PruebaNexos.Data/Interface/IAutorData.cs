using PruebaNexos.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PruebaNexos.Data.Interface
{
    public interface IAutorData
    {
        Task<Autor> Post(Autor autor);
        Task<bool> Delete(Autor autor);
        Task<Autor> Update(Autor autor);
        Task<Autor> GetByAutor(Guid id);
        Task<IEnumerable<Autor>> GetByEditorial(Guid id);
      
    }
}
