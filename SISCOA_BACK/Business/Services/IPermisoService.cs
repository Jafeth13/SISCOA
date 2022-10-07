using Entities.Models;
using System.Threading.Tasks;

namespace Services.Services
{
    public interface IPermisoService : IGenericService<TSISCOA_Permiso>
    {
        Task<bool> DeletedCheckOnEntity(int id);
    }
}
