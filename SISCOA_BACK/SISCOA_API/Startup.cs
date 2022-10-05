using Data.Data;
using Owin;

namespace SISCOA_API
{
    public partial class Startup
    {
        public void ConfigureAuth(IAppBuilder app)
        {
            //Configura el db context para ser usado como una instancia por request
            app.CreatePerOwinContext(SISCOA_Context.Create);
        }
    }
}
