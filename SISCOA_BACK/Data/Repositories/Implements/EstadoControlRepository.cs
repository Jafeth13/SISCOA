using Data.Data;
using Entities.Models;
using Entities.Util;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace Repositories.Repositories.Implements
{
    public class EstadoControlRepository : GenericRepository<TSISCOA_EstadoControl>, IEstadoControlRepository
    {
        private readonly SISCOA_Context siscoa_context;
        public EstadoControlRepository(SISCOA_Context siscoa_context) : base(siscoa_context)
        {
            this.siscoa_context = siscoa_context;
        }
        public new async Task<IEnumerable<TSISCOA_EstadoControl>> GetAll()
        {
            var list = await siscoa_context.EstadoControles.ToListAsync();
            foreach (var item in list)
            {
                item.TSISCOA_Estado = await siscoa_context.Estados.FirstOrDefaultAsync(x => x.ID == item.FK_TN_ESTADO_SISCOA_EstadoControl);
                item.TSISCOA_Control = await siscoa_context.Controles.FirstOrDefaultAsync(x => x.ID == item.FK_TN_CONTROL_SISCOA_EstadoControl);
            }
            return list;
        }

        public async Task<IEnumerable<TSISCOA_DataGraphics>> GetDataGraphics_ControlsByState()
        {

            var listData = await siscoa_context.EstadoControles
                .GroupBy(x => x.FK_TN_ESTADO_SISCOA_EstadoControl)
                .Select(x => new TSISCOA_DataGraphics
                {
                    ID_State = x.Key,
                    Name = x.FirstOrDefault().TSISCOA_Estado.TC_Nombre,
                    Value = x.Count()
                }).ToListAsync();

            return listData;
        }

        public Task<IEnumerable<TSISCOA_Control>> GetDataGraphics_ControlsNotAssigned()
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<TSISCOA_Control>> GetDataGraphics_ControlsSlopes()
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<TSISCOA_Control>> GetDataGraphics_ControlsWithExtraDays()
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<TSISCOA_Control>> GetDataTable_ControlsByState()
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<TSISCOA_Control>> GetDataTable_ControlsNotAssigned()
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<TSISCOA_Control>> GetDataTable_ControlsSlopes()
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<TSISCOA_Control>> GetDataTable_ControlsWithExtraDays()
        {
            throw new System.NotImplementedException();
        }
    }
}
