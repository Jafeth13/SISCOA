using Data.Data;
using Entities.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Threading.Tasks;

namespace Repositories.Repositories.Implements
{
    public class ActividadRepository : GenericRepository<TSISCOA_Actividad>, IActividadRepository
    {
        private readonly SISCOA_Context siscoa_context;
        public ActividadRepository(SISCOA_Context siscoa_context) : base(siscoa_context)
        {
            this.siscoa_context = siscoa_context;
        }
        public new async Task<IEnumerable<TSISCOA_Actividad>> GetAll()
        {
            var activities= await siscoa_context.Actividades.ToListAsync();
            return activities;
        }
    }
}
