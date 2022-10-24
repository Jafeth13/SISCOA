using Entities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services
{
    public interface IPermisoService : IGenericService<TSISCOA_Permiso>
    {
        Task<IEnumerable<TSISCOA_Permiso>> GetAll();

        Task<bool> DeletedCheckOnEntity(int id);
    }
}
