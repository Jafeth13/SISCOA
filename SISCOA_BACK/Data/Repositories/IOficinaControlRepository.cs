using Entities.Models;
using Entities.Util;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repositories.Repositories
{
    public interface IOficinaControlRepository : IGenericRepository<TSISCOA_OficinaControl>
    {
        Task<IEnumerable<TSISCOA_DataGraphics>> GetDataGraphics_ControlsByStates();
        Task<IEnumerable<TSISCOA_DataGraphics>> GetDataGraphics_ControlsSlopes();
        Task<IEnumerable<TSISCOA_OficinaControl>> GetOfficeControlByIdOffice(int id);
    }
}
