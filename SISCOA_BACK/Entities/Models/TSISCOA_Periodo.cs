using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("TSISCOA_Periodo", Schema = "CONTROL")]
    public class TSISCOA_Periodo
    {
        [Key]
        public int ID { get; set; }
        public string TC_Nombre { get; set; }
        public bool TB_EstaActivo { get; set; }
        public bool TB_EstaBorrado { get; set; }
        public string TC_UltimaModificacion { get; set; }
        public DateTime TF_UltimaFechaModificacion { get; set; }
        public virtual ICollection<TSISCOA_Control> Controls { get; set; }
    }
}
