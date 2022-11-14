using Entities.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System;
using System.ComponentModel.DataAnnotations;

namespace Business.DTOs
{
    public class TSISCOA_RolPermiso_DTO
    {
        public int ID { get; set; }
        [Required(ErrorMessage = "The field FK_SISCOA_Rol_SISCOA_RolPermiso is required")]
        public int FK_SISCOA_Rol_SISCOA_RolPermiso { get; set; }
        [Required(ErrorMessage = "The field FK_SISCOA_Permiso_SISCOA_RolPermiso is required")]
        public int FK_SISCOA_Permiso_SISCOA_RolPermiso { get; set; }
        public virtual TSISCOA_Permiso_DTO TSISCOA_Permiso { get; set; }
        public virtual TSISCOA_Rol_DTO TSISCOA_Rol { get; set; }
    }
}
