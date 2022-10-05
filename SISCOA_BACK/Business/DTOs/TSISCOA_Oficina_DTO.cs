using System;
using System.ComponentModel.DataAnnotations;

namespace Business.DTOs
{
    public class TSISCOA_Oficina_DTO
    {
        [Required(ErrorMessage = "The field ID is required")]
        public int ID { get; set; }
        [Required(ErrorMessage = "The field TC_CodigoOficina is required")]
        [StringLength(25)]
        public string TC_CodigoOficina { get; set; }
        [Required(ErrorMessage = "The field TC_Nombre is required")]
        [StringLength(50)]
        public string TC_Nombre { get; set; }
        [Required(ErrorMessage = "The field TC_Institucion is required")]
        [StringLength(50)]
        public string TC_Institucion { get; set; }
        [Required(ErrorMessage = "The field TB_EstadoActividad is required")]
        public bool TB_EstadoActividad { get; set; }
        [Required(ErrorMessage = "The field TB_EstaActivo is required")]
        public bool TB_EstaActivo { get; set; }
        [Required(ErrorMessage = "The field TB_EstaBorrado is required")]
        public bool TB_EstaBorrado { get; set; }
        [Required(ErrorMessage = "The field TC_UltimaModificacion is required")]
        [StringLength(50)]
        public string TC_UltimaModificacion { get; set; }
        [Required(ErrorMessage = "The field TF_UltimaFechaModificacion is required")]
        public DateTime TF_UltimaFechaModificacion { get; set; }
        [Required(ErrorMessage = "The field OficinaControls is required")]
        public TSISCOA_OficinaControl_DTO OficinaControl { get; set; }
        [Required(ErrorMessage = "The field Usuarios is required")]
        public TSISCOA_Usuario_DTO Usuario { get; set; }
    }
}
