using System;
using System.ComponentModel.DataAnnotations;

namespace Business.DTOs
{
    public class TSISCOA_Rol_DTO
    {
        [Required(ErrorMessage = "The field ID is required")]
        public int ID { get; set; }
        [Required(ErrorMessage = "The field TC_Nombre is required")]
        [StringLength(50)]
        public string TC_Nombre { get; set; }
        [Required(ErrorMessage = "The field TB_EstaActivo is required")]
        public bool TB_EstaActivo { get; set; }
        [Required(ErrorMessage = "The field TB_EstaBorrado is required")]
        public bool TB_EstaBorrado { get; set; }
        [Required(ErrorMessage = "The field TC_UltimaModificacion is required")]
        [StringLength(50)]
        public string TC_UltimaModificacion { get; set; }
        [Required(ErrorMessage = "The field TF_UltimaFechaModificacion is required")]
        public DateTime TF_UltimaFechaModificacion { get; set; }
        [Required(ErrorMessage = "The field TSISCOA_RolPermiso is required")]
        
        public TSISCOA_RolPermiso_DTO TSISCOA_RolPermiso { get; set; }
        [Required(ErrorMessage = "The field TSISCOA_Usuario is required")]
        public TSISCOA_Usuario_DTO TSISCOA_Usuario { get; set; }
    }
}
