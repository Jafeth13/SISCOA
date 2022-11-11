using AutoMapper;
using Business.DTOs;
using Entities.Models;
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
    public class RolesController : ApiController
    {
        private IMapper _mapper;
        private readonly RolService service = new RolService();
        private readonly ActividadService activity = new ActividadService();
        private readonly ErrorService error = new ErrorService();
        /// <summary>
        /// Constructor
        /// </summary>
        public RolesController()
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
        [ResponseType(typeof(IEnumerable<TSISCOA_Rol_DTO>))]
        public async Task<IHttpActionResult> GetAll(int IDuserLogged)
        {
            try
            {
                var entities = await service.GetAll();
                var DTO = entities.Select(x => _mapper.Map<TSISCOA_Rol_DTO>(x));

                return Ok(DTO);
            }
            catch (Exception ex)
            {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "GetAll Roles",
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
        [ResponseType(typeof(TSISCOA_Rol_DTO))]
        public async Task<IHttpActionResult> GetById(int id, int IDuserLogged)
        {
            try
            {
                var entities = await service.GetById(id);
                if (entities == null)
                    return NotFound();

                var DTO = _mapper.Map<TSISCOA_Rol_DTO>(entities);

                return Ok(DTO);
            }
            catch (Exception ex)
            {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "GetById Roles",
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
        public async Task<IHttpActionResult> Post(TSISCOA_Rol_DTO DTO, int IDuserLogged)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var entities = _mapper.Map<TSISCOA_Rol>(DTO);
                entities = await service.Insert(entities);
                await activity.Insert(new TSISCOA_Actividad
                {
                    TC_Description = "Crear rol: " + DTO.TC_Nombre,
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
                    TC_UltimaAccion = "Post Roles",
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
        [ResponseType(typeof(TSISCOA_Rol_DTO))]
        public async Task<IHttpActionResult> Put(TSISCOA_Rol_DTO DTO, int id, int IDuserLogged)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (DTO.ID != id)
                return BadRequest("Object id does not match route id");

            var flag = await service.GetById(id);
            await activity.Insert(new TSISCOA_Actividad
            {
                TC_Description = "Actualizar rol: " + DTO.TC_Nombre,
                TC_Accion = "Put",
                TF_FechaAccion = DateTime.Now,
                FK_ID_UsuarioActivo = IDuserLogged
            });
            if (flag == null)
                return NotFound();

            try
            {
                var entities = _mapper.Map<TSISCOA_Rol>(DTO);
                entities = await service.Update(entities);
                return Ok(entities);
            }
            catch (Exception ex) {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "Put Roles",
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
                        TC_Description = "Eliminar rol: " + flag.TC_Nombre,
                        TC_Accion = "Delete",
                        TF_FechaAccion = DateTime.Now,
                        FK_ID_UsuarioActivo = IDuserLogged
                    });
                }
                else{
                    throw new Exception("This Rol have foreign key references with table RolPermiso or Usuario");
                }
                return Ok();
            }
            catch (Exception ex) {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "Delete Roles",
                    TF_FechaError = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return InternalServerError(ex);
            }
        }
    }
}
