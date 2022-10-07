using Data.Data;
using Entities.Models;

namespace Repositories.Repositories.Implements
{
    public class OficinaControlRepository : GenericRepository<TSISCOA_OficinaControl>, IOficinaControlRepository
    {
        public OficinaControlRepository(SISCOA_Context siscoa_context) : base(siscoa_context)
        {
            
        }
    }
}
