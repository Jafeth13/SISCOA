using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("TSISCOA_Estado", Schema = "CONTROL")]
    public class TSISCOA_Estado
    {
        [Key]
        public int ID { get; set; }
        public string TC_Nombre { get; set; }
        public virtual ICollection<TSISCOA_Control> TSISCOA_Control { get; set; }
    }
}
