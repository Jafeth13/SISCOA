using AutoMapper;
using Business.DTOs;
using Entities.Models;
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
    public class OficinasController : ApiController
    {
        private IMapper _mapper;
        private readonly OficinaService service = new OficinaService();
        private readonly ActividadService activity = new ActividadService();
        private readonly PrivilegesModule permission = new PrivilegesModule();
        /// <summary>
        /// Constructor
        /// </summary>
        public OficinasController()
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
        [ResponseType(typeof(IEnumerable<TSISCOA_Oficina_DTO>))]
        public async Task<IHttpActionResult> GetAll(int IDuserLogged)
        {
            if (!await permission.VerifyPrivilegesRolUser(IDuserLogged, "Puede consultar Registros"))
            {
                return Content(HttpStatusCode.Unauthorized, "No tienes permisos para realizar esta acción");
            }
            var entities = await service.GetAll();
            await activity.Insert(new TSISCOA_Actividad
            {
                TC_Description = "Obtener todas las oficinas",
                TC_Accion = "GetAll",
                TF_FechaAccion = DateTime.Now,
                FK_ID_UsuarioActivo = IDuserLogged
            });
            var DTO = entities.Select(x => _mapper.Map<TSISCOA_Oficina_DTO>(x));

            return Ok(DTO);
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
        [ResponseType(typeof(TSISCOA_Oficina_DTO))]
        public async Task<IHttpActionResult> GetById(int id, int IDuserLogged)
        {
            if (!await permission.VerifyPrivilegesRolUser(IDuserLogged, "Puede consultar Registros"))
            {
                return Content(HttpStatusCode.Unauthorized, "No tienes permisos para realizar esta acción");
            }
            var entities = await service.GetById(id);
            await activity.Insert(new TSISCOA_Actividad
            {
                TC_Description = "Obtener oficina por id: " + id,
                TC_Accion = "GetById",
                TF_FechaAccion = DateTime.Now,
                FK_ID_UsuarioActivo = IDuserLogged
            });
            if (entities == null)
                return NotFound();

            var DTO = _mapper.Map<TSISCOA_Oficina_DTO>(entities);

            return Ok(DTO);
        }
        /// <summary>
        /// Obtiene todas las oficinas que tienen el control ingresado
        /// </summary>
        /// <param name="IDuserLogged">Id del usuario loggeado</param>
        /// <remark>
        /// </remark>
        /// <param name="id">Id del registro</param>
        /// <returns>Registro</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        /// <response code="404">NotFound. No se encontro el registro</response>
        [Route("api/Oficinas/GetOficinasByControl/{id}")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<TSISCOA_Oficina_DTO>))]
        public async Task<IHttpActionResult> GetOficinasByControl(int id, int IDuserLogged)
        {
            if (!await permission.VerifyPrivilegesRolUser(IDuserLogged, "Puede consultar Registros"))
            {
                return Content(HttpStatusCode.Unauthorized, "No tienes permisos para realizar esta acción");
            }
            var entities = await service.GetOficinasByControl(id);
            await activity.Insert(new TSISCOA_Actividad
            {
                TC_Description = "Obtener todas las oficinas que tienen el control: " + id,
                TC_Accion = "GetOficinasByControl",
                TF_FechaAccion = DateTime.Now,
                FK_ID_UsuarioActivo = IDuserLogged
            });
            if (entities == null)
                return NotFound();

            var DTO = entities.Select(x => _mapper.Map<TSISCOA_Oficina_DTO>(x));

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
        public async Task<IHttpActionResult> Post(TSISCOA_Oficina_DTO DTO, int IDuserLogged)
        {
            if (!await permission.VerifyPrivilegesRolUser(IDuserLogged, "Puede crear Registros"))
            {
                return Content(HttpStatusCode.Unauthorized, "No tienes permisos para realizar esta acción");
            }
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var entities = _mapper.Map<TSISCOA_Oficina>(DTO);
                entities = await service.Insert(entities);
                await activity.Insert(new TSISCOA_Actividad
                {
                    TC_Description = "Crear oficina: " + DTO.TC_Nombre,
                    TC_Accion = "Post",
                    TF_FechaAccion = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return Ok(entities);
            }
            catch (Exception ex) { return InternalServerError(ex); }
        }
        /// <summary>
        /// Actualiza un registro
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
        [ResponseType(typeof(TSISCOA_Oficina_DTO))]
        public async Task<IHttpActionResult> Put(TSISCOA_Oficina_DTO DTO, int id, int IDuserLogged)
        {
            if (!await permission.VerifyPrivilegesRolUser(IDuserLogged, "Puede actualizar Registros"))
            {
                return Content(HttpStatusCode.Unauthorized, "No tienes permisos para realizar esta acción");
            }
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (DTO.ID != id)
                return BadRequest("Object id does not match route id");

            var flag = await service.GetById(id);
            if (flag == null)
                return NotFound();

            try
            {
                var entities = _mapper.Map<TSISCOA_Oficina>(DTO);
                entities = await service.Update(entities);
                await activity.Insert(new TSISCOA_Actividad
                {
                    TC_Description = "Actualizar oficina: " + DTO.TC_Nombre,
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
            if (!await permission.VerifyPrivilegesRolUser(IDuserLogged, "Puede eliminar Registros"))
            {
                return Content(HttpStatusCode.Unauthorized, "No tienes permisos para realizar esta acción");
            }
            var flag = await service.GetById(id);
            if (flag == null)
                return NotFound();

            try
            {
                if (!await service.DeletedCheckOnEntity(id))
                {
                    await service.Delete(id);
                    await activity.Insert(new TSISCOA_Actividad
                    {
                        TC_Description = "Eliminar oficina: " + flag.TC_Nombre,
                        TC_Accion = "Delete",
                        TF_FechaAccion = DateTime.Now,
                        FK_ID_UsuarioActivo = IDuserLogged
                    });
                }
                else
                {
                    throw new Exception("This Oficina have foreign key references with table OficinaControl or Usuarios");
                }
                return Ok();
            }
            catch (Exception ex) { return InternalServerError(ex); }
        }
    }
}
