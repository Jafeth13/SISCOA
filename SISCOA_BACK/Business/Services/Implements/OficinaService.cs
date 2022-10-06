using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
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
    }
}
