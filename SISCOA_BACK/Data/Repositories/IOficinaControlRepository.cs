using Entities.Models;
using Entities.Util;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repositories.Repositories
{
    public interface IOficinaControlRepository : IGenericRepository<TSISCOA_OficinaControl>
    {
        Task<IEnumerable<TSISCOA_DataGraphics>> GetDataGraphics_ControlsByStates();
        Task<IEnumerable<TSISCOA_OficinaControl>> GetData_ControlsByStateLate();
        Task<IEnumerable<TSISCOA_DataGraphics>> GetDataGraphics_ControlsSlopes();
        Task<IEnumerable<TSISCOA_OficinaControl>> GetDataGraphicsTable_ControlsSlopes();
        Task<IEnumerable<TSISCOA_DataGraphics>> GetDataGraphics_ControlsWithExtraDays();
        Task<IEnumerable<TSISCOA_OficinaControl>> GetDataGraphicsTable_ControlsWithExtraDays();
        Task<IEnumerable<TSISCOA_OficinaControl>> GetOfficeControlByIdOffice(int id);
        Task<TSISCOA_OficinaControl> RestoreOficinaControlById(TSISCOA_OficinaControl entity);
    }
}
