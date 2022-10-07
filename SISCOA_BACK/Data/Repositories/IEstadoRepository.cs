using Entities.Models;
using System.Threading.Tasks;

namespace Repositories.Repositories
{
    public interface IEstadoRepository : IGenericRepository<TSISCOA_Estado>
    {
        Task<bool> DeletedCheckOnEntity(int id);
    }
}
