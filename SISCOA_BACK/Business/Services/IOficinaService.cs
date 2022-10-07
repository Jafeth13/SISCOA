using Entities.Models;
using System.Threading.Tasks;

namespace Services.Services
{
    public interface IOficinaService : IGenericService<TSISCOA_Oficina>
    {
        Task<bool> DeletedCheckOnEntity(int id);
    }
}
