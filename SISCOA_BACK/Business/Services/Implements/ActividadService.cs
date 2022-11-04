using Data.Data;
using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;

namespace Services.Services.Implements
{
    public class ActividadService : GenericService<TSISCOA_Actividad>, IActividadService
    {
        private readonly static ActividadRepository _Repository = new ActividadRepository(SISCOA_Context.Create());
        private readonly IActividadRepository actividadRepository;
        public ActividadService() : base(_Repository)
        {
            this.actividadRepository = new ActividadRepository(SISCOA_Context.Create());
        }
    }
}
