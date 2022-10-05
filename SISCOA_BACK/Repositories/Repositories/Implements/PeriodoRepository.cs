using Data.Data;
using Entities.Models;

namespace Repositories.Repositories.Implements
{
    public class PeriodoRepository : GenericRepository<TSISCOA_Periodo>
    {
        public PeriodoRepository(SISCOA_Context siscoa_context) : base(siscoa_context)
        {

        }
    }
}
