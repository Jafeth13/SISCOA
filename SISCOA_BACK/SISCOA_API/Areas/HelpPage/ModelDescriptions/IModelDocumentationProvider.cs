using System;
using System.Reflection;

namespace SISCOA_API.Areas.HelpPage.ModelDescriptions
{
    /// <summary>
    /// 
    /// </summary>
    public interface IModelDocumentationProvider
    {
        /// <summary>
        /// 
        /// </summary>
        string GetDocumentation(MemberInfo member);
        /// <summary>
        /// 
        /// </summary>
        string GetDocumentation(Type type);
    }
}