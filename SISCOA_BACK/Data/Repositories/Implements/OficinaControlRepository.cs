using Data.Data;
using Entities.Models;
using Entities.Util;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
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

        public async Task<IEnumerable<TSISCOA_DataGraphics>> GetDataGraphics_ControlsByStates()
        {
            var list = await siscoa_context.OficinaControles
                .GroupBy(x => x.FK_TN_ESTADO_SISCOA_OficinaControl)
                .Select(x => new TSISCOA_DataGraphics
                {
                    ID_State = x.Key,
                    Name = x.FirstOrDefault().TSISCOA_Estado.TC_Nombre,
                    Value = x.Count()
                }).ToListAsync();
            return list;
        }
    }
}
