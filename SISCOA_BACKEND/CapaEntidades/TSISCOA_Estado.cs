//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CapaEntidades
{
    using System;
    using System.Collections.Generic;
    
    public partial class TSISCOA_Estado
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TSISCOA_Estado()
        {
            this.TSISCOA_Control = new HashSet<TSISCOA_Control>();
        }
    
        public int PK_SISCOA_Estado { get; set; }
        public string TC_Nombre { get; set; }
        public Nullable<bool> TB_EstaActivo { get; set; }
        public Nullable<bool> TB_EstaBorrado { get; set; }
        public string TC_UltimaModificacion { get; set; }
        public Nullable<System.DateTime> TF_UltimaFechaModificacion { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TSISCOA_Control> TSISCOA_Control { get; set; }
    }
}
