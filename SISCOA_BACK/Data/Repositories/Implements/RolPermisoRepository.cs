using Data.Data;
using Entities.Models;

namespace Repositories.Repositories.Implements
{
    public class RolPermisoRepository : GenericRepository<TSISCOA_RolPermiso>
    {
        public RolPermisoRepository(SISCOA_Context siscoa_contex) : base(siscoa_contex)
        {
        }
    }
}
