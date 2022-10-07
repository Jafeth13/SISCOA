using Entities.Models;
using System.Threading.Tasks;

namespace Repositories.Repositories
{
    public interface IOficinaRepository : IGenericRepository<TSISCOA_Oficina>
    {
        Task<bool> DeletedCheckOnEntity(int id);
    }
}
