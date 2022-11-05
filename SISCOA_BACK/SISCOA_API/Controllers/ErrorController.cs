using AutoMapper;
using Business.DTOs;
using Entities.Models;
using Security.Security.Implements;
using Services.Services.Implements;
using System;
using System.Collections.Generic;
using System.Diagnostics;
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
    public class ErrorController : ApiController
    {
        private IMapper _mapper;
        private readonly ErrorService service = new ErrorService();
        private readonly ActividadService activity = new ActividadService();
        /// <summary>
        /// Constructor
        /// </summary>
        public ErrorController()
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
        [ResponseType(typeof(IEnumerable<TSISCOA_Error_DTO>))]
        public async Task<IHttpActionResult> GetAll(int IDuserLogged)
        {
            var entities = await service.GetAll();
            var DTO = entities.Select(x => _mapper.Map<TSISCOA_Error_DTO>(x));

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
        public async Task<IHttpActionResult> Post(TSISCOA_Error_DTO DTO)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var entities = _mapper.Map<TSISCOA_Error>(DTO);
                entities = await service.Insert(entities);             
                return Ok(entities);
            }
            catch (Exception ex) { return InternalServerError(ex); }
        }
    }
}
