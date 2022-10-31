using Owin;

namespace SISCOA_API
{
    /// <summary>
    /// Startup
    /// </summary>
    public partial class Startup
    {
        /// <summary>
        /// Configura el db context para ser usado como una instancia por request
        /// </summary>
        /// <param name="app"></param>
        public void ConfigureAuth(IAppBuilder app)
        {
            //Configura el db context para ser usado como una instancia por request
        }
    }
}
