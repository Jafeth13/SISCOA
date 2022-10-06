using Entities.Models;
using Repositories.Repositories;
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
    }
}
