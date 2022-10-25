using Entities.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services
{
    public interface IRolService : IGenericService<TSISCOA_Rol>
    {
        Task<bool> DeletedCheckOnEntity(int id);
        Task<bool> VerifyPrivilegesRolUser(TSISCOA_Rol rol, string permit);
    }
}
