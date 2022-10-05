using Data.Data;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Repositories.Implements
{
    public class EstadoRepository : GenericRepository<TSISCOA_Estado>, IEstadoRepository
    {
        public EstadoRepository(SISCOA_Context siscoa_context) : base(siscoa_context)
        {
               
        }
    }
}
