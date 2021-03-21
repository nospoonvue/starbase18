<template>
 <div id="partners">
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
    name: "partners",
    components: {GenericPage,ItemsList},

    data() 
    {
   return {
        paging: true,
        pageSize: 10,
        table: "Partners",
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
                    content: "Become a partner of Starbase18 and help us on our joined journey"
                },
                {
                    name: "keywords",
                    content: "Sponsoring, knowledge exchange, machines, materials, people, mentors"
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


