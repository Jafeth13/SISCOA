using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System;
using System.Threading.Tasks;

namespace Security.Security.Implements
{
    public class CreatePrivilegesModule : ICreatePrivilegesModule
    {
        private readonly IRolRepository rolRepository;
        public CreatePrivilegesModule(IRolRepository rolRepository)
        {
            this.rolRepository = rolRepository;
        }
        public async Task<bool> CantCreateActivities(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede crear Actividades");
        }

        public async Task<bool> CantCreateControls(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede crear Controles");
        }

        public async Task<bool> CantCreateErrors(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede crear Errores");
        }
        public async Task<bool> CantCreateStates(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede crear Estados");
        }
        public async Task<bool> CantCreateOffices(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede crear Oficinas");
        }

        public async Task<bool> CantCreatePeriods(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede crear Periodos");
        }

        public async Task<bool> CantCreatePermits(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede crear Permisos");
        }

        public async Task<bool> CantCreateRols(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede crear Roles");
        }   

        public async Task<bool> CantCreateUsers(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede crear Usuarios");
        }
    }
}
