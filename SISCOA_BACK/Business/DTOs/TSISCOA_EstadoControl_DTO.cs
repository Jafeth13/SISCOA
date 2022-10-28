using Entities.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Business.DTOs
{
    public class TSISCOA_EstadoControl_DTO
    {
        public int ID { get; set; }
        [Required(ErrorMessage = "The field FK_TN_ESTADO_SISCOA_EstadoControl is required")]
        public string FK_TN_ESTADO_SISCOA_EstadoControl { get; set; }
        [Required(ErrorMessage = "The field FK_TN_CONTROL_SISCOA_EstadoControlControl is required")]
        public string FK_TN_CONTROL_SISCOA_EstadoControl { get; set; }
        public virtual TSISCOA_Estado TSISCOA_Estado { get; set; }
        public virtual TSISCOA_Control TSISCOA_Control { get; set; }
    }
}
