using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("TSISCOA_Permiso", Schema = "USUARIO")]
    public class TSISCOA_Permiso
    {
        [Key]
        public int ID { get; set; }
        public string TC_Nombre { get; set; }
    }
}
