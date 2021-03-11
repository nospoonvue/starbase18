<template>
 <div id="team">
   <ItemsList :table="this.table" :view="this.view" :filter="this.filter" :paging="this.paging" :pageSize="this.pageSize"/>    
</div>
</template>


<style >
</style>

<script>

import ItemsList from '@/components/ItemsList.vue'

export default 
{
    name: "team",
    components: {ItemsList},

    data() 
    {
   return {
        paging: true,
        pageSize: 10,
        table: "Team",
        view: "Public",
        filter: null 
        }
    }
}


</script>


