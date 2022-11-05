using Data.Data;
using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class PermisoService : GenericService<TSISCOA_Permiso>, IPermisoService
    {
        private readonly static PermisoRepository _Repository = new PermisoRepository(SISCOA_Context.Create());
        private readonly IPermisoRepository permisoRepository;
        public PermisoService() : base(_Repository)
        {
            this.permisoRepository = new PermisoRepository(SISCOA_Context.Create());
        }
        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            return await permisoRepository.DeletedCheckOnEntity(id);
        }
        public async Task<IEnumerable<TSISCOA_Permiso>> GetPermisosByRol(int id)
        {
            return await permisoRepository.GetPermisosByRol(id);
        }
    }
}
