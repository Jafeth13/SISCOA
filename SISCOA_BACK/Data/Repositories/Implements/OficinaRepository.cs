using Data.Data;
using Entities.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
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

        public async Task<IEnumerable<TSISCOA_Oficina>> GetOficinasByControl(int id)
        {
            var temp = await siscoa_context.OficinaControles.ToListAsync();      
            if (temp != null) {
                var list = new List<TSISCOA_Oficina>();
                foreach (var item in temp)
                {
                    if (item.FK_SISCOA_CONTROL_SISCOA_OficinaControl == id) {
                        list = await siscoa_context.Oficinas.Where(x => x.ID == item.FK_SISCOA_OFICINA_SISCOA_OficinaControl).ToListAsync();
                    }
                }
                return null;
            }
            return null;
        }
    }
}
