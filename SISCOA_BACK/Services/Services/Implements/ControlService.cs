using Entities.Models;
using Repositories.Repositories;

namespace Services.Services.Implements
{
    public class ControlService : GenericService<TSISCOA_Control>, IControlService
    {
        public ControlService(IControlRepository controlRepository) : base(controlRepository)
        {

        }
    }
}
