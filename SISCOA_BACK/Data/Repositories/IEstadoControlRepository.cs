using Entities.Models;
using Entities.Util;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repositories.Repositories
{
    public interface IEstadoControlRepository : IGenericRepository<TSISCOA_EstadoControl>
    {
        Task<IEnumerable<TSISCOA_DataGraphics>> GetDataGraphics_ControlsByState();
        Task<IEnumerable<TSISCOA_Control>> GetDataTable_ControlsByState();
        Task<IEnumerable<TSISCOA_Control>> GetDataGraphics_ControlsSlopes();
        Task<IEnumerable<TSISCOA_Control>> GetDataTable_ControlsSlopes();
        Task<IEnumerable<TSISCOA_Control>> GetDataGraphics_ControlsNotAssigned();
        Task<IEnumerable<TSISCOA_Control>> GetDataTable_ControlsNotAssigned();
        Task<IEnumerable<TSISCOA_Control>> GetDataGraphics_ControlsWithExtraDays();
        Task<IEnumerable<TSISCOA_Control>> GetDataTable_ControlsWithExtraDays();
    }
}
