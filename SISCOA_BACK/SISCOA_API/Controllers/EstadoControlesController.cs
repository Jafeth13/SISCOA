using AutoMapper;
using Business.DTOs;
using Data.Data;
using Entities.Models;
using Entities.Util;
using Repositories.Repositories.Implements;
using Services.Services.Implements;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace SISCOA_API.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    public class EstadoControlesController : ApiController
    {
        private IMapper _mapper;
        private readonly EstadoControlService service = new EstadoControlService(new EstadoControlRepository(SISCOA_Context.Create()));
        /// <summary>
        /// Constructor
        /// </summary>
        public EstadoControlesController()
        {
            this._mapper = WebApiApplication.MapperConfiguration.CreateMapper();
        }
        /// <summary>
        /// Obtiene todos los registros
        /// </summary>
        /// <returns>Lista de todos los registros</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        [HttpGet]
        [ResponseType(typeof(IEnumerable<TSISCOA_EstadoControl_DTO>))]
        public async Task<IHttpActionResult> GetAll()
        {
            var entities = await service.GetAll();
            var DTO = entities.Select(x => _mapper.Map<TSISCOA_EstadoControl_DTO>(x));

            return Ok(DTO);
        }
        /// <summary>
        /// Obtiene datos para grafico controles por estado
        /// </summary>
        /// <returns>Lista las cantidadades de controles con cada estado</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        [Route("api/EstadoControles/GetDataGraphics_ControlsByState")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<TSISCOA_DataGraphics>))]
        public async Task<IHttpActionResult> GetDataGraphics_ControlsByState()
        {
            var entities = await service.GetDataGraphics_ControlsByState();

            return Ok(entities);
        }
        /// <summary>
        /// Obtiene un registro por su id
        /// </summary>
        /// <remark>
        /// </remark>
        /// <param name="id">Id del registro</param>
        /// <returns>Registro</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        /// <response code="404">NotFound. No se encontro el registro</response>
        [HttpGet]
        [ResponseType(typeof(TSISCOA_EstadoControl_DTO))]
        public async Task<IHttpActionResult> GetById(int id)
        {
            var entities = await service.GetById(id);
            if (entities == null)
                return NotFound();

            var DTO = _mapper.Map<TSISCOA_EstadoControl_DTO>(entities);

            return Ok(DTO);
        }
        /// <summary>
        /// Crea un registro
        /// </summary>
        /// <param name="DTO">El objeto JSON del registro</param>
        /// <returns>Registro insertado</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        /// <response code="400">BadRequest. Consulta erronea</response>
        /// <response code="500">InternalServerError. Error con el servidor</response>
        [HttpPost]
        public async Task<IHttpActionResult> Post(TSISCOA_EstadoControl_DTO DTO)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var entities = _mapper.Map<TSISCOA_EstadoControl>(DTO);
                entities = await service.Insert(entities);
                return Ok(entities);
            }
            catch (Exception ex) { return InternalServerError(ex); }
        }
        /// <summary>
        /// Actualiza un registro
        /// </summary>
        /// <param name="DTO">El objeto JSON del registro</param>
        /// <param name="id">Id del registro que quiere modificar</param>
        /// <returns>Registro modificado</returns>
        /// <response code="200">OK. Devuelve el registro modificado</response>
        /// <response code="400">BadRequest. Consulta erronea</response>
        /// <response code="404">NotFound. No se encontro el registro</response>
        /// <response code="500">InternalServerError. Error con el servidor</response>
        [HttpPut]
        [ResponseType(typeof(TSISCOA_EstadoControl_DTO))]
        public async Task<IHttpActionResult> Put(TSISCOA_EstadoControl_DTO DTO, int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (DTO.ID != id)
                return BadRequest("Object id does not match route id");

            var flag = await service.GetById(id);
            if (flag == null)
                return NotFound();

            try
            {
                var entities = _mapper.Map<TSISCOA_EstadoControl>(DTO);
                entities = await service.Update(entities);
                return Ok(entities);
            }
            catch (Exception ex) { return InternalServerError(ex); }
        }
        /// <summary>
        /// Elimina un registro
        /// </summary>
        /// <param name="id">Id del registro que quiere eliminar</param>
        /// <returns>OK</returns>
        /// <response code="200">OK. El registro fue eliminado</response>
        /// <response code="404">NotFound. No se encontro el registro</response>
        [HttpDelete]
        public async Task<IHttpActionResult> Delete(int id)
        {
            var flag = await service.GetById(id);
            if (flag == null)
                return NotFound();

            try
            {
                await service.Delete(id);
                return Ok();
            }
            catch (Exception ex) { return InternalServerError(ex); }
        }
    }
}
