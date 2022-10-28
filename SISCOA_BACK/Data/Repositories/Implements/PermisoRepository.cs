using Data.Data;
using Entities.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace Repositories.Repositories.Implements
{
    public class PermisoRepository : GenericRepository<TSISCOA_Permiso>, IPermisoRepository
    {
        private readonly SISCOA_Context siscoa_context;
        public PermisoRepository(SISCOA_Context siscoa_context) : base(siscoa_context)
        {
            this.siscoa_context = siscoa_context;
        }
        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            var flag = await siscoa_context.RolPermisos.AnyAsync(x => x.ID == id);
            return flag;
        }

        public async Task<IEnumerable<TSISCOA_Permiso>> GetPermisosByRol(int id)
        {
            var temp = await siscoa_context.RolPermisos.ToListAsync();
            if (temp != null)
            {
                var list = new List<TSISCOA_Permiso>();
                foreach (var item in temp)
                {
                    if (item.FK_SISCOA_Rol_SISCOA_RolPermiso == id)
                    {
                        list = await siscoa_context.Permisos.Where(x => x.ID == item.FK_SISCOA_Permiso_SISCOA_RolPermiso).ToListAsync();
                    }
                }
                return list;
            }
            return null;
        }
    }
}
