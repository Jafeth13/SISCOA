using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("TSISCOA_Oficina", Schema = "OFICINA")]
    public class TSISCOA_Oficina
    {
        [Key]
        public int ID { get; set; }
        public string TC_CodigoOficina { get; set; }
        public string TC_Nombre { get; set; }
        public string TC_Institucion { get; set; }
        public bool TB_EstadoActividad { get; set; }
        public bool TB_EstaActivo { get; set; }
        public bool TB_EstaBorrado { get; set; }
        public string TC_UltimaModificacion { get; set; }
        public DateTime TF_UltimaFechaModificacion { get; set; }
    }
}
