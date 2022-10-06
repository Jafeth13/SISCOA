using Data.Data;
using Entities.Models;
using System.Data.Entity;
using System.Threading.Tasks;

namespace Repositories.Repositories.Implements
{
    public class ControlRepository : GenericRepository<TSISCOA_Control>, IControlRepository
    {
        private readonly SISCOA_Context siscoa_context;
        public ControlRepository(SISCOA_Context siscoa_contex) : base(siscoa_contex)
        {
            this.siscoa_context = siscoa_contex;
        }

        public async Task<bool> DeletedCheckOnEntity(int id)
        {
            var flag = await siscoa_context.Estados.AnyAsync(x => x.ID == id);
            return flag;
        }
    }
}
