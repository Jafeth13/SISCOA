using AutoMapper;
using Business.DTOs;
using Entities.Models;
using Entities.Util;
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
    public class OficinaControlesController : ApiController
    {
        private IMapper _mapper;
        private readonly OficinaControlService service = new OficinaControlService();
        private readonly ActividadService activity = new ActividadService();
        private readonly ArchivoService fileService = new ArchivoService();
        private readonly ErrorService error = new ErrorService();
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
            try
            {
                var entities = await service.GetAll();
                if (entities == null)
                    return NotFound();
                var DTO = entities.Select(x => _mapper.Map<TSISCOA_OficinaControl_DTO>(x));

                return Ok(DTO);
            }
            catch (Exception ex)
            {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "GetAll OficinaControl",
                    TF_FechaError = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return InternalServerError(ex);
            }
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
            try
            {
                var entities = await service.GetDataGraphics_ControlsByStates();
                if (entities == null)
                    return NotFound();

                return Ok(entities); 
            }
            catch (Exception ex)
            {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "GetDataGraphics_ControlsByStates OficinaControl",
                    TF_FechaError = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return InternalServerError(ex);
            }
        }
        /// <summary>
        /// Obtiene los controles que estan atrasados
        /// </summary>
        /// <param name="IDuserLogged">Id del usuario loggeado</param>
        /// <returns>Lista de todos los registros</returns>
        /// <response code="200">OK. Devuelve la lista de los registros</response>
        [Route("api/OficinaControl/GetData_ControlsByStateLate")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<TSISCOA_OficinaControl_DTO>))]
        public async Task<IHttpActionResult> GetData_ControlsByStateLate(int IDuserLogged)
        {
            try
            {
                var entities = await service.GetData_ControlsByStateLate();
                if (entities == null)
                    return NotFound();

                return Ok(entities);
            }
            catch (Exception ex)
            {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "GetDataGraphics_ControlsByStateLate OficinaControl",
                    TF_FechaError = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return InternalServerError(ex);
            }
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
            try
            {
                var entities = await service.GetDataGraphics_ControlsSlopes();
                if (entities == null)
                    return NotFound();

                return Ok(entities);
            }
            catch (Exception ex)
            {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "GetDataGraphics_ControlsBySlopes OficinaControl",
                    TF_FechaError = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return InternalServerError(ex);
            }
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
            try
            {
                var entities = await service.GetDataGraphicsTable_ControlsSlopes();
                if (entities == null)
                    return NotFound();
                var DTO = entities.Select(x => _mapper.Map<TSISCOA_OficinaControl_DTO>(x));
                return Ok(DTO);
            }
            catch (Exception ex)
            {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "GetDataGraphicsTable_ControlsBySlopes OficinaControl",
                    TF_FechaError = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return InternalServerError(ex);
            }
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
            try
            {
                var entities = await service.GetDataGraphics_ControlsWithExtraDays();
                if (entities == null)
                    return NotFound();

                return Ok(entities);
            }
            catch (Exception ex)
            {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "GetDataGraphics_ControlsWithExtraDays OficinaControl",
                    TF_FechaError = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return InternalServerError(ex);
            }
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
            try
            {
                var entities = await service.GetDataGraphicsTable_ControlsWithExtraDays();
                if (entities == null)
                    return NotFound();
                var DTO = entities.Select(x => _mapper.Map<TSISCOA_OficinaControl_DTO>(x));
                return Ok(DTO);
            }
            catch (Exception ex)
            {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "GetDataGraphicsTable_ControlsWithExtraDays OficinaControl",
                    TF_FechaError = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return InternalServerError(ex);
            }
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
            try
            {
                var entities = await service.GetOfficeControlByIdOffice(id);
                if (entities == null)
                    return NotFound();

                return Ok(entities);
            }
            catch (Exception ex)
            {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "GetOfficeControlByIdOffice OficinaControl",
                    TF_FechaError = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return InternalServerError(ex);
            }
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
            try
            {
                var entities = await service.GetById(id);
                if (entities == null)
                    return NotFound();

                var DTO = _mapper.Map<TSISCOA_OficinaControl_DTO>(entities);
                return Ok(DTO);
            }
            catch (Exception ex)
            {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "GetById OficinaControl",
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
        public async Task<IHttpActionResult> Post(TSISCOA_OficinaControl_DTO DTO, int IDuserLogged)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (DTO.FK_TN_PERIODO_SISCOA_OficinaControl == 0)
                return BadRequest("Object id does not match period id");

            try
            {
                var entities = _mapper.Map<TSISCOA_OficinaControl>(DTO);
                
                DateTime date = DateTime.Now;
                entities.TF_FechaInicio = date;
                //Periodo mensual
                if (entities.FK_TN_PERIODO_SISCOA_OficinaControl == 1)
                {
                    entities.TF_FechaFin = new DateTime(date.Year, date.Month,1).AddMonths(1).AddDays(4);
                }
                //Periodo bimensual
                else if (entities.FK_TN_PERIODO_SISCOA_OficinaControl == 2)
                {
                    entities.TF_FechaFin = new DateTime(date.Year, date.Month, 1).AddMonths(2).AddDays(4);
                }
                //Periodo Trimestral
                else if (entities.FK_TN_PERIODO_SISCOA_OficinaControl == 3)
                {
                    entities.TF_FechaFin = new DateTime(date.Year, date.Month, 1).AddMonths(3).AddDays(4);
                }
                //Periodo Cuatrimestral
                else if (entities.FK_TN_PERIODO_SISCOA_OficinaControl == 4)
                {
                    entities.TF_FechaFin = new DateTime(date.Year, date.Month, 1).AddMonths(4).AddDays(4);
                }
                //Periodo Semestral
                else if (entities.FK_TN_PERIODO_SISCOA_OficinaControl == 5)
                {
                    entities.TF_FechaFin = new DateTime(date.Year, date.Month, 1).AddMonths(6).AddDays(4);
                }
                //Periodo Anual
                else if (entities.FK_TN_PERIODO_SISCOA_OficinaControl == 6)
                {
                    entities.TF_FechaFin = new DateTime(date.Year, date.Month, 1).AddMonths(12).AddDays(4);
                }

                entities = await service.Insert(entities);
                await activity.Insert(new TSISCOA_Actividad
                {
                    TC_Description = "Crea una relacion entre control y oficina",
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
                    TC_UltimaAccion = "Post OficinaControl",
                    TF_FechaError = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return InternalServerError(ex);
            }
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

                DateTime date = DateTime.Now;
                entities.TF_FechaInicio = date;
                //Periodo mensual
                if (entities.FK_TN_PERIODO_SISCOA_OficinaControl == 1)
                {
                    entities.TF_FechaFin = new DateTime(date.Year, date.Month, 1).AddMonths(1).AddDays(4);
                }
                //Periodo bimensual
                else if (entities.FK_TN_PERIODO_SISCOA_OficinaControl == 2)
                {
                    entities.TF_FechaFin = new DateTime(date.Year, date.Month, 1).AddMonths(2).AddDays(4);
                }
                //Periodo Trimestral
                else if (entities.FK_TN_PERIODO_SISCOA_OficinaControl == 3)
                {
                    entities.TF_FechaFin = new DateTime(date.Year, date.Month, 1).AddMonths(3).AddDays(4);
                }
                //Periodo Cuatrimestral
                else if (entities.FK_TN_PERIODO_SISCOA_OficinaControl == 4)
                {
                    entities.TF_FechaFin = new DateTime(date.Year, date.Month, 1).AddMonths(4).AddDays(4);
                }
                //Periodo Semestral
                else if (entities.FK_TN_PERIODO_SISCOA_OficinaControl == 5)
                {
                    entities.TF_FechaFin = new DateTime(date.Year, date.Month, 1).AddMonths(6).AddDays(4);
                }
                //Periodo Anual
                else if (entities.FK_TN_PERIODO_SISCOA_OficinaControl == 6)
                {
                    entities.TF_FechaFin = new DateTime(date.Year, date.Month, 1).AddMonths(12).AddDays(4);
                }

                if (entities.TN_DiasExtra > 0)
                {
                    entities.TF_FechaFin_DiasExtra = new DateTime(entities.TF_FechaFin.Year, entities.TF_FechaFin.Month, entities.TF_FechaFin.Day).AddDays(entities.TN_DiasExtra);
                }

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
            catch (Exception ex) {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "Put OficinaControl",
                    TF_FechaError = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return InternalServerError(ex);
            }
        }
        /// <summary>
        /// Restablece el control
        /// </summary>
        /// <param name="DTO">El objeto JSON del registro</param>
        /// <param name="id">Id del registro que quiere modificar</param>
        /// <param name="IDuserLogged">Id del usuario loggeado</param>
        /// <returns>Registro modificado</returns>
        /// <response code="200">OK. Devuelve el registro modificado</response>
        /// <response code="400">BadRequest. Consulta erronea</response>
        /// <response code="404">NotFound. No se encontro el registro</response>
        /// <response code="500">InternalServerError. Error con el servidor</response>
        [Route("api/OficinaControl/RestoreOficinaControlById/{id}")]
        [HttpPut]
        [ResponseType(typeof(TSISCOA_OficinaControl_DTO))]
        public async Task<IHttpActionResult> RestoreOficinaControlById(TSISCOA_OficinaControl_DTO DTO, int id, int IDuserLogged)
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

                DateTime date = DateTime.Now;
                entities.TF_FechaInicio = date;
                //Periodo mensual
                if (entities.FK_TN_PERIODO_SISCOA_OficinaControl == 1)
                {
                    entities.TF_FechaFin = new DateTime(date.Year, date.Month, 1).AddMonths(1).AddDays(4);
                }
                //Periodo bimensual
                else if (entities.FK_TN_PERIODO_SISCOA_OficinaControl == 2)
                {
                    entities.TF_FechaFin = new DateTime(date.Year, date.Month, 1).AddMonths(2).AddDays(4);
                }
                //Periodo Trimestral
                else if (entities.FK_TN_PERIODO_SISCOA_OficinaControl == 3)
                {
                    entities.TF_FechaFin = new DateTime(date.Year, date.Month, 1).AddMonths(3).AddDays(4);
                }
                //Periodo Cuatrimestral
                else if (entities.FK_TN_PERIODO_SISCOA_OficinaControl == 4)
                {
                    entities.TF_FechaFin = new DateTime(date.Year, date.Month, 1).AddMonths(4).AddDays(4);
                }
                //Periodo Semestral
                else if (entities.FK_TN_PERIODO_SISCOA_OficinaControl == 5)
                {
                    entities.TF_FechaFin = new DateTime(date.Year, date.Month, 1).AddMonths(6).AddDays(4);
                }
                //Periodo Anual
                else if (entities.FK_TN_PERIODO_SISCOA_OficinaControl == 6)
                {
                    entities.TF_FechaFin = new DateTime(date.Year, date.Month, 1).AddMonths(12).AddDays(4);
                }

                entities = await service.Update(entities);

                await activity.Insert(new TSISCOA_Actividad
                {
                    TC_Description = "Restablece control de oficina",
                    TC_Accion = "RestoreOficinaControlById",
                    TF_FechaAccion = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return Ok(entities);
            }
            catch (Exception ex)
            {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "RestoreOficinaControlById OficinaControl",
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
            try
            {
                var flag = await service.GetById(id);
                if (flag == null)
                    return NotFound();

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
            catch (Exception ex) {
                await error.Insert(new TSISCOA_Error
                {
                    TC_Description = ex.Message,
                    TC_UltimaAccion = "Delete OficinaControl",
                    TF_FechaError = DateTime.Now,
                    FK_ID_UsuarioActivo = IDuserLogged
                });
                return InternalServerError(ex);
            }
        }
    }
}
