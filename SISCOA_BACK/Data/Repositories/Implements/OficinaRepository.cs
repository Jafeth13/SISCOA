using Data.Data;
using Entities.Models;
using System.Data.Entity;
using System.Threading.Tasks;

namespace Repositories.Repositories.Implements
{
    public class OficinaRepository : GenericRepository<TSISCOA_Oficina>, IOficinaRepository
    {
        private readonly SISCOA_Context siscoa_context;
        public OficinaRepository(SISCOA_Context siscoa_context) : base(siscoa_context)
        {
            this.siscoa_context = siscoa_context;
        }

        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            var flag = await siscoa_context.OficinaControles.AnyAsync(x => x.ID == id);
            flag = await siscoa_context.Usuarios.AnyAsync(x => x.ID == id);
            return flag;
        }
    }
}
