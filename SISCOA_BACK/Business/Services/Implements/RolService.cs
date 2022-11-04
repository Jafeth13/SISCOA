using Data.Data;
using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class RolService : GenericService<TSISCOA_Rol>, IRolService
    {
        private readonly static RolRepository _Repository = new RolRepository(SISCOA_Context.Create());
        private readonly IRolRepository rolRepository;
        public RolService() : base(_Repository)
        {
            this.rolRepository = new RolRepository(SISCOA_Context.Create());
        }
        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            return await rolRepository.DeletedCheckOnEntity(id);
        }
        public async Task<bool> VerifyPrivilegesRolUser(int rol, string permit)
        {
            return await rolRepository.VerifyPrivilegesRolUser(rol, permit);
        }
    }
}
