using Entities.Models;
using Entities.Util;
using Repositories.Repositories;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class OficinaControlService : GenericService<TSISCOA_OficinaControl>, IOficinaControlService
    {
        private readonly IOficinaControlRepository oficinaControlRepository;
        public OficinaControlService(IOficinaControlRepository oficinaControlRepository) : base(oficinaControlRepository)
        {
            this.oficinaControlRepository = oficinaControlRepository;
        }
        public async Task<IEnumerable<TSISCOA_DataGraphics>> GetDataGraphics_ControlsByStates()
        {
            return await oficinaControlRepository.GetDataGraphics_ControlsByStates();
        }
        public async Task<IEnumerable<TSISCOA_DataGraphics>> GetDataGraphics_ControlsSlopes()
        {
            return await oficinaControlRepository.GetDataGraphics_ControlsSlopes();
        }
        public async Task<IEnumerable<TSISCOA_OficinaControl>> GetDataGraphicsTable_ControlsSlopes() 
        {
            return await oficinaControlRepository.GetDataGraphicsTable_ControlsSlopes();
        }
        public async Task<IEnumerable<TSISCOA_DataGraphics>> GetDataGraphics_ControlsWithExtraDays()
        {
            return await oficinaControlRepository.GetDataGraphics_ControlsWithExtraDays();
        }
        public async Task<IEnumerable<TSISCOA_OficinaControl>> GetDataGraphicsTable_ControlsWithExtraDays()
        {
            return await oficinaControlRepository.GetDataGraphicsTable_ControlsWithExtraDays();
        }
        public async Task<IEnumerable<TSISCOA_OficinaControl>> GetOfficeControlByIdOffice(int id)
        {
            return await oficinaControlRepository.GetOfficeControlByIdOffice(id);
        }
    }
}
