function cs142MakeMultiFilter(array)
{
    var originalArray = array;
    var currentArray = array;
    function arrayFilter(filterCriteria, callback)
    {
        if(!filterCriteria)
        {
            return currentArray;
        }
        currentArray= currentArray.filter(filterCriteria);
        if(typeof callback ==='function'){
            callback.call(originalArray,currentArray);
        }
        return arrayFilter;
    }
    return arrayFilter;

}