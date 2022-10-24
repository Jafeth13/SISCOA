using Entities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services
{
    public interface IControlService : IGenericService<TSISCOA_Control>
    {
        Task<IEnumerable<TSISCOA_Control>> GetAll();
        Task<bool> DeletedCheckOnEntity(int id);
    }
}
