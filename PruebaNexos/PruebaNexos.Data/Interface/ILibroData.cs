using PruebaNexos.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PruebaNexos.Data.Interface
{
    public interface ILibroData
    {
        Task<Libro> Post(Libro libro);
        Task<bool> Delete(Libro libro);
        Task<Libro> Update(Libro libro);
        Task<Libro> GetByLibro(Guid id);
        Task<IEnumerable<Libro>> GetByAutor(Guid id);
        Task<IEnumerable<Libro>> GetByEditorial(Guid id);
    }
}
