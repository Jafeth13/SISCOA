using Entities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services
{
    public interface IPeriodoService : IGenericService<TSISCOA_Periodo>
    {
        Task<bool> DeletedCheckOnEntity(int id);
    }
}
