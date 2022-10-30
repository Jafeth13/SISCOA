using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class TSISCOA_Archivo
    {
        public int ID { get; set; }
        public string TC_UbicacionArchivo { get; set; }
        public int FK_TN_OficinaControl_SISCOA_Archivo { get; set; }
    }
}
