using Entities.Models;
using Repositories.Repositories;
using System;
using System.Threading.Tasks;

namespace Security.Security.Implements
{
    public class DeletePrivilegesModule : IDeletePrivilegesModule
    {
        private readonly IRolRepository rolRepository;
        public DeletePrivilegesModule(IRolRepository rolRepository)
        {
            this.rolRepository = rolRepository;
        }
        public async Task<bool> CantDeleteActivities(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede eliminar Actividades");
        }

        public async Task<bool> CantDeleteControls(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede eliminar Controles");
        }

        public async Task<bool> CantDeleteErrors(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede eliminar Errores");
        }
        public async Task<bool> CantDeleteStates(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede eliminar Estados");
        }
        public async Task<bool> CantDeleteOffices(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede eliminar Oficinas");
        }

        public async Task<bool> CantDeletePeriods(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede eliminar Periodos");
        }

        public async Task<bool> CantDeletePermits(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede eliminar Permisos");
        }

        public async Task<bool> CantDeleteRols(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede eliminar Roles");
        }

        public async Task<bool> CantDeleteUsers(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede eliminar Usuarios");
        }
    }
}
