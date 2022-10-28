using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class EstadoService : GenericService<TSISCOA_Estado>, IEstadoService
    {
        private readonly IEstadoRepository estadoRepository;
        public EstadoService(IEstadoRepository estadoRepository) : base(estadoRepository)
        {
            this.estadoRepository = estadoRepository;
        }
        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            return await estadoRepository.DeletedCheckOnEntity(id);
        }
    }
}
