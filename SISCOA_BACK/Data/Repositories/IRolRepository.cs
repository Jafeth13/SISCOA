using Entities.Models;
using System.Threading.Tasks;

namespace Repositories.Repositories
{
    public interface IRolRepository : IGenericRepository<TSISCOA_Rol>
    {
        Task<bool> DeletedCheckOnEntity(int id);
    }
}
