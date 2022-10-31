using Data.Data;
using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;

namespace Services.Services.Implements
{
    public class ErrorService : GenericService<TSISCOA_Error>, IErrorService
    {
        private readonly static ErrorRepository _Repository = new ErrorRepository(SISCOA_Context.Create());
        private readonly IErrorRepository errorRepository;
        public ErrorService() : base(_Repository)
        {
            this.errorRepository = _Repository;
        }
    }
}
