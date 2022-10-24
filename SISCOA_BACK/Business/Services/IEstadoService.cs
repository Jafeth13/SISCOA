using Entities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services
{
    public interface IEstadoService : IGenericService<TSISCOA_Estado>
    {
        Task<IEnumerable<TSISCOA_Estado>> GetAll();
        Task<bool> DeletedCheckOnEntity(int id);
    }
}
