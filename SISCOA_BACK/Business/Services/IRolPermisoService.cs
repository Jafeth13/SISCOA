using Entities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services
{
    public interface IRolPermisoService : IGenericService<TSISCOA_RolPermiso>
    {
        Task<IEnumerable<TSISCOA_RolPermiso>> GetAll();
    }
}
