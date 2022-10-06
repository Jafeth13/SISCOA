using Entities.Models;
using System.Threading.Tasks;

namespace Repositories.Repositories
{
    public interface IControlRepository : IGenericRepository<TSISCOA_Control>
    {
        Task<bool> DeletedCheckOnEntity(int id);
    }
}
