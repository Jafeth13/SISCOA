using AutoMapper;
using Business.DTOs;
using Data.Data;
using Entities.Models;
using Repositories.Repositories.Implements;
using Services.Services.Implements;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.UI;

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

        [HttpGet]
        public async Task<IHttpActionResult> GetById(int id)
        {
            var estados = await estadoService.GetById(id);
            if (estados == null)
                return NotFound();

            var estadoDTO = _mapper.Map<TSISCOA_Estado_DTO>(estados);

            return Ok(estadoDTO);
        }

        [HttpPost]
        public async Task<IHttpActionResult> Post(TSISCOA_Estado_DTO estadoDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var estado = _mapper.Map<TSISCOA_Estado>(estadoDTO);
                estado = await estadoService.Insert(estado);
                return Ok(estado);
            }
            catch (Exception ex) { return InternalServerError(ex); }
        }

        [HttpPut]
        public async Task<IHttpActionResult> Put(TSISCOA_Estado_DTO estadoDTO, int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (estadoDTO.ID != id)
                return BadRequest();

            var flag = await estadoService.GetById(id);
            if(flag == null)
                return NotFound();

            try
            {
                var estado = _mapper.Map<TSISCOA_Estado>(estadoDTO);
                estado = await estadoService.Update(estado);
                return Ok(estado);
            }
            catch (Exception ex) { return InternalServerError(ex); }
        }

        [HttpDelete]
        public async Task<IHttpActionResult> Delete(int id)
        {
            var flag = await estadoService.GetById(id);
            if (flag == null)
                return NotFound();

            try
            {
                
                await estadoService.Delete(id);
                return Ok();
            }
            catch (Exception ex) { return InternalServerError(ex); }
        }
    }
}
