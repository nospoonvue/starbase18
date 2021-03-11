<template>
 <div id="mentors">
    <GenericPage class="" :page="this.table" />
    <ItemsList :table="this.table" :view="this.view" :filter="this.filter" :paging="this.paging" :pageSize="this.pageSize"/>    
</div>
</template>


<style >
</style>

<script>
import GenericPage from '@/components/GenericPage.vue'
import ItemsList from '@/components/ItemsList.vue'

export default 
{
    name: "mentors",
    components: {GenericPage,ItemsList},

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


