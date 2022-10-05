using AutoMapper;
using Business.DTOs;
using Data.Data;
using Repositories.Repositories.Implements;
using Services.Services.Implements;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace SISCOA_API.Controllers
{
    public class ControlsController : ApiController
    {
        private IMapper _mapper;
        private readonly ControlService controlService = new ControlService(new ControlRepository(SISCOA_Context.Create()));

        public ControlsController() {
            this._mapper = WebApiApplication.MapperConfiguration.CreateMapper();
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetAll() {
            var controls = await controlService.GetAll();
            var controlDTO = controls.Select(x => _mapper.Map<TSISCOA_Control_DTO>(x));
            
            return Ok(controlDTO);
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetById(int id)
        {
            var control = await controlService.GetById(id);

            if (control == null) {
                return NotFound();
            }

            var controlDTO = _mapper.Map<TSISCOA_Control_DTO>(control);

            return Ok(controlDTO);
        }
    }
}
