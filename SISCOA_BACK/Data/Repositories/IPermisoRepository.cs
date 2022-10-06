using Entities.Models;
using System.Threading.Tasks;

namespace Repositories.Repositories
{
    public interface IPermisoRepository : IGenericRepository<TSISCOA_Permiso>
    {
        Task<bool> DeletedCheckOnEntity(int id);
    }
}
