using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("TSISCOA_Control", Schema = "CONTROL")]
    public class TSISCOA_Control
    {
        [Key]
        public int ID { get; set; }
        public string TC_Nombre { get; set; }
        public string TC_DescriptionDocumentacionEvidencia { get; set; }
        public bool TB_NotificacionCorreoAColaborador { get; set; }
        public bool TB_EstaActivo { get; set; }
        public bool TB_EstaBorrado { get; set; }
        public string TC_UltimaModificacion { get; set; }
        public DateTime TF_UltimaFechaModificacion { get; set; }
        [ForeignKey("TSISCOA_Estado")]
        public int FK_TN_Estado { get; set; }
        [ForeignKey("TSISCOA_Periodo")]
        public int FK_TN_Periodo { get; set; }
        public virtual TSISCOA_Estado TSISCOA_Estado { get; set; }
        public virtual TSISCOA_Periodo TSISCOA_Periodo { get; set; }
    }
}
