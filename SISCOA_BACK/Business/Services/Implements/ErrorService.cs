using Entities.Models;
using Repositories.Repositories;

namespace Services.Services.Implements
{
    public class ErrorService : GenericService<TSISCOA_Error>, IErrorService
    {
        private readonly IErrorRepository errorRepository;
        public ErrorService(IErrorRepository errorRepository) : base(errorRepository)
        {
            this.errorRepository = errorRepository;
        }
    }
}
