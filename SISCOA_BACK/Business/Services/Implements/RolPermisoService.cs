using Data.Data;
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
        private readonly static RolPermisoRepository _Repository = new RolPermisoRepository(SISCOA_Context.Create());
        private readonly IRolPermisoRepository rolPermisoRepository;
        public RolPermisoService() : base(_Repository)
        {
            this.rolPermisoRepository = _Repository;
        }
    }
}
