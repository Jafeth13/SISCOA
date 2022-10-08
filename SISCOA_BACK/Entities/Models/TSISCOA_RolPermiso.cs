using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("TSISCOA_RolPermiso", Schema = "USUARIO")]
    public class TSISCOA_RolPermiso
    {
        [Key]
        public int ID { get; set; }
        [ForeignKey("TSISCOA_Rol")]
        public int FK_SISCOA_Rol_SISCOA_RolPermiso { get; set; }
        [ForeignKey("TSISCOA_Permiso")]
        public int FK_SISCOA_Permiso_SISCOA_RolPermiso { get; set; }
        public bool TB_EstaActivo { get; set; }
        public bool TB_EstaBorrado { get; set; }
        public string TC_UltimaModificacion { get; set; }
        public DateTime TF_UltimaFechaModificacion { get; set; }
        public virtual TSISCOA_Permiso TSISCOA_Permiso { get; set; }
        public virtual TSISCOA_Rol TSISCOA_Rol { get; set; }
    }
}
