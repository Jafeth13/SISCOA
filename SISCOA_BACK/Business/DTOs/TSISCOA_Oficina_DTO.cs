using System;
using System.ComponentModel.DataAnnotations;

namespace Business.DTOs
{
    public class TSISCOA_Oficina_DTO
    {
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
    }
}
