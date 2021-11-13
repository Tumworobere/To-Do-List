 
   function editItem(changedDesc, index,array) {
    array[index].description = changedDesc;
    return array;
  }
  
  function clearAll(array) {
    array = array.filter((x) => x.complete === false);
    for (let i = 0; i < array.length; i += 1) {
      array[i].index = i;
    }
    return array;
  }
  
  function indexUpdate(array) {
    return array;
  }
  
  exports.editItem = editItem;
  exports.clearAll = clearAll;
  exports.indexUpdate = indexUpdate;