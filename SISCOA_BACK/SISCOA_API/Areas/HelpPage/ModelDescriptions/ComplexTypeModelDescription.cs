using System.Collections.ObjectModel;

namespace SISCOA_API.Areas.HelpPage.ModelDescriptions
{
    /// <summary>
    /// 
    /// </summary>
    public class ComplexTypeModelDescription : ModelDescription
    {
        /// <summary>
        /// 
        /// </summary>
        public ComplexTypeModelDescription()
        {
            Properties = new Collection<ParameterDescription>();
        }
        /// <summary>
        /// 
        /// </summary>
        public Collection<ParameterDescription> Properties { get; private set; }
    }
}