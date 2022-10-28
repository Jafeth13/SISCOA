using Entities.Models;
using System.Threading.Tasks;

namespace Security.Security
{
    public interface ISessionModule
    {
        Task<TSISCOA_Usuario> LogIn(TSISCOA_Usuario usuario);
    }
}
