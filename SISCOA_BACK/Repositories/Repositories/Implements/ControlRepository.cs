using Data.Data;
using Entities.Models;

namespace Repositories.Repositories.Implements
{
    public class ControlRepository : GenericRepository<TSISCOA_Control>, IControlRepository
    {
        public ControlRepository(SISCOA_Context siscoa_contex) : base(siscoa_contex)
        {

        }
    }
}
