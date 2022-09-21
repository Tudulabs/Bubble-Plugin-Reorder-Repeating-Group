function(instance, properties, context) {
    
    instance.data.list = properties.list.get(0,properties.list.length())
    instance.publishState("new_list_order",instance.data.list)



}