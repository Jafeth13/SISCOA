using Entities.Models;
using Repositories.Repositories;

namespace Services.Services.Implements
{
    public class EstadoService : GenericService<TSISCOA_Estado>, IEstadoService
    {
        public EstadoService(IEstadoRepository estadoRepository) : base(estadoRepository)
        {
            
        }
    }
}
