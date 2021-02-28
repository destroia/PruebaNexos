using PruebaNexos.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PruebaNexos.Data.Interface
{
    public interface IEditorialData
    {
        Task<Editorial> Post(Editorial editorial);
        Task<bool> Delete(Editorial editorial);
        Task<Editorial> Update(Editorial editorial);
        Task<IEnumerable<Editorial>> Get();
    }
}
