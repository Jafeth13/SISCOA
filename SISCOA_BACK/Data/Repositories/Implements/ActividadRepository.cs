using Data.Data;
using Entities.Models;

namespace Repositories.Repositories.Implements
{
    public class ActividadRepository : GenericRepository<TSISCOA_Actividad>, IActividadRepository
    {
        private readonly SISCOA_Context siscoa_context;
        public ActividadRepository(SISCOA_Context siscoa_context) : base(siscoa_context)
        {
            this.siscoa_context = siscoa_context;
        } 
    }
}
