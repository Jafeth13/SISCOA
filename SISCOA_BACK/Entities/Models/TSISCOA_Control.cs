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
        [ForeignKey("TSISCOA_Estado")]
        public int FK_TN_Estado { get; set; }
        [ForeignKey("TSISCOA_Periodo")]
        public int FK_TN_Periodo { get; set; }
        public TSISCOA_Estado TSISCOA_Estado { get; set; }
        public TSISCOA_Periodo TSISCOA_Periodo { get; set; }
    }
}
