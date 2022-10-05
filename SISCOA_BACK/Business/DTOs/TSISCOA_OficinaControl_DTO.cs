using System;
using System.ComponentModel.DataAnnotations;

namespace Business.DTOs
{
    public class TSISCOA_OficinaControl_DTO
    {
        [Required(ErrorMessage = "The field ID is required")]
        public int ID { get; set; }
        [Required(ErrorMessage = "The field FK_SISCOA_CONTROL_SISCOA_OficinaControl is required")]
        public int FK_SISCOA_CONTROL_SISCOA_OficinaControl { get; set; }
        [Required(ErrorMessage = "The field FK_SISCOA_OFICINA_SISCOA_OficinaControl is required")]
        public int FK_SISCOA_OFICINA_SISCOA_OficinaControl { get; set; }
        [Required(ErrorMessage = "The field TB_EstaActivo is required")]
        public bool TB_EstaActivo { get; set; }
        [Required(ErrorMessage = "The field TB_EstaBorrado is required")]
        public bool TB_EstaBorrado { get; set; }
        [Required(ErrorMessage = "The field TC_UltimaModificacion is required")]
        [StringLength(50)]
        public string TC_UltimaModificacion { get; set; }
        [Required(ErrorMessage = "The field TF_UltimaFechaModificacion is required")]
        public DateTime TF_UltimaFechaModificacion { get; set; }
        [Required(ErrorMessage = "The field Control is required")]
        public TSISCOA_Control_DTO Control { get; set; }
        [Required(ErrorMessage = "The field Oficina is required")]
        public TSISCOA_Oficina_DTO Oficina { get; set; }
    }
}
