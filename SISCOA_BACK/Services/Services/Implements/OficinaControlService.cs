using Entities.Models;
using Repositories.Repositories;

namespace Services.Services.Implements
{
    public class OficinaControlService : GenericService<TSISCOA_OficinaControl>
    {
        public OficinaControlService(IOficinaControlRepository oficinaControlRepository) : base(oficinaControlRepository)
        {

        }
    }
}
