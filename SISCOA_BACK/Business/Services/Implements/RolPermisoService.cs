using Entities.Models;
using Repositories.Repositories;

namespace Services.Services.Implements
{
    public class RolPermisoService : GenericService<TSISCOA_RolPermiso>
    {
        public RolPermisoService(IRolPermisoRepository rolPermisoRepository) : base(rolPermisoRepository)
        {
        }
    }
}
