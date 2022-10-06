using Data.Data;
using Entities.Models;
using System.Data.Entity;
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
    }
}
