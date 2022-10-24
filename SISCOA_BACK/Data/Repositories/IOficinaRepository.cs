using Entities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repositories.Repositories
{
    public interface IOficinaRepository : IGenericRepository<TSISCOA_Oficina>
    {
        Task<bool> DeletedCheckOnEntity(int id);
        Task<IEnumerable<TSISCOA_Oficina>> GetAll();
    }
}
