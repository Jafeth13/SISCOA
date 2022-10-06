using Entities.Models;
using System.Threading.Tasks;

namespace Services.Services
{
    public interface IControlService : IGenericService<TSISCOA_Control>
    {
        Task<bool> DeletedCheckOnEntity(int id);
    }
}
