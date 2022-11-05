using Data.Data;
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
        private readonly static UsuarioRepository _Repository = new UsuarioRepository(SISCOA_Context.Create());
        private readonly IUsuarioRepository usuarioRepository;
        public UsuarioService() : base(_Repository)
        {
            this.usuarioRepository = new UsuarioRepository(SISCOA_Context.Create());
        }
    }
}
