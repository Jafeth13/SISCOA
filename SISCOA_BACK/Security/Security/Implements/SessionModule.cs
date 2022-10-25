using Entities.Models;
using Repositories.Repositories;
using System.Threading.Tasks;

namespace Security.Security.Implements
{
    public class SessionModule : ISessionModule
    {
        private readonly IUsuarioRepository usuarioRepository;
        public SessionModule(IUsuarioRepository usuarioRepository)
        {
            this.usuarioRepository = usuarioRepository;
        }
        public async Task<TSISCOA_Usuario> LogIn(TSISCOA_Usuario usuario)
        {
            return await usuarioRepository.LogIn(usuario);
        }
    }
}
