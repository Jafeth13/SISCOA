using Data.Data;
using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Security.Security.Implements
{
    public class UsuarioService : GenericService<TSISCOA_Usuario>, IUsuarioService
    {
        private readonly static UsuarioRepository _Repository = new UsuarioRepository(SISCOA_Context.Create());
        private readonly IUsuarioRepository usuarioRepository;
        public UsuarioService() : base(_Repository)
        {
            this.usuarioRepository = new UsuarioRepository(SISCOA_Context.Create());
        }
        public new async Task<IEnumerable<TSISCOA_Usuario>> GetAll()
        {
            return await usuarioRepository.GetAll();
        }
        public new async Task<TSISCOA_Usuario> GetById(int id)
        {
            return await usuarioRepository.GetById(id);
        }
    }
}
