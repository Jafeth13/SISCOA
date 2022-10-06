using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class RolPermisoService : GenericService<TSISCOA_RolPermiso>, IRolPermisoService
    {
        public RolPermisoService(IRolPermisoRepository rolPermisoRepository) : base(rolPermisoRepository)
        {
        }
    }
}
