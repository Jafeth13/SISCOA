using Entities.Models;
using System.Threading.Tasks;

namespace Services.Services
{
    public interface IRolService : IGenericService<TSISCOA_Rol>
    {
        Task<bool> DeletedCheckOnEntity(int id);
    }
}
