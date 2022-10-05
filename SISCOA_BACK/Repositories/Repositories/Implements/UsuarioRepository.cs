using Data.Data;
using Entities.Models;

namespace Repositories.Repositories.Implements
{
    public class UsuarioRepository : GenericRepository<TSISCOA_Usuario>
    {
        public UsuarioRepository(SISCOA_Context siscoa_contex) : base(siscoa_contex)
        {
        }
    }
}
