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
        public async Task<IEnumerable<TSISCOA_Control>> GetAll()
        {
            return await controlRepository.GetAll();
        }
        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            return await controlRepository.DeletedCheckOnEntity(id);
        }
    }
}
