using Entities.Models;
using Entities.Util;
using Repositories.Repositories;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class EstadoControlService : GenericService<TSISCOA_EstadoControl>, IEstadoControlService
    {
        private readonly IEstadoControlRepository estadoControlRepository;
        public EstadoControlService(IEstadoControlRepository estadoControlRepository) : base(estadoControlRepository)
        {
            this.estadoControlRepository = estadoControlRepository;
        }
        public async Task<IEnumerable<TSISCOA_DataGraphics>> GetDataGraphics_ControlsByState()
        {
            return await estadoControlRepository.GetDataGraphics_ControlsByState();
        }
    }
}
