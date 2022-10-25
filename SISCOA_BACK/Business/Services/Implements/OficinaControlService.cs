using Entities.Models;
using Repositories.Repositories;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Services.Implements
{
    public class OficinaControlService : GenericService<TSISCOA_OficinaControl>, IOficinaControlService
    {
        private readonly IOficinaControlRepository oficinaControlRepository;
        public OficinaControlService(IOficinaControlRepository oficinaControlRepository) : base(oficinaControlRepository)
        {
            this.oficinaControlRepository = oficinaControlRepository;
        }

    }
}
