using Data.Data;
using Entities.Models;
using Repositories.Repositories;
using Repositories.Repositories.Implements;

namespace Services.Services.Implements
{
    public class ArchivoService : GenericService<TSISCOA_Archivo>, IArchivoService
    {
        private readonly static ArchivoRepository _Repository = new ArchivoRepository(SISCOA_Context.Create());
        private readonly IArchivoRepository archivoRepository;
        public ArchivoService() : base(_Repository)
        {
            this.archivoRepository = new ArchivoRepository(SISCOA_Context.Create());
        }
    }
}
