using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class RolPermisoService : GenericService<TSISCOA_RolPermiso>, IRolPermisoService
    {
        private readonly IRolPermisoRepository rolPermisoRepository;
        public RolPermisoService(IRolPermisoRepository rolPermisoRepository) : base(rolPermisoRepository)
        {
            this.rolPermisoRepository = rolPermisoRepository;
        }

        public async Task<IEnumerable<TSISCOA_RolPermiso>> GetAll()
        {
            return await rolPermisoRepository.GetAll();
        }
    }
}
