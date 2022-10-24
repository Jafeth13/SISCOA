using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class RolService : GenericService<TSISCOA_Rol>, IRolService
    {
        private readonly IRolRepository rolRepository;
        public RolService(IRolRepository rolRepository) : base(rolRepository)
        {
            this.rolRepository = rolRepository;
        }
        public async Task<IEnumerable<TSISCOA_Rol>> GetAll()
        {
            return await rolRepository.GetAll();
        }
        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            return await rolRepository.DeletedCheckOnEntity(id);
        }
    }
}
