using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SISCOA_API
{
    /// <summary>
    /// 
    /// </summary>
    public static class WebApiConfig
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="config"></param>
        public static void Register(HttpConfiguration config)
        {
            // Configuración y servicios de Web API
            var enableCorsAttribute = 
                new EnableCorsAttribute(
                    origins: "*",
                    headers: "*",
                    methods: "*"
                );
            config.EnableCors(enableCorsAttribute);

            // Rutas de Web API
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}/{rolUserActive}",
                defaults: new { id = RouteParameter.Optional, rolUserActive = RouteParameter.Optional }
            );
        }
    }
}
