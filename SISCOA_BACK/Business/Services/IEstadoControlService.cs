using Entities.Models;
using Entities.Util;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services
{
    public interface IEstadoControlService : IGenericService<TSISCOA_EstadoControl>
    {
        Task<IEnumerable<TSISCOA_DataGraphics>> GetDataGraphics_ControlsByState();
    }
}
