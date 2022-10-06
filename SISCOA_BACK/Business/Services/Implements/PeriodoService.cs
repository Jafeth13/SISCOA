using Entities.Models;
using Repositories.Repositories;

namespace Services.Services.Implements
{
    public class PeriodoService : GenericService<TSISCOA_Periodo>
    {
        public PeriodoService(IPeriodoRepository periodoRepository) : base(periodoRepository)
        {

        }
    }
}
