using Business.DTOs;
using Data.Data;
using Entities.Models;
using Entities.Util;
using Microsoft.AspNetCore.Http;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class OficinaControlService : GenericService<TSISCOA_OficinaControl>, IOficinaControlService
    {
        private readonly static OficinaControlRepository _Repository = new OficinaControlRepository(SISCOA_Context.Create());
        private readonly IOficinaControlRepository oficinaControlRepository;
        public OficinaControlService() : base(_Repository)
        {
            this.oficinaControlRepository = new OficinaControlRepository(SISCOA_Context.Create());
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

        public async Task<IEnumerable<TSISCOA_OficinaControl>> GetData_ControlsByStateLate()
        {
            return await oficinaControlRepository.GetData_ControlsByStateLate();
        }
    }
}
