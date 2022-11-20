using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("TSISCOA_OficinaControl", Schema = "CONTROL")]
    public class TSISCOA_OficinaControl
    {
        [Key]
        public int ID { get; set; }
        [ForeignKey("TSISCOA_Control")]
        public int FK_TN_CONTROL_SISCOA_OficinaControl { get; set; }
        [ForeignKey("TSISCOA_Oficina")]
        public int FK_TN_OFICINA_SISCOA_OficinaControl { get; set; }
        [ForeignKey("TSISCOA_Estado")]
        public int FK_TN_ESTADO_SISCOA_OficinaControl { get; set; }
        [ForeignKey("TSISCOA_Periodo")]
        public int FK_TN_PERIODO_SISCOA_OficinaControl { get; set; }
        public DateTime TF_FechaInicio { get; set; }
        public DateTime TF_FechaFin { get; set; }
        public DateTime TF_FechaFin_DiasExtra { get; set; }
        public int TN_DiasExtra { get; set; }
        public String TC_Comentario { get; set; }
        public IEnumerable<TSISCOA_Archivo> Archivos { get; set; }
        public virtual TSISCOA_Control TSISCOA_Control { get; set; }
        public virtual TSISCOA_Oficina TSISCOA_Oficina { get; set; }
        public virtual TSISCOA_Estado TSISCOA_Estado { get; set; }
        public virtual TSISCOA_Periodo TSISCOA_Periodo { get; set; }
    }
}
