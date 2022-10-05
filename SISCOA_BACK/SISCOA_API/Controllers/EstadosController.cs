using AutoMapper;
using Business.DTOs;
using Data.Data;
using Repositories.Repositories.Implements;
using Services.Services.Implements;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace SISCOA_API.Controllers
{
    public class EstadosController : ApiController
    {
        private IMapper _mapper;
        private readonly EstadoService estadoService = new EstadoService(new EstadoRepository(SISCOA_Context.Create()));

        public EstadosController()
        {
            this._mapper = WebApiApplication.MapperConfiguration.CreateMapper();
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetAll()
        {
            var estados = await estadoService.GetAll();
            var estadoDTO = estados.Select(x => _mapper.Map<TSISCOA_Estado_DTO>(x));

            return Ok(estadoDTO);
        }
    }
}
