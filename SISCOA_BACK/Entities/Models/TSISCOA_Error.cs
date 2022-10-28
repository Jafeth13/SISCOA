using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    [Table("TSISCOA_Error", Schema = "SISTEMA")]
    public class TSISCOA_Error
    {
        [Key]
        public int ID { get; set; }
        public string TC_Description { get; set; }
        public string TC_UltimaAccion { get; set; }
        public DateTime TF_FechaError { get; set; }
        [ForeignKey("TSISCOA_Usuario")]
        public int FK_ID_UsuarioActivo { get; set; }
        public virtual TSISCOA_Usuario TSISCOA_Usuario { get; set; }
    }
}
