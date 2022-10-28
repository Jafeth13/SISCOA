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
        public new async Task<IEnumerable<TSISCOA_RolPermiso>> GetAll()
        {
            var list = await siscoa_context.RolPermisos.ToListAsync();
            foreach (var item in list)
            {
                item.TSISCOA_Rol = await siscoa_context.Roles.FirstOrDefaultAsync(x => x.ID == item.FK_SISCOA_Rol_SISCOA_RolPermiso);
                item.TSISCOA_Permiso = await siscoa_context.Permisos.FirstOrDefaultAsync(x => x.ID == item.FK_SISCOA_Permiso_SISCOA_RolPermiso);
            }
            return list;
        }
    }
}
