using Data.Data;
using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class PeriodoService : GenericService<TSISCOA_Periodo>, IPeriodoService
    {
        private readonly static PeriodoRepository _Repository = new PeriodoRepository(SISCOA_Context.Create());
        private readonly IPeriodoRepository periodoRepository;
        public PeriodoService() : base(_Repository)
        {
            this.periodoRepository = _Repository;
        }
        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            return await periodoRepository.DeletedCheckOnEntity(id);
        }
    }
}
