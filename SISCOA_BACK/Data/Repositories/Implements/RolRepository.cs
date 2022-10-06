using Data.Data;
using Entities.Models;

namespace Repositories.Repositories.Implements
{
    public class RolRepository : GenericRepository<TSISCOA_Rol>
    {
        public RolRepository(SISCOA_Context siscoa_context) : base(siscoa_context)
        {

        }
    }
}
