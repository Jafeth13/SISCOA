using Entities.Models;
using Repositories.Repositories;

namespace Services.Services.Implements
{
    public class ActividadService : GenericService<TSISCOA_Actividad>, IActividadService
    {
        private readonly IActividadRepository actividadRepository;
        public ActividadService(IActividadRepository actividadRepository) : base(actividadRepository)
        {
            this.actividadRepository = actividadRepository;
        }
    }
}
