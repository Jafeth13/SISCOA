using Entities.Models;
using Repositories.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class OficinaService : GenericService<TSISCOA_Oficina>, IOficinaService
    {
        private readonly IOficinaRepository oficinaRepository;
        public OficinaService(IOficinaRepository oficinaRepository) : base(oficinaRepository)
        {
            this.oficinaRepository = oficinaRepository;
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
