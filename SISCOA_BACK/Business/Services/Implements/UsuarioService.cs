using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class UsuarioService : GenericService<TSISCOA_Usuario>, IUsuarioService
    {
        private readonly IUsuarioRepository usuarioRepository;
        public UsuarioService(IUsuarioRepository usuarioRepository) : base(usuarioRepository)
        {
            this.usuarioRepository = usuarioRepository;
        }

        public async Task<IEnumerable<TSISCOA_Usuario>> GetAll()
        {
            return await usuarioRepository.GetAll();
        }
    }
}
