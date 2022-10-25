using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Security.Security
{
    public interface IPutPrivilegesModule
    {
        Task<bool> CantPutActivities(TSISCOA_Usuario usuario);
        Task<bool> CantPutControls(TSISCOA_Usuario usuario);
        Task<bool> CantPutErrors(TSISCOA_Usuario usuario);
        Task<bool> CantPutStates(TSISCOA_Usuario usuario);
        Task<bool> CantPutOffices(TSISCOA_Usuario usuario);
        Task<bool> CantPutPeriods(TSISCOA_Usuario usuario);
        Task<bool> CantPutPermits(TSISCOA_Usuario usuario);
        Task<bool> CantPutRols(TSISCOA_Usuario usuario);
        Task<bool> CantPutUsers(TSISCOA_Usuario usuario);
    }
}
