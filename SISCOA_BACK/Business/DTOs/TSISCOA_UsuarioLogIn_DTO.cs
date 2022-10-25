using System.ComponentModel.DataAnnotations;

namespace Business.DTOs
{
    public class TSISCOA_UsuarioLogIn_DTO
    {
        public int ID { get; set; }
        [Required(ErrorMessage = "The field TC_Identificacion is required")]
        [StringLength(50)]
        public string TC_Identificacion { get; set; }
        [Required(ErrorMessage = "The field TV_Contrasenna is required")]
        [StringLength(256)]
        public string TV_Contrasenna { get; set; }
        [StringLength(50)]
        public string TC_Correo { get; set; }
    }
}
