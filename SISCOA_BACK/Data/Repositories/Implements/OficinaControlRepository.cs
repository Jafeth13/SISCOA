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

        public async Task<IEnumerable<TSISCOA_DataGraphics>> GetDataGraphics_ControlsSlopes()
        {
            var list = await siscoa_context.OficinaControles
                .Where(x => x.TSISCOA_Estado.TC_Nombre == "Pendiente")
                .GroupBy(x => x.FK_TN_PERIODO_SISCOA_OficinaControl)
                .Select(x => new TSISCOA_DataGraphics
                {
                    ID_State = x.Key,
                    //elements distints
                    Name = x.FirstOrDefault().TSISCOA_Periodo.TC_Nombre,
                    Value = x.Count()
                }).ToListAsync();
            return list;
        }

        public async Task<IEnumerable<TSISCOA_OficinaControl>> GetOfficeControlByIdOffice(int id)
        {
            var list = await siscoa_context.OficinaControles
                .Where(x => x.FK_TN_OFICINA_SISCOA_OficinaControl == id)
                .ToListAsync();
            return list;
        }
    }
}
