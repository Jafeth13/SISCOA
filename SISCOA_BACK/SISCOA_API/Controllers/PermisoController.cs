using AutoMapper;
using Business.DTOs;
using Entities.Models;
using Security.Security.Implements;
using Services.Services.Implements;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace SISCOA_API.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    public class PermisoController : ApiController
    {
        private IMapper _mapper;
        private readonly PermisoService service = new PermisoService();
        private readonly ActividadService activity = new ActividadService();
        private readonly ErrorService error = new ErrorService();
        /// <summary>
        /// Constructor
        /// </summary>
        public PermisoController()
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
        [ResponseType(typeof(IEnumerable<TSISCOA_Permiso_DTO>))]
        public async Task<IHttpActionResult> GetAll(int IDuserLogged)
        {
            try
            {
                var entities = await service.GetAll();
                var DTO = entities.Select(x => _mapper.Map<TSISCOA_Permiso_DTO>(x));

                return Ok(DTO);
            }
            catch (Exception ex)
            {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "GetAll Permisos",
                    TF_FechaError = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return InternalServerError(ex);
            }
        }
        /// <summary>
        /// Obtiene un registro por su id
        /// </summary>
        /// <param name="IDuserLogged">Id del usuario loggeado</param>
        /// <remark>
        /// </remark>
        /// <param name="id">Id del registro</param>
        /// <returns>Registro</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        /// <response code="404">NotFound. No se encontro el registro</response>
        [HttpGet]
        [ResponseType(typeof(TSISCOA_Permiso_DTO))]
        public async Task<IHttpActionResult> GetById(int id, int IDuserLogged)
        {
            try
            {
                var entities = await service.GetById(id);
                if (entities == null)
                    return NotFound();

                var DTO = _mapper.Map<TSISCOA_Permiso_DTO>(entities);

                return Ok(DTO);
            }
            catch (Exception ex)
            {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "GetById Permisos",
                    TF_FechaError = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return InternalServerError(ex);
            }
        }
        /// <summary>
        /// Obtiene todos los permisos que tiene el rol ingresado
        /// </summary>
        /// <remark>
        /// </remark>
        /// <param name="id">Id del registro</param>
        /// <param name="IDuserLogged">Id del usuario loggeado</param>
        /// <returns>Registro</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        /// <response code="404">NotFound. No se encontro el registro</response>
        [Route("api/Controls/GetPermisosByRol/{id}")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<TSISCOA_Permiso_DTO>))]
        public async Task<IHttpActionResult> GetPermisosByRol(int id, int IDuserLogged)
        {
            try
            {
                var entities = await service.GetPermisosByRol(id);
                if (entities == null)
                    return NotFound();

                var DTO = entities.Select(x => _mapper.Map<TSISCOA_Permiso_DTO>(x));

                return Ok(DTO);
            }
            catch (Exception ex)
            {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "GetPermisosByRol Permisos",
                    TF_FechaError = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return InternalServerError(ex);
            }
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
        public async Task<IHttpActionResult> Post(TSISCOA_Permiso_DTO DTO, int IDuserLogged)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var entities = _mapper.Map<TSISCOA_Permiso>(DTO);
                entities = await service.Insert(entities);
                await activity.Insert(new TSISCOA_Actividad
                {
                    TC_Description = "Crear un permiso: "+ DTO.TC_Nombre,
                    TC_Accion = "Post",
                    TF_FechaAccion = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return Ok(entities);
            }
            catch (Exception ex) {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "Post Permisos",
                    TF_FechaError = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return InternalServerError(ex);
            }
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
        [ResponseType(typeof(TSISCOA_Permiso_DTO))]
        public async Task<IHttpActionResult> Put(TSISCOA_Permiso_DTO DTO, int id, int IDuserLogged)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (DTO.ID != id)
                return BadRequest("Object id does not match route id");

            var flag = await service.GetById(id);
            await activity.Insert(new TSISCOA_Actividad
            {
                TC_Description = "Actualizar un permiso: " + DTO.TC_Nombre,
                TC_Accion = "Put",
                TF_FechaAccion = DateTime.Now,
                FK_ID_UsuarioActivo = IDuserLogged
            });
            if (flag == null)
                return NotFound();

            try
            {
                var entities = _mapper.Map<TSISCOA_Permiso>(DTO);
                entities = await service.Update(entities);
                return Ok(entities);
            }
            catch (Exception ex) {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "Put Permisos",
                    TF_FechaError = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return InternalServerError(ex);
            }
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
                if (!await service.DeletedCheckOnEntity(id))
                {
                    await service.Delete(id);
                    await activity.Insert(new TSISCOA_Actividad
                    {
                        TC_Description = "Eliminar un permiso: " + flag.TC_Nombre,
                        TC_Accion = "Delete",
                        TF_FechaAccion = DateTime.Now,
                        FK_ID_UsuarioActivo = IDuserLogged
                    });
                }
                else
                {
                    throw new Exception("This Permiso have foreign key references with table RolPermiso");
                }
                return Ok();
            }
            catch (Exception ex) {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "Delete Permisos",
                    TF_FechaError = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return InternalServerError(ex);
            }
        }
    }
}
