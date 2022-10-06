using Data.Data;
using Entities.Models;
using System.Data.Entity;
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
    }
}
