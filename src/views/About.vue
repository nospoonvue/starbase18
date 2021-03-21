<template>
    <div id="blog">    
        <Breadcrumb :pages="this.pages"/>
        <GenericPage class="" :page="page" :paging="paging" :pageSize="pageSize"/>
    </div>
</template>

<style >
</style>

<script>
import GenericPage from '@/components/GenericPage.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default 
{
    name: "genericPage",
    components: {GenericPage,Breadcrumb},

    data() 
    {
        return {
        page: "About",
        paging: false,
        pageSize: 2,
       pages: [{id:0,url:'',title:'Home'},{id:1,url:'about',title:'About'}]
         
        }
    },
    metaInfo() {
        return {
            title: 'Starbase18 - ' + this.page,
            meta:[
                {
                    name: "description",
                    content: "About Starbase18, why is it founded, what are our goals and how do we want to achief this"
                },
                {
                    name: "keywords",
                    content: "New education, circular, sustainable, whole school approach, purposeful learning"
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


