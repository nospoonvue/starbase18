<template>
 <div id="projects">
     <GenericPage class="" :page="this.$route.query.projecttype" />
     <a href="/#/projecttypes" class="button small" >back</a>     
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
    name: "projects",
    components: {GenericPage,ItemsList},

    data() 
    {
   return {
        paging: true,
        pageSize: 10,
        table: "Projects",
        view: "Public",
        filter: '{ProjectTypeTitle}="'+ this.$route.query.projecttype + '"',         
        }
    }
       
}


</script>


