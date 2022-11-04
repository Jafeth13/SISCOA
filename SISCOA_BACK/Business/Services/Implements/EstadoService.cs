using Data.Data;
using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class EstadoService : GenericService<TSISCOA_Estado>, IEstadoService
    {
        private readonly static EstadoRepository _Repository = new EstadoRepository(SISCOA_Context.Create());
        private readonly IEstadoRepository estadoRepository;
        public EstadoService() : base(_Repository)
        {
            this.estadoRepository = new EstadoRepository(SISCOA_Context.Create());
        }
        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            return await estadoRepository.DeletedCheckOnEntity(id);
        }
    }
}
