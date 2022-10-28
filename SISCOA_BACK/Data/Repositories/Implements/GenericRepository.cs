using Data.Data;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Threading.Tasks;

namespace Repositories.Repositories.Implements
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
    {
        private readonly SISCOA_Context siscoa_context;

        public GenericRepository(SISCOA_Context siscoa_context)
        {
            this.siscoa_context = siscoa_context;
        }
        public async Task<IEnumerable<TEntity>> GetAll()
        {
            return await siscoa_context.Set<TEntity>().ToListAsync();
        }
        public async Task Delete(int id)
        {
            var entity = await GetById(id);

            if (entity == null)
                throw new Exception("The entity is null");

            siscoa_context.Set<TEntity>().Remove(entity);
            await siscoa_context.SaveChangesAsync();
        }

        public async Task<TEntity> GetById(int id)
        {
            return await siscoa_context.Set<TEntity>().FindAsync(id);
        }

        public async Task<TEntity> Insert(TEntity entity)
        {
            siscoa_context.Set<TEntity>().Add(entity);
            await siscoa_context.SaveChangesAsync();
            return entity;
        }

        public async Task<TEntity> Update(TEntity entity)
        {
            //siscoa_context.Entry(entity).State = EntityState.Modified;
            siscoa_context.Set<TEntity>().AddOrUpdate(entity);
            await siscoa_context.SaveChangesAsync();
            return entity;
        }
    }
}
