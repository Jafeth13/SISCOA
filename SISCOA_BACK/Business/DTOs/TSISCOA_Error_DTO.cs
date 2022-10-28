using System;
using System.ComponentModel.DataAnnotations;

namespace Business.DTOs
{
    public class TSISCOA_Error_DTO
    {
        public int ID { get; set; }
        [Required(ErrorMessage = "The field TC_Description is required")]
        [StringLength(255)]
        public string TC_Description { get; set; }
        [Required(ErrorMessage = "The field TC_DescripTC_UltimaAcciontion is required")]
        [StringLength(100)]
        public string TC_UltimaAccion { get; set; }
        [Required(ErrorMessage = "The field TF_FechaError is required")]
        public DateTime TF_FechaError { get; set; }
        [Required(ErrorMessage = "The field FK_ID_UsuarioActivo is required")]
        public int FK_ID_UsuarioActivo { get; set; }
        [Required(ErrorMessage = "The field TSISCOA_Usuario is required")]
        public virtual TSISCOA_Usuario_DTO TSISCOA_Usuario { get; set; }
    }
}
