using System;
using System.ComponentModel.DataAnnotations;

namespace Business.DTOs
{
    public class TSISCOA_OficinaControl_DTO
    {
        public int ID { get; set; }
        [Required(ErrorMessage = "The field FK_SISCOA_CONTROL_SISCOA_OficinaControl is required")]
        public int FK_SISCOA_CONTROL_SISCOA_OficinaControl { get; set; }
        [Required(ErrorMessage = "The field FK_SISCOA_OFICINA_SISCOA_OficinaControl is required")]
        public int FK_SISCOA_OFICINA_SISCOA_OficinaControl { get; set; }
        public virtual TSISCOA_Control_DTO Control { get; set; }
        public virtual TSISCOA_Oficina_DTO Oficina { get; set; }
    }
}
