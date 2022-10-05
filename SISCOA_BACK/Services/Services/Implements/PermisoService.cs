using Entities.Models;
using Repositories.Repositories;

namespace Services.Services.Implements
{
    public class PermisoService : GenericService<TSISCOA_Permiso>
    {
        public PermisoService(IPermisoRepository permisoRepository) : base(permisoRepository)
        {
        }
    }
}
