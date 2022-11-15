using Data.Data;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Repositories.Implements
{
    public class UsuarioRepository : GenericRepository<TSISCOA_Usuario>, IUsuarioRepository
    {
        private readonly SISCOA_Context siscoa_context;
        public UsuarioRepository(SISCOA_Context siscoa_contex) : base(siscoa_contex)
        {
            this.siscoa_context = siscoa_contex;
        }
        public new async Task<IEnumerable<TSISCOA_Usuario>> GetAll()
        {
            return await siscoa_context.Set<TSISCOA_Usuario>().ToListAsync();
        }
        public new async Task Delete(int id)
        {
            var entity = await GetById(id);

            if (entity == null)
                throw new Exception("The entity is null");

            siscoa_context.Set<TSISCOA_Usuario>().Remove(entity);
            await siscoa_context.SaveChangesAsync();
        }

        public new async Task<TSISCOA_Usuario> GetById(int id)
        {
            return await siscoa_context.Set<TSISCOA_Usuario>().FindAsync(id);
        }
        
        public async Task<TSISCOA_Usuario> LogIn(TSISCOA_Usuario usuario) {
            var list = await siscoa_context.Usuarios.FirstOrDefaultAsync(x => x.TC_Identificacion == usuario.TC_Identificacion && x.TV_Contrasenna == usuario.TV_Contrasenna);
            if (list != null)
            {
                list.TSISCOA_Rol = await siscoa_context.Roles.FirstOrDefaultAsync(x => x.ID == list.FK_SISCOA_Rol_SISCOA_Usuario);
                list.TSISCOA_Oficina = await siscoa_context.Oficinas.FirstOrDefaultAsync(x => x.ID == list.FK_SISCOA_Oficina_SISCOA_Usuario);
                return list;
            }
            return null;
        }
    }
}
