using Entities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services
{
    public interface IArchivoService : IGenericService<TSISCOA_Archivo>
    {
        Task<IEnumerable<TSISCOA_Archivo>> GetAllWithIdOficinaControl(int id);
    }
}
