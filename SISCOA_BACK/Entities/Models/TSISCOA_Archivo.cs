using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("TSISCOA_Archivo", Schema = "CONTROL")]
    public class TSISCOA_Archivo
    {
        [Key]
        public int ID { get; set; }
        public string TC_Nombre { get; set; }
        public string TC_Datos { get; set; }
        [ForeignKey("TSISCOA_OficinaControl")]
        public int FK_TN_OficinaControl_SISCOA_Archivo { get; set; }
        public virtual TSISCOA_OficinaControl TSISCOA_OficinaControl { get; set; }
    }
}
