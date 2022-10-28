using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("TSISCOA_EstadoControl", Schema = "CONTROL")]
    public class TSISCOA_EstadoControl
    {
        [Key]
        public int ID { get; set; }
        [ForeignKey("TSISCOA_Estado")]
        public int FK_TN_ESTADO_SISCOA_EstadoControl { get; set; }
        [ForeignKey("TSISCOA_Control")]
        public int FK_TN_CONTROL_SISCOA_EstadoControl { get; set; }
        public virtual TSISCOA_Estado TSISCOA_Estado { get; set; }
        public virtual TSISCOA_Control TSISCOA_Control { get; set; }
    }
}
