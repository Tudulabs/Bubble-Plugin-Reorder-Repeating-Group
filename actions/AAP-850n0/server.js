function(properties, context) {
  let list;
  const length = properties.list_of_items?.length() === null ? 0 : properties.list_of_items?.length();
   
    if(length > 0){
  		list = properties.list_of_items?.get(0, length);
  }
        else{
        list = []
    }
  
  const itemToInsert = properties.item_to_insert;
  const positionToInsertInto = properties.position_to_insert_into - 1;

  list.splice(positionToInsertInto, 0, itemToInsert);

  return {
    new_list_order: list,
    original_list_order: list,
    item_inserted: itemToInsert,
  };
}
