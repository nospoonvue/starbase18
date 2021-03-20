<template>
 <div id="projects">
    <GenericPage class="" :page="this.table" />
    <ItemsList :table="this.table" :view="this.view" :filter="this.filter" :paging="this.paging" :pageSize="this.pageSize" :urlTarget="this.urlTarget"/>    
</div>
</template>


<style >
</style>

<script>
import GenericPage from '@/components/GenericPage.vue'
import ItemsList from '@/components/ItemsList.vue'

export default 
{
    name: "projectTypes",
    components: {GenericPage,ItemsList},

    data() 
    {
   return {
        paging: true,
        pageSize: 10,
        table: "Project types",
        view: "Public",
        filter: null,
        urlTarget: ""
        }
    }
}


</script>


