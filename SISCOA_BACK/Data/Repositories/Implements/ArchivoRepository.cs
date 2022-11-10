using Data.Data;
using Entities.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace Repositories.Repositories.Implements
{
    public class ArchivoRepository : GenericRepository<TSISCOA_Archivo>, IArchivoRepository
    {
        private readonly SISCOA_Context siscoa_context;
        public ArchivoRepository(SISCOA_Context siscoa_context) : base(siscoa_context)
        {
            this.siscoa_context = siscoa_context;
        }

        public async Task<IEnumerable<TSISCOA_Archivo>> GetAllWithIdOficinaControl(int id)
        {
            return await siscoa_context.Archivos.Where(x => x.FK_TN_OficinaControl_SISCOA_Archivo == id).ToListAsync();
        }
    }
}
