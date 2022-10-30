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
    public class OficinaControlesController : ApiController
    {
        private IMapper _mapper;
        private readonly OficinaControlService service = new OficinaControlService(new OficinaControlRepository(SISCOA_Context.Create()));
        /// <summary>
        /// Constructor
        /// </summary>
        public OficinaControlesController()
        {
            this._mapper = WebApiApplication.MapperConfiguration.CreateMapper();
        }
        /// <summary>
        /// Obtiene todos los registros
        /// </summary>
        /// <returns>Lista de todos los registros</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        [HttpGet]
        [ResponseType(typeof(IEnumerable<TSISCOA_OficinaControl_DTO>))]
        public async Task<IHttpActionResult> GetAll()
        {
            var entities = await service.GetAll();
            if (entities == null)
                return NotFound();
            var DTO = entities.Select(x => _mapper.Map<TSISCOA_OficinaControl_DTO>(x));

            return Ok(DTO);
        }
        /// <summary>
        /// Obtiene la cantidad de controles en cada uno de los estados
        /// </summary>
        /// <returns>Lista de todos los registros</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        [Route("api/OficinaControl/GetDataGraphics_ControlsByStates")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<TSISCOA_DataGraphics>))]
        public async Task<IHttpActionResult> GetDataGraphics_ControlsByStates()
        {
            var entities = await service.GetDataGraphics_ControlsByStates();
            if (entities == null)
                return NotFound();

            return Ok(entities);
        }
        /// <summary>
        /// Obtiene la cantidad de controles que estan pendientes
        /// </summary>
        /// <returns>Lista de todos los registros</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        [Route("api/OficinaControl/GetDataGraphics_ControlsBySlopes")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<TSISCOA_DataGraphics>))]
        public async Task<IHttpActionResult> GetDataGraphics_ControlsBySlopes()
        {
            var entities = await service.GetDataGraphics_ControlsSlopes();
            if (entities == null)
                return NotFound();

            return Ok(entities);
        }
        /// <summary>
        /// Obtiene un registro por id de oficina
        /// </summary>
        /// <remark>
        /// </remark>
        /// <param name="id">Id de la oficina</param>
        /// <returns>Registro</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        /// <response code="404">NotFound. No se encontro el registro</response>
        [Route("api/OficinaControl/GetOfficeControlByIdOffice/{id}")]
        [HttpGet]
        [ResponseType(typeof(TSISCOA_OficinaControl_DTO))]
        public async Task<IHttpActionResult> GetOfficeControlByIdOffice(int id)
        {
            var entities = await service.GetOfficeControlByIdOffice(id);
            if (entities == null)
                return NotFound();

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
        [ResponseType(typeof(TSISCOA_OficinaControl_DTO))]
        public async Task<IHttpActionResult> GetById(int id)
        {
            var entities = await service.GetById(id);
            if (entities == null)
                return NotFound();

            var DTO = _mapper.Map<TSISCOA_OficinaControl_DTO>(entities);

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
        public async Task<IHttpActionResult> Post(TSISCOA_OficinaControl_DTO DTO)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var entities = _mapper.Map<TSISCOA_OficinaControl>(DTO);
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
        [ResponseType(typeof(TSISCOA_OficinaControl_DTO))]
        public async Task<IHttpActionResult> Put(TSISCOA_OficinaControl_DTO DTO, int id)
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
                var entities = _mapper.Map<TSISCOA_OficinaControl>(DTO);
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
