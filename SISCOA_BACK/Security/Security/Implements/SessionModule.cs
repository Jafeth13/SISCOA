using Data.Data;
using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;
using System;
using System.Security.Cryptography;
using System.Text;
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
            usuario.TV_Contrasenna = GetSHA256(usuario.TV_Contrasenna);
            return await usuarioRepository.LogIn(usuario);
        }

        public async Task<TSISCOA_Usuario> Insert(TSISCOA_Usuario usuario)
        {
            var listUsers = await usuarioRepository.GetAll();
            if (usuario.TV_Contrasenna.Length < 8 || usuario.TC_Identificacion.Length < 8)
                return null;
            foreach (var item in listUsers)
            {
                if (item.TC_Identificacion == usuario.TC_Identificacion)
                    return null;
            }
            usuario.TV_Contrasenna = GetSHA256(usuario.TV_Contrasenna);
            return await usuarioRepository.Insert(usuario);
        }

        public async Task<TSISCOA_Usuario> Update(TSISCOA_Usuario usuario)
        {
            var userDB = await usuarioRepository.GetById(usuario.ID);
            if (usuario.TV_Contrasenna.Length < 8 || usuario.TC_Identificacion.Length < 8)
                return null;
            if (userDB.TV_Contrasenna != usuario.TV_Contrasenna)
                usuario.TV_Contrasenna = GetSHA256(usuario.TV_Contrasenna);

            return await usuarioRepository.Update(usuario);
        }

        private string GetSHA256(string str)
        {
            SHA256 sha256 = SHA256Managed.Create();
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] stream = null;
            StringBuilder sb = new StringBuilder();
            stream = sha256.ComputeHash(encoding.GetBytes(str));
            for (int i = 0; i < stream.Length; i++) sb.AppendFormat("{0:x2}", stream[i]);
            return sb.ToString();
        }
    }
}
