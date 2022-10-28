using Entities.Models;
using Repositories.Repositories;
using System;
using System.Threading.Tasks;

namespace Security.Security.Implements
{
    public class ConsultPrivilegesModule : IConsultPrivilegesModule
    {
        private readonly IRolRepository rolRepository;    
        public ConsultPrivilegesModule(IRolRepository rolRepository)
        {
            this.rolRepository = rolRepository;
        }
        public async Task<bool> CantConsultActivities(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede consultar Actividades");
        }

        public async Task<bool> CantConsultControls(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede consultar Controles");
        }

        public async Task<bool> CantConsultErrors(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede consultar Errores");
        }
        public async Task<bool> CantConsultStates(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede consultar Estados");
        }

        public async Task<bool> CantConsultOffices(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede consultar Oficinas");
        }

        public async Task<bool> CantConsultPeriods(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede consultar Periodos");
        }

        public async Task<bool> CantConsultPermits(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede consultar Permisos");
        }

        public async Task<bool> CantConsultRols(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede consultar Roles");
        }

        public async Task<bool> CantConsultUsers(TSISCOA_Usuario usuario)
        {
            return await rolRepository.VerifyPrivilegesRolUser(usuario.TSISCOA_Rol, "Puede consultar Usuarios");
        }
    }
}
