<template>
 <div id="team">
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
    name: "team",
    components: {GenericPage,ItemsList},

    data() 
    {
   return {
        paging: true,
        pageSize: 10,
        table: "Team",
        view: "Public",
        filter: null 
        }
    },
    metaInfo() {
        return {
            title: 'Starbase18 - ' + this.table,
            meta:[
                {
                    name: "description",
                    content: "Join our team and expand your knowledge and network while making the world a better place"
                },
                {
                    name: "keywords",
                    content: "Internship, minor, keuzedeel, module, volunteer, x-honours, excellentieprogramma"
                },
                {
                    name: "author",
                    content: "Frank Kroondijk"
                },
            ]
      }
    }
}


</script>


