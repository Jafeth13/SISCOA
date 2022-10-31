using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("TSISCOA_Actividad", Schema = "SISTEMA")]
    public class TSISCOA_Actividad
    {
        [Key]
        public int ID { get; set; }
        public string TC_Description { get; set; }
        public string TC_Accion { get; set; }
        public DateTime TF_FechaAccion { get; set; }
        [ForeignKey("TSISCOA_Usuario")]
        public int FK_ID_UsuarioActivo { get; set; }
        public virtual TSISCOA_Usuario TSISCOA_Usuario { get; set; }
    }
}
