using Data.Data;
using Entities.Models;

namespace Repositories.Repositories.Implements
{
    public class OficinaRepository : GenericRepository<TSISCOA_Oficina>
    {
        public OficinaRepository(SISCOA_Context siscoa_context) : base(siscoa_context)
        {

        }
    }
}
