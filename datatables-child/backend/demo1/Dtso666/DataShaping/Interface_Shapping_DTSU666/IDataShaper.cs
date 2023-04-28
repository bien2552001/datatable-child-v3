using System.Collections.Generic;
using System.Dynamic;

namespace demo1.Dtso666.DataShaping.Interface_Shapping_DTSU666
{
    public interface IDataShaper<T>
    {
        IEnumerable<ExpandoObject> ShapeData(IEnumerable<T> entities, string fieldsString);
        ExpandoObject ShapeData(T entity, string fieldsString);
    }
}
