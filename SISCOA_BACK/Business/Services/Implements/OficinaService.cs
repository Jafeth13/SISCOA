using Data.Data;
using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class OficinaService : GenericService<TSISCOA_Oficina>, IOficinaService
    {
        private readonly static OficinaRepository _Repository = new OficinaRepository(SISCOA_Context.Create());
        private readonly IOficinaRepository oficinaRepository;
        public OficinaService() : base(_Repository)
        {
            this.oficinaRepository = new OficinaRepository(SISCOA_Context.Create());
        }

        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            return await oficinaRepository.DeletedCheckOnEntity(id);
        }

        public async Task<IEnumerable<TSISCOA_Oficina>> GetOficinasByControl(int id) {
            return await oficinaRepository.GetOficinasByControl(id);
        }
    }
}
