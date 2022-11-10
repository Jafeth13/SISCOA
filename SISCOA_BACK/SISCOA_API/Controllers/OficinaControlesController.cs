using AutoMapper;
using Business.DTOs;
using Entities.Models;
using Entities.Util;
using Microsoft.AspNetCore.Http;
using Security.Security.Implements;
using Services.Services.Implements;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
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
        private readonly OficinaControlService service = new OficinaControlService();
        private readonly ActividadService activity = new ActividadService();
        private readonly ArchivoService fileService = new ArchivoService();
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
        /// <param name="IDuserLogged">Id del usuario loggeado</param>
        /// <returns>Lista de todos los registros</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        [HttpGet]
        [ResponseType(typeof(IEnumerable<TSISCOA_OficinaControl_DTO>))]
        public async Task<IHttpActionResult> GetAll(int IDuserLogged)
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
        /// <param name="IDuserLogged">Id del usuario loggeado</param>
        /// <returns>Lista de todos los registros</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        [Route("api/OficinaControl/GetDataGraphics_ControlsByStates")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<TSISCOA_DataGraphics>))]
        public async Task<IHttpActionResult> GetDataGraphics_ControlsByStates(int IDuserLogged)
        {
            var entities = await service.GetDataGraphics_ControlsByStates();
            if (entities == null)
                return NotFound();

            return Ok(entities);
        }
        /// <summary>
        /// Obtiene la cantidad de controles que estan pendientes distribuidos por periodo
        /// </summary>
        /// <param name="IDuserLogged">Id del usuario loggeado</param>
        /// <returns>Lista de todos los registros</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        [Route("api/OficinaControl/GetDataGraphics_ControlsBySlopes")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<TSISCOA_DataGraphics>))]
        public async Task<IHttpActionResult> GetDataGraphics_ControlsBySlopes(int IDuserLogged)
        {
            var entities = await service.GetDataGraphics_ControlsSlopes();
            if (entities == null)
                return NotFound();

            return Ok(entities);
        }
        /// <summary>
        /// Obtiene los datos de los controles que estan pendientes
        /// </summary>
        /// <param name="IDuserLogged">Id del usuario loggeado</param>
        /// <returns>Lista de todos los registros</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        [Route("api/OficinaControl/GetDataGraphicsTable_ControlsBySlopes")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<TSISCOA_OficinaControl_DTO>))]
        public async Task<IHttpActionResult> GetDataGraphicsTable_ControlsBySlopes(int IDuserLogged)
        {
            var entities = await service.GetDataGraphicsTable_ControlsSlopes();
            if (entities == null)
                return NotFound();
            var DTO = entities.Select(x => _mapper.Map<TSISCOA_OficinaControl_DTO>(x));
            return Ok(DTO);
        }
        /// <summary>
        /// Obtiene la cantidad de controles que estan con dias extra
        /// </summary>
        /// <param name="IDuserLogged">Id del usuario loggeado</param>
        /// <returns>Lista de todos los registros</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        [Route("api/OficinaControl/GetDataGraphics_ControlsWithExtraDays")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<TSISCOA_DataGraphics>))]
        public async Task<IHttpActionResult> GetDataGraphics_ControlsWithExtraDays(int IDuserLogged)
        {
            var entities = await service.GetDataGraphics_ControlsWithExtraDays();
            if (entities == null)
                return NotFound();

            return Ok(entities);
        }
        /// <summary>
        /// Obtiene los datos de los controles que tienen dias extra
        /// </summary>
        /// <param name="IDuserLogged">Id del usuario loggeado</param>
        /// <returns>Lista de todos los registros</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        [Route("api/OficinaControl/GetDataGraphicsTable_ControlsWithExtraDays")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<TSISCOA_OficinaControl_DTO>))]
        public async Task<IHttpActionResult> GetDataGraphicsTable_ControlsWithExtraDays(int IDuserLogged)
        {
            var entities = await service.GetDataGraphicsTable_ControlsWithExtraDays();
            if (entities == null)
                return NotFound();
            var DTO = entities.Select(x => _mapper.Map<TSISCOA_OficinaControl_DTO>(x));
            return Ok(DTO);
        }
        /// <summary>
        /// Obtiene los controles de una oficina
        /// </summary>
        /// <remark>
        /// </remark>
        /// <param name="id">Id de la oficina</param>
        /// <param name="IDuserLogged">Id del usuario loggeado</param>
        /// <returns>Registro</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        /// <response code="404">NotFound. No se encontro el registro</response>
        [Route("api/OficinaControl/GetOfficeControlByIdOffice/{id}")]
        [HttpGet]
        [ResponseType(typeof(TSISCOA_OficinaControl_DTO))]
        public async Task<IHttpActionResult> GetOfficeControlByIdOffice(int id, int IDuserLogged)
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
        /// <param name="IDuserLogged">Id del usuario loggeado</param>
        /// <returns>Registro</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        /// <response code="404">NotFound. No se encontro el registro</response>
        [HttpGet]
        [ResponseType(typeof(TSISCOA_OficinaControl_DTO))]
        public async Task<IHttpActionResult> GetById(int id, int IDuserLogged)
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
        /// <param name="IDuserLogged">Id del usuario loggeado</param>
        /// <returns>Registro insertado</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        /// <response code="400">BadRequest. Consulta erronea</response>
        /// <response code="500">InternalServerError. Error con el servidor</response>
        [HttpPost]
        public async Task<IHttpActionResult> Post(TSISCOA_OficinaControl_DTO DTO, int IDuserLogged)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var entities = _mapper.Map<TSISCOA_OficinaControl>(DTO);
                entities = await service.Insert(entities);
                await activity.Insert(new TSISCOA_Actividad
                {
                    TC_Description = "Crear un relacion entre control y oficina",
                    TC_Accion = "Post",
                    TF_FechaAccion = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return Ok(entities);
            }
            catch (Exception ex) { return InternalServerError(ex); }
        }
        /// <summary>
        /// Actualiza un registro/completar control
        /// </summary>
        /// <param name="DTO">El objeto JSON del registro</param>
        /// <param name="id">Id del registro que quiere modificar</param>
        /// <param name="IDuserLogged">Id del usuario loggeado</param>
        /// <returns>Registro modificado</returns>
        /// <response code="200">OK. Devuelve el registro modificado</response>
        /// <response code="400">BadRequest. Consulta erronea</response>
        /// <response code="404">NotFound. No se encontro el registro</response>
        /// <response code="500">InternalServerError. Error con el servidor</response>
        [HttpPut]
        [ResponseType(typeof(TSISCOA_OficinaControl_DTO))]
        public async Task<IHttpActionResult> Put(TSISCOA_OficinaControl_DTO DTO, int id, int IDuserLogged)
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

                var files = DTO.Archivos;
                for (int i = 0; i < files.Count(); i++)
                {

                    var file = files.ElementAt(i);
                    var fileEntity = new TSISCOA_Archivo
                    {
                        ID = file.ID,
                        TC_Nombre = file.TC_Nombre,
                        TC_Datos = file.TC_Datos,
                        FK_TN_OficinaControl_SISCOA_Archivo = entities.ID
                    };
                    await fileService.Insert(fileEntity);
                }
                
                await activity.Insert(new TSISCOA_Actividad
                {
                    TC_Description = "Actualizar relacion entre control y oficina/completar control",
                    TC_Accion = "Put",
                    TF_FechaAccion = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return Ok(entities);
            }
            catch (Exception ex) { return InternalServerError(ex); }
        }
        /// <summary>
        /// Elimina un registro
        /// </summary>
        /// <param name="id">Id del registro que quiere eliminar</param>
        /// <param name="IDuserLogged">Id del usuario loggeado</param>
        /// <returns>OK</returns>
        /// <response code="200">OK. El registro fue eliminado</response>
        /// <response code="404">NotFound. No se encontro el registro</response>
        [HttpDelete]
        public async Task<IHttpActionResult> Delete(int id, int IDuserLogged)
        {
            var flag = await service.GetById(id);
            if (flag == null)
                return NotFound();

            try
            {
                await service.Delete(id);
                await activity.Insert(new TSISCOA_Actividad
                {
                    TC_Description = "Eliminar un relacion entre control y oficina",
                    TC_Accion = "Delete",
                    TF_FechaAccion = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return Ok();
            }
            catch (Exception ex) { return InternalServerError(ex); }
        }
    }
}
