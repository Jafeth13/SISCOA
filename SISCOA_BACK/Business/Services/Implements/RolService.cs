using Entities.Models;
using Repositories.Repositories;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class RolService : GenericService<TSISCOA_Rol>, IRolService
    {
        private readonly IRolRepository rolRepository;
        public RolService(IRolRepository rolRepository) : base(rolRepository)
        {
            this.rolRepository = rolRepository;
        }
        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            return await rolRepository.DeletedCheckOnEntity(id);
        }
        public async Task<bool> VerifyPrivilegesRolUser(TSISCOA_Rol rol, string permit)
        {
            return await rolRepository.VerifyPrivilegesRolUser(rol, permit);
        }
    }
}
