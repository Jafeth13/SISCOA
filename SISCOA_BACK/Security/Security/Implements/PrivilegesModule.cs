using Data.Data;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System.Threading.Tasks;

namespace Security.Security.Implements
{
    public class PrivilegesModule : IPrivilegesModule
    {
        private readonly static RolRepository _Repository = new RolRepository(SISCOA_Context.Create());
        private readonly static UsuarioRepository _UserRepository = new UsuarioRepository(SISCOA_Context.Create());
        private readonly IRolRepository rolRepository;
        private readonly IUsuarioRepository userRepository;
        public PrivilegesModule()
        {
            this.rolRepository = _Repository;
            this.userRepository = _UserRepository;
        }
        public async Task<bool> VerifyPrivilegesRolUser(int userID, string permission)
        {
            var user = await userRepository.GetById(userID);
            return await rolRepository.VerifyPrivilegesRolUser(user.FK_SISCOA_Rol_SISCOA_Usuario, permission);
        }
    }
}
