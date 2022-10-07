using Data.Data;
using Entities.Models;
using System.Data.Entity;
using System.Threading.Tasks;

namespace Repositories.Repositories.Implements
{
    public class RolPermisoRepository : GenericRepository<TSISCOA_RolPermiso>, IRolPermisoRepository
    {
        public RolPermisoRepository(SISCOA_Context siscoa_contex) : base(siscoa_contex)
        {
        }
    }
}
