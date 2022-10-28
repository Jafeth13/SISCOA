using Entities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repositories.Repositories
{
    public interface IControlRepository : IGenericRepository<TSISCOA_Control>
    {
        Task<bool> DeletedCheckOnEntity(int id);
        Task<IEnumerable<TSISCOA_Control>> GetControlesByOficina(int id);
        Task<IEnumerable<TSISCOA_Control>> GetDataGraphics_ControlsByState();
        Task<IEnumerable<TSISCOA_Control>> GetDataTable_ControlsByState();
        Task<IEnumerable<TSISCOA_Control>> GetDataGraphics_ControlsSlopes();
        Task<IEnumerable<TSISCOA_Control>> GetDataTable_ControlsSlopes();
        Task<IEnumerable<TSISCOA_Control>> GetDataGraphics_ControlsNotAssigned();
        Task<IEnumerable<TSISCOA_Control>> GetDataTable_ControlsNotAssigned();
        Task<IEnumerable<TSISCOA_Control>> GetDataGraphics_ControlsWithExtraDays();
        Task<IEnumerable<TSISCOA_Control>> GetDataTable_ControlsWithExtraDays();
    }
}
