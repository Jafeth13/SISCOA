using Data.Data;
using Entities.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Threading.Tasks;

namespace Repositories.Repositories.Implements
{
    public class OficinaControlRepository : GenericRepository<TSISCOA_OficinaControl>, IOficinaControlRepository
    {
        private readonly SISCOA_Context siscoa_context;
        public OficinaControlRepository(SISCOA_Context siscoa_context) : base(siscoa_context)
        {
            this.siscoa_context = siscoa_context;
        }
        public new async Task<IEnumerable<TSISCOA_OficinaControl>> GetAll()
        {
            var list = await siscoa_context.OficinaControles.ToListAsync();
            foreach (var item in list)
            {
                item.TSISCOA_Oficina = await siscoa_context.Oficinas.FirstOrDefaultAsync(x => x.ID == item.FK_SISCOA_OFICINA_SISCOA_OficinaControl);
                item.TSISCOA_Control = await siscoa_context.Controles.FirstOrDefaultAsync(x => x.ID == item.FK_SISCOA_CONTROL_SISCOA_OficinaControl);
            }
            return list;
        }
    }
}
