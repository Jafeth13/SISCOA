using Data.Data;
using Entities.Models;

namespace Repositories.Repositories.Implements
{
    public class ErrorRepository : GenericRepository<TSISCOA_Error>, IErrorRepository
    {
        private readonly SISCOA_Context siscoa_context;
        public ErrorRepository(SISCOA_Context siscoa_context) : base(siscoa_context)
        {
            this.siscoa_context = siscoa_context;
        } 
    }
}
