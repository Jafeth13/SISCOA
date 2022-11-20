using System;
using System.ComponentModel.DataAnnotations;

namespace Business.DTOs
{
    public class TSISCOA_Periodo_DTO
    {
        public int ID { get; set; }
        [Required(ErrorMessage = "The field TC_Nombre is required")]
        [StringLength(50)]
        public string TC_Nombre { get; set; }

    }
}
