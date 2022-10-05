using Entities.Models;
using System;
using System.ComponentModel.DataAnnotations;

namespace Business.DTOs
{
    public class TSISCOA_Control_DTO
    {
        [Required(ErrorMessage = "The field ID is required")]
        public int ID { get; set; }
        [Required(ErrorMessage = "The field TC_Nombre is required")]
        [StringLength(50)]
        public string TC_Nombre { get; set; }
        [Required(ErrorMessage = "The field TC_DescriptionDocumentacionEvidencia is required")]
        [StringLength(255)]
        public string TC_DescriptionDocumentacionEvidencia { get; set; }
        [Required(ErrorMessage = "The field TB_NotificacionCorreoAColaborador is required")]
        public bool TB_NotificacionCorreoAColaborador { get; set; }
        [Required(ErrorMessage = "The field TB_EstaActivo is required")]
        public bool TB_EstaActivo { get; set; }
        [Required(ErrorMessage = "The field TB_EstaBorrado is required")]
        public bool TB_EstaBorrado { get; set; }
        [Required(ErrorMessage = "The field TC_UltimaModificacion is required")]
        [StringLength(50)]
        public string TC_UltimaModificacion { get; set; }
        [Required(ErrorMessage = "The field TF_UltimaFechaModificacion is required")]
        public DateTime TF_UltimaFechaModificacion { get; set; }
        [Required(ErrorMessage = "The field FK_TN_Estado is required")]
        public int FK_TN_Estado { get; set; }
        [Required(ErrorMessage = "The field FK_TN_Periodo is required")]
        public int FK_TN_Periodo { get; set; }
        [Required(ErrorMessage = "The field Estado is required")]
        public TSISCOA_Estado_DTO Estado { get; set; }
        [Required(ErrorMessage = "The field Periodo is required")]
        public TSISCOA_Periodo_DTO Periodo { get; set; }
    }
}
