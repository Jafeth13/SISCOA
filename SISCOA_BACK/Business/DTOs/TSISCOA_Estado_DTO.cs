using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Business.DTOs
{
    public class TSISCOA_Estado_DTO
    {
        public int ID { get; set; }
        [Required(ErrorMessage = "The field TC_Nombre is required")]
        [StringLength(50)]
        public string TC_Nombre { get; set; }
        [Description("Register is active")]
        [DefaultValue(true)]
        public bool TB_EstaActivo { get; set; }
        [Description("Register is deleted")]
        [DefaultValue(false)]
        public bool TB_EstaBorrado { get; set; }
        [Required(ErrorMessage = "The field TC_UltimaModificacion is required")]
        [StringLength(50)]
        public string TC_UltimaModificacion { get; set; }
        [Required(ErrorMessage = "The field TF_UltimaFechaModificacion is required")]
        public DateTime TF_UltimaFechaModificacion { get; set; }
    }
}
