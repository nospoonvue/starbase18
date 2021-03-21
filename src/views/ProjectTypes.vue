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
    },
    metaInfo() {
        return {
            title: 'Starbase18 - ' + this.table,
            meta:[
                {
                    name: "description",
                    content: "Different types of projects that students and professionals can work on"
                },
                {
                    name: "keywords",
                    content: "Green tech, high-tech, construction, hospitality, projects, students, teaching, education"
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


