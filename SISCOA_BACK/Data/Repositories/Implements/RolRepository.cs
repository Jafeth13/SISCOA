using Data.Data;
using Entities.Models;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace Repositories.Repositories.Implements
{
    public class RolRepository : GenericRepository<TSISCOA_Rol>, IRolRepository
    {
        private readonly SISCOA_Context siscoa_context;
        public RolRepository(SISCOA_Context siscoa_context) : base(siscoa_context)
        {
            this.siscoa_context = siscoa_context;
        }
        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            var flag = await siscoa_context.RolPermisos.AnyAsync(x => x.ID == id);
            flag = await siscoa_context.Usuarios.AnyAsync(x => x.ID == id);
            return flag;
        }
        public async Task<bool> VerifyPrivilegesRolUser(TSISCOA_Rol rol, string permit)
        {
            var rolPermitsList = await siscoa_context.RolPermisos.Where(x => x.FK_SISCOA_Rol_SISCOA_RolPermiso == rol.ID).ToListAsync();
            foreach (var item in rolPermitsList)
            {
                item.TSISCOA_Permiso = await siscoa_context.Permisos.FirstOrDefaultAsync(x => x.ID == item.FK_SISCOA_Permiso_SISCOA_RolPermiso);
                if (item.TSISCOA_Permiso.TC_Nombre == permit)
                {
                    return true;
                }
            }
            return false;
        }       
    }
}
