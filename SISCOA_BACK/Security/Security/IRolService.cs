using Entities.Models;
using System.Threading.Tasks;

namespace Security.Security
{
    public interface IRolService : IGenericService<TSISCOA_Rol>
    {
        Task<bool> DeletedCheckOnEntity(int id);
        Task<bool> VerifyPrivilegesRolUser(int rol, string permit);
    }
}
