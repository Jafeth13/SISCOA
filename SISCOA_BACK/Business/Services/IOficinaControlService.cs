using Entities.Models;
using Entities.Util;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services
{
    public interface IOficinaControlService : IGenericService<TSISCOA_OficinaControl>
    {
        Task<IEnumerable<TSISCOA_DataGraphics>> GetDataGraphics_ControlsByStates();
    }
}
