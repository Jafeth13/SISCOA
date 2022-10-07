using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class PeriodoService : GenericService<TSISCOA_Periodo>, IPeriodoService
    {
        private readonly IPeriodoRepository periodoRepository;
        public PeriodoService(IPeriodoRepository periodoRepository) : base(periodoRepository)
        {
            this.periodoRepository = periodoRepository;
        }

        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            return await periodoRepository.DeletedCheckOnEntity(id);
        }
    }
}
