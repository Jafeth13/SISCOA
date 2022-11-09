using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace Business.DTOs
{
    public class TSISCOA_Archivo_DTO
    {
        public int ID { get; set; }
        public string TC_Nombre { get; set; }
        public string TC_Datos { get; set; }
        public int FK_TN_OficinaControl_SISCOA_Archivo { get; set; }
    }
}
