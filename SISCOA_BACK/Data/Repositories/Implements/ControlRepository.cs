using Data.Data;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace Repositories.Repositories.Implements
{
    public class ControlRepository : GenericRepository<TSISCOA_Control>, IControlRepository
    {
        private readonly SISCOA_Context siscoa_context;
        public ControlRepository(SISCOA_Context siscoa_context) : base(siscoa_context)
        {
            this.siscoa_context = siscoa_context;
        }
        public new async Task<IEnumerable<TSISCOA_Control>> GetAll()
        {
            var list = await siscoa_context.Controles.ToListAsync();
            foreach (var item in list)
            {
                item.TSISCOA_Estado = await siscoa_context.Estados.FirstOrDefaultAsync(x => x.ID == item.FK_TN_Estado);
                item.TSISCOA_Periodo = await siscoa_context.Periodos.FirstOrDefaultAsync(x => x.ID == item.FK_TN_Periodo);
            }
            return list;
        }
        public new async Task<TSISCOA_Control> GetById(int id)
        {
            var list = await siscoa_context.Set<TSISCOA_Control>().FindAsync(id);

            if (list != null)
            {
                list.TSISCOA_Estado = await siscoa_context.Estados.FirstOrDefaultAsync(x => x.ID == list.FK_TN_Estado);
                list.TSISCOA_Periodo = await siscoa_context.Periodos.FirstOrDefaultAsync(x => x.ID == list.FK_TN_Periodo);              
            }
            return list;
        }
        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            var flag = await siscoa_context.OficinaControles.AnyAsync(x => x.ID == id);
            return flag;
        }

        public async Task<IEnumerable<TSISCOA_Control>> GetControlesByOficina(int id)
        {
            var temp = await siscoa_context.OficinaControles.ToListAsync();
            if (temp != null)
            {
                var list = new List<TSISCOA_Control>();
                foreach (var item in temp)
                {
                    if (item.FK_SISCOA_OFICINA_SISCOA_OficinaControl == id)
                    {
                        list = await siscoa_context.Controles.Where(x => x.ID == item.FK_SISCOA_CONTROL_SISCOA_OficinaControl).ToListAsync();
                    }
                }
                return list;
            }
            return null;
        }
    }
}
