<template>
 <div id="mentors">
   <ItemsList :table="this.table" :view="this.view" :filter="this.filter" :paging="this.paging" :pageSize="this.pageSize"/>    
</div>
</template>


<style >
</style>

<script>

import ItemsList from '@/components/ItemsList.vue'

export default 
{
    name: "mentors",
    components: {ItemsList},

    data() 
    {
   return {
        paging: false,
        pageSize: 2,
        table: "Mentors",
        view: "Public",
        filter: null 
        }
    },
    created()
    {
       
    }
}


</script>


