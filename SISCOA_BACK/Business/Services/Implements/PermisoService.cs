using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class PermisoService : GenericService<TSISCOA_Permiso>, IPermisoService
    {
        private readonly IPermisoRepository permisoRepository;
        public PermisoService(IPermisoRepository permisoRepository) : base(permisoRepository)
        {
            this.permisoRepository = permisoRepository;
        }
        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            return await permisoRepository.DeletedCheckOnEntity(id);
        }
    }
}
