using Data.Data;
using Entities.Models;

namespace Repositories.Repositories.Implements
{
    public class UsuarioRepository : GenericRepository<TSISCOA_Usuario>, IUsuarioRepository
    {
        public UsuarioRepository(SISCOA_Context siscoa_contex) : base(siscoa_contex)
        {
        }
    }
}
