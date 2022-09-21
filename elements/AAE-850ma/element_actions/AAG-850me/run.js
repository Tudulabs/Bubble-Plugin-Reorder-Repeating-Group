function(instance, properties, context) {

    let list = instance.data.list
    let item = properties.item_index - 1
    let swapItem = properties.swap_item_index - 1
    
    
    const swapList = (itemIndex, swapItemIndex)=>{
  		[list[itemIndex],list[swapItemIndex]] = [list[swapItemIndex],list[itemIndex]]
        
}

    
    swapList(item,swapItem)
    
    instance.publishState('new_list_order', list)
    
    
    


}