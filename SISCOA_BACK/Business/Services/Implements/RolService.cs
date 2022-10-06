using Entities.Models;
using Repositories.Repositories;

namespace Services.Services.Implements
{
    public class RolService : GenericService<TSISCOA_Rol>
    {
        public RolService(IRolRepository rolRepository) : base(rolRepository)
        {

        }
    }
}
