<template>
 <div id="projects">
     <Breadcrumb :pages="this.pages"/>
     <GenericPage class="" :page="this.$route.params.projecttype" />
    <ItemsList :table="this.table" :view="this.view" :filter="this.filter" :paging="this.paging" :pageSize="this.pageSize"/>    
</div>
</template>


<style >
</style>

<script>
import GenericPage from '@/components/GenericPage.vue'
import ItemsList from '@/components/ItemsList.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'


export default 
{
    name: "projects",
    components: {GenericPage,ItemsList,Breadcrumb},

    data() 
    {
   return {
        paging: true,
        pageSize: 10,
        table: "Projects",
        view: "Public",
        filter: '{ProjectTypeTitle}="'+ this.$route.params.projecttype + '"',         
        pages: [{id:0,url:'',title:'Home'},{id:1,url:'projecttypes',title:'Project types'},{id:2,url:'projects/'+this.$route.params.projecttype,title:this.$route.params.projecttype}]
        }
    },
    metaInfo() {
        return {
            title: 'Starbase18 - ' + this.table + ' - ' + this.$route.params.projecttype,
            meta:[
                {
                    name: "description",
                    content: "Projects students and professionals are working on"
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


