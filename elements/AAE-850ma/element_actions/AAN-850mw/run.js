function(instance, properties, context) {


    console.log(instance.data.list.splice(properties.item_index_delete - 1,1))
    instance.publishState("new_list_order", instance.data.list)
      console.log(instance.data.list)



}