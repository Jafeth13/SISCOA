using AutoMapper;
using Entities.Models;

namespace Business.DTOs
{
    public class MapperConfig
    {
        public static MapperConfiguration MapperConfiguration()
        {
            return new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<TSISCOA_Control, TSISCOA_Control_DTO>(); //GET
                cfg.CreateMap<TSISCOA_Control_DTO, TSISCOA_Control>(); //POST-PUT

                cfg.CreateMap<TSISCOA_Estado, TSISCOA_Estado_DTO>();
                cfg.CreateMap<TSISCOA_Estado_DTO, TSISCOA_Estado>();

                cfg.CreateMap<TSISCOA_Oficina, TSISCOA_Oficina_DTO>();
                cfg.CreateMap<TSISCOA_Oficina_DTO, TSISCOA_Oficina>();

                cfg.CreateMap<TSISCOA_OficinaControl, TSISCOA_OficinaControl_DTO>();
                cfg.CreateMap<TSISCOA_OficinaControl_DTO, TSISCOA_OficinaControl>();

                cfg.CreateMap<TSISCOA_Periodo, TSISCOA_Periodo_DTO>();
                cfg.CreateMap<TSISCOA_Periodo_DTO, TSISCOA_Periodo>();

                cfg.CreateMap<TSISCOA_Permiso, TSISCOA_Permiso_DTO>(); 
                cfg.CreateMap<TSISCOA_Permiso_DTO, TSISCOA_Permiso>(); 

                cfg.CreateMap<TSISCOA_Rol, TSISCOA_Rol_DTO>(); 
                cfg.CreateMap<TSISCOA_Rol_DTO, TSISCOA_Rol>();

                cfg.CreateMap<TSISCOA_RolPermiso, TSISCOA_RolPermiso_DTO>();
                cfg.CreateMap<TSISCOA_RolPermiso_DTO, TSISCOA_RolPermiso>();

                cfg.CreateMap<TSISCOA_Usuario, TSISCOA_Usuario_DTO>();
                cfg.CreateMap<TSISCOA_Usuario_DTO, TSISCOA_Usuario>();

            });
        }
    }
}
