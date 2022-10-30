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
        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            var flag = await siscoa_context.OficinaControles.AnyAsync(x => x.FK_TN_CONTROL_SISCOA_OficinaControl == id);
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
                    if (item.FK_TN_OFICINA_SISCOA_OficinaControl == id)
                    {
                        var temp2 = await siscoa_context.Controles.Where(x => x.ID == item.FK_TN_CONTROL_SISCOA_OficinaControl).ToListAsync();
                        list.Add(temp2[0]);
                    }
                }
                return list;
            }
            return null;
        }
    }
}
