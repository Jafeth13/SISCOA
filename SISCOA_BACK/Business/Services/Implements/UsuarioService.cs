using Entities.Models;
using Repositories.Repositories;

namespace Services.Services.Implements
{
    public class UsuarioService : GenericService<TSISCOA_Usuario>
    {
        public UsuarioService(IUsuarioRepository usuarioRepository) : base(usuarioRepository)
        {
            
        }
    }
}
