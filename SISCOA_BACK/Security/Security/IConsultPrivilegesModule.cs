using Entities.Models;
using System.Threading.Tasks;

namespace Security.Security
{
    public interface IConsultPrivilegesModule
    {
        Task<bool> CantConsultActivities(TSISCOA_Usuario usuario);
        Task<bool> CantConsultControls(TSISCOA_Usuario usuario);
        Task<bool> CantConsultErrors(TSISCOA_Usuario usuario);
        Task<bool> CantConsultStates(TSISCOA_Usuario usuario);
        Task<bool> CantConsultOffices(TSISCOA_Usuario usuario);
        Task<bool> CantConsultPeriods(TSISCOA_Usuario usuario);
        Task<bool> CantConsultPermits(TSISCOA_Usuario usuario);
        Task<bool> CantConsultRols(TSISCOA_Usuario usuario);
        Task<bool> CantConsultUsers(TSISCOA_Usuario usuario);

    }
}
