using Entities.Models;
using System.Threading.Tasks;

namespace Repositories.Repositories
{
    public interface IPeriodoRepository : IGenericRepository<TSISCOA_Periodo>
    {
        Task<bool> DeletedCheckOnEntity(int id);
    }
}
