using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("TSISCOA_Rol", Schema = "USUARIO")]
    public class TSISCOA_Rol
    {
        [Key]
        public int ID { get; set; }
        public string TC_Nombre { get; set; }
    }
}
