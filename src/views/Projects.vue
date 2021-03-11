<template>
 <div id="il">
   <ItemsList :table="this.table" :view="this.view" :filter="this.filter" :paging="this.paging" :pageSize="this.pageSize"/>    
</div>
</template>


<style >
</style>

<script>

import ItemsList from '@/components/ItemsList.vue'

export default 
{
    name: "itemsList",
    components: {ItemsList},

    data() 
    {
   return {
        paging: true,
        pageSize: 10,
        table: "Projects",
        view: "Public",
        filter: null 
        }
    }
}


</script>


