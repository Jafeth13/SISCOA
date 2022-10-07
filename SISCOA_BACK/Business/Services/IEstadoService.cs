using Entities.Models;
using System.Threading.Tasks;

namespace Services.Services
{
    public interface IEstadoService : IGenericService<TSISCOA_Estado>
    {
        Task<bool> DeletedCheckOnEntity(int id);
    }
}
