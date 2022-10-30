using Repositories.Repositories;
using System.Threading.Tasks;

namespace Security.Security.Implements
{
    public class PrivilegesModule : IPrivilegesModule
    {
        private readonly IRolRepository rolRepository;
        public PrivilegesModule(IRolRepository rolRepository)
        {
            this.rolRepository = rolRepository;
        }
        public async Task<bool> VerifyPrivilegesRolUser(int rol, string privilege)
        {
            return await rolRepository.VerifyPrivilegesRolUser(rol, privilege);
        }
    }
}
