using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    public class TSISCOA_Archivo
    {
        [Key]
        public int ID { get; set; }
        public string TC_Nombre { get; set; }
        public string TC_Extension { get; set; }
        public double TD_Tamano { get; set; }
        public string TC_UbicacionArchivo { get; set; }
        [ForeignKey("TSISCOA_OficinaControl")]
        public int FK_TN_OficinaControl_SISCOA_Archivo { get; set; }
        public TSISCOA_OficinaControl TSISCOA_OficinaControl { get; set; }
    }
}
