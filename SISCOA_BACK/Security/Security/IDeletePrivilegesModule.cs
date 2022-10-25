using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Security.Security
{
    public interface IDeletePrivilegesModule
    {
        Task<bool> CantDeleteActivities(TSISCOA_Usuario usuario);
        Task<bool> CantDeleteControls(TSISCOA_Usuario usuario);
        Task<bool> CantDeleteErrors(TSISCOA_Usuario usuario);
        Task<bool> CantDeleteStates(TSISCOA_Usuario usuario);
        Task<bool> CantDeleteOffices(TSISCOA_Usuario usuario);
        Task<bool> CantDeletePeriods(TSISCOA_Usuario usuario);
        Task<bool> CantDeletePermits(TSISCOA_Usuario usuario);
        Task<bool> CantDeleteRols(TSISCOA_Usuario usuario);
        Task<bool> CantDeleteUsers(TSISCOA_Usuario usuario);
    }
}
