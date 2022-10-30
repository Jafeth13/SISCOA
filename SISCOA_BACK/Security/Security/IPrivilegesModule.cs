using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Security.Security
{
    public interface IPrivilegesModule
    {
        Task<bool> VerifyPrivilegesRolUser(int rol, string privilege);
    }
}
