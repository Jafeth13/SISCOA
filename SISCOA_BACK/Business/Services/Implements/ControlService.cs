using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class ControlService : GenericService<TSISCOA_Control>, IControlService
    {
        private readonly IControlRepository controlRepository;
        public ControlService(IControlRepository controlRepository) : base(controlRepository)
        {
            this.controlRepository = controlRepository;
        }
        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            return await controlRepository.DeletedCheckOnEntity(id);
        }
        public async Task<IEnumerable<TSISCOA_Control>> GetControlesByOficina(int id)
        {
            return await controlRepository.GetControlesByOficina(id);
        }

        public Task<IEnumerable<TSISCOA_Control>> GetDataGraphics_ControlsByState()
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<TSISCOA_Control>> GetDataGraphics_ControlsNotAssigned()
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<TSISCOA_Control>> GetDataGraphics_ControlsSlopes()
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<TSISCOA_Control>> GetDataGraphics_ControlsWithExtraDays()
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<TSISCOA_Control>> GetDataTable_ControlsByState()
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<TSISCOA_Control>> GetDataTable_ControlsNotAssigned()
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<TSISCOA_Control>> GetDataTable_ControlsSlopes()
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<TSISCOA_Control>> GetDataTable_ControlsWithExtraDays()
        {
            throw new System.NotImplementedException();
        }
    }
}
