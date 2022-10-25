using Entities.Models;
using System.Threading.Tasks;

namespace Security.Security
{
    public interface ICreatePrivilegesModule
    {
        Task<bool> CantCreateActivities(TSISCOA_Usuario usuario);
        Task<bool> CantCreateControls(TSISCOA_Usuario usuario);
        Task<bool> CantCreateErrors(TSISCOA_Usuario usuario);
        Task<bool> CantCreateStates(TSISCOA_Usuario usuario);
        Task<bool> CantCreateOffices(TSISCOA_Usuario usuario);
        Task<bool> CantCreatePeriods(TSISCOA_Usuario usuario);
        Task<bool> CantCreatePermits(TSISCOA_Usuario usuario);
        Task<bool> CantCreateRols(TSISCOA_Usuario usuario);
        Task<bool> CantCreateUsers(TSISCOA_Usuario usuario);
    }
}
