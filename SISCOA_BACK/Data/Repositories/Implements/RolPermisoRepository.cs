using Data.Data;
using Entities.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Threading.Tasks;

namespace Repositories.Repositories.Implements
{
    public class RolPermisoRepository : GenericRepository<TSISCOA_RolPermiso>, IRolPermisoRepository
    {
        private readonly SISCOA_Context siscoa_context;
        public RolPermisoRepository(SISCOA_Context siscoa_contex) : base(siscoa_contex)
        {
            this.siscoa_context = siscoa_contex;
        }
    }
}
