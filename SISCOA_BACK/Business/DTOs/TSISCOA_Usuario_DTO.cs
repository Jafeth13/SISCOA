using System;
using System.ComponentModel.DataAnnotations;

namespace Business.DTOs
{
    public class TSISCOA_Usuario_DTO
    {
        [Required(ErrorMessage = "The field ID is required")]
        public int ID { get; set; }
        [Required(ErrorMessage = "The field TC_Nombre is required")]
        [StringLength(50)]
        public string TC_Nombre { get; set; }
        [Required(ErrorMessage = "The field TC_PrimerApellido is required")]
        [StringLength(50)]
        public string TC_PrimerApellido { get; set; }
        [Required(ErrorMessage = "The field TC_SegundoApellido is required")]
        [StringLength(50)]
        public string TC_SegundoApellido { get; set; }
        [Required(ErrorMessage = "The field TV_Contrasenna is required")]
        [StringLength(255)]
        public byte[] TV_Contrasenna { get; set; }
        [Required(ErrorMessage = "The field TC_Correo is required")]
        [StringLength(50)]
        public string TC_Correo { get; set; }
        [Required(ErrorMessage = "The field FK_SISCOA_Oficina_SISCOA_Usuario is required")]
        public int FK_SISCOA_Oficina_SISCOA_Usuario { get; set; }
        [Required(ErrorMessage = "The field FK_SISCOA_Rol_SISCOA_Usuario is required")]
        public int FK_SISCOA_Rol_SISCOA_Usuario { get; set; }
        [Required(ErrorMessage = "The field TB_EstaActivo is required")]
        public bool TB_EstaActivo { get; set; }
        [Required(ErrorMessage = "The field TB_EstaBorrado is required")]
        public bool TB_EstaBorrado { get; set; }
        [Required(ErrorMessage = "The field TC_UltimaModificacion is required")]
        [StringLength(50)]
        public string TC_UltimaModificacion { get; set; }
        [Required(ErrorMessage = "The field TF_UltimaFechaModificacion is required")]
        public DateTime TF_UltimaFechaModificacion { get; set; }
        [Required(ErrorMessage = "The field TSISCOA_Oficina is required")]
        public TSISCOA_Oficina_DTO TSISCOA_Oficina { get; set; }
        [Required(ErrorMessage = "The field TSISCOA_Rol is required")]
        public TSISCOA_Rol_DTO TSISCOA_Rol { get; set; }
    }
}
