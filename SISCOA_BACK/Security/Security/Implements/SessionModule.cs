using Data.Data;
using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System.Threading.Tasks;

namespace Security.Security.Implements
{
    public class SessionModule : ISessionModule
    {
        private readonly static UsuarioRepository _Repository = new UsuarioRepository(SISCOA_Context.Create());
        private readonly IUsuarioRepository usuarioRepository;
        public SessionModule()
        {
            this.usuarioRepository = _Repository;
        }
        public async Task<TSISCOA_Usuario> LogIn(TSISCOA_Usuario usuario)
        {
            return await usuarioRepository.LogIn(usuario);
        }
    }
}
