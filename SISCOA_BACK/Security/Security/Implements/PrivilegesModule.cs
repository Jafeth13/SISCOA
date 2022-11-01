using Data.Data;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System.Threading.Tasks;

namespace Security.Security.Implements
{
    public class PrivilegesModule : IPrivilegesModule
    {
        private readonly static RolRepository _Repository = new RolRepository(SISCOA_Context.Create());
        private readonly IRolRepository rolRepository;
        public PrivilegesModule()
        {
            this.rolRepository = _Repository;
        }
        public async Task<bool> VerifyPrivilegesRolUser(int rol, string privilege)
        {
            return await rolRepository.VerifyPrivilegesRolUser(rol, privilege);
        }
    }
}
