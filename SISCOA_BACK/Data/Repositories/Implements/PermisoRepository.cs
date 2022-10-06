using Data.Data;
using Entities.Models;

namespace Repositories.Repositories.Implements
{
    public class PermisoRepository : GenericRepository<TSISCOA_Permiso>
    {
        public PermisoRepository(SISCOA_Context siscoa_contex) : base(siscoa_contex)
        {
        }
    }
}
