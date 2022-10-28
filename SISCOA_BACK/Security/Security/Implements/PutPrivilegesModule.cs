using Entities.Models;
using Repositories.Repositories;
using System;
using System.Threading.Tasks;

namespace Security.Security.Implements
{
    public class PutPrivilegesModule : IPutPrivilegesModule
    {
        private readonly IRolRepository rolRepository;
        public PutPrivilegesModule(IRolRepository rolRepository)
        {
            this.rolRepository = rolRepository;
        }
        public async Task<bool> CantPutActivities(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede actualizar Actividades");
        }

        public async Task<bool> CantPutControls(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede actualizar Controles");
        }

        public async Task<bool> CantPutErrors(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede actualizar Errores");
        }
        public async Task<bool> CantPutStates(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede actualizar Estados");
        }
        public async Task<bool> CantPutOffices(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede actualizar Oficinas");
        }

        public async Task<bool> CantPutPeriods(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede actualizar Periodos");
        }

        public async Task<bool> CantPutPermits(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede actualizar Permisos");
        }

        public async Task<bool> CantPutRols(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede actualizar Roles");
        }
        public async Task<bool> CantPutUsers(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede actualizar Usuarios");
        }
    }
}
