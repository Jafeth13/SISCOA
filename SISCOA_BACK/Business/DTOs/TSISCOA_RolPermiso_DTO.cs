using Entities.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System;
using System.ComponentModel.DataAnnotations;

namespace Business.DTOs
{
    public class TSISCOA_RolPermiso_DTO
    {
        [Required(ErrorMessage = "The field ID is required")]
        public int ID { get; set; }
        [Required(ErrorMessage = "The field FK_SISCOA_Rol_SISCOA_RolPermiso is required")]
        public int FK_SISCOA_Rol_SISCOA_RolPermiso { get; set; }
        [Required(ErrorMessage = "The field FK_SISCOA_Permiso_SISCOA_RolPermiso is required")]
        public int FK_SISCOA_Permiso_SISCOA_RolPermiso { get; set; }
        [Required(ErrorMessage = "The field TB_EstaActivo is required")]
        public bool TB_EstaActivo { get; set; }
        [Required(ErrorMessage = "The field TB_EstaBorrado is required")]
        public bool TB_EstaBorrado { get; set; }
        [Required(ErrorMessage = "The field TC_UltimaModificacion is required")]
        [StringLength(50)]
        public string TC_UltimaModificacion { get; set; }
        [Required(ErrorMessage = "The field TF_UltimaFechaModificacion is required")]
        public DateTime TF_UltimaFechaModificacion { get; set; }
        [Required(ErrorMessage = "The field TSISCOA_Permiso is required")]
        public TSISCOA_Permiso_DTO TSISCOA_Permiso { get; set; }
        [Required(ErrorMessage = "The field TSISCOA_Rol is required")]
        public TSISCOA_Rol_DTO TSISCOA_Rol { get; set; }
    }
}
