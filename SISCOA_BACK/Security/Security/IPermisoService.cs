using Entities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services
{
    public interface IPermisoService : IGenericService<TSISCOA_Permiso>
    {
        Task<bool> DeletedCheckOnEntity(int id);
        Task<IEnumerable<TSISCOA_Permiso>> GetPermisosByRol(int id);
    }
}
