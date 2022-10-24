using Entities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services
{
    public interface IOficinaService : IGenericService<TSISCOA_Oficina>
    {
        Task<IEnumerable<TSISCOA_Oficina>> GetAll();
        Task<bool> DeletedCheckOnEntity(int id);
    }
}
