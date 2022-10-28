using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("TSISCOA_OficinaControl", Schema = "OFICINA")]
    public class TSISCOA_OficinaControl
    {
        [Key]
        public int ID { get; set; }
        [ForeignKey("TSISCOA_Control")]
        public int FK_SISCOA_CONTROL_SISCOA_OficinaControl { get; set; }
        [ForeignKey("TSISCOA_Oficina")]
        public int FK_SISCOA_OFICINA_SISCOA_OficinaControl { get; set; }
        public virtual TSISCOA_Control TSISCOA_Control { get; set; }
        public virtual TSISCOA_Oficina TSISCOA_Oficina { get; set; }
    }
}
