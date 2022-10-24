﻿using Data.Data;
using Entities.Models;
using System.Collections.Generic;
using System.Data.Entity;
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
        public async Task<IEnumerable<TSISCOA_Control>> GetAll()
        {
            var list = await siscoa_context.Controles.ToListAsync();
            foreach (var item in list)
            {
                item.TSISCOA_Estado = await siscoa_context.Estados.FirstOrDefaultAsync(x => x.ID == item.FK_TN_Estado);
                item.TSISCOA_Periodo = await siscoa_context.Periodos.FirstOrDefaultAsync(x => x.ID == item.FK_TN_Periodo);
            }
            return list;
        }
        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            var flag = await siscoa_context.OficinaControles.AnyAsync(x => x.ID == id);
            return flag;
        }
    }
}
