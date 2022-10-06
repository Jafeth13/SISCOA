using Entities.Models;
using Repositories.Repositories;

namespace Services.Services.Implements
{
    public class OficinaService : GenericService<TSISCOA_Oficina>
    {
        public OficinaService(IOficinaRepository oficinaRepository) : base(oficinaRepository)
        {

        }
    }
}
