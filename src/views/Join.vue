<template>
    <div id="blog">    
       <GenericPage class="" :page="page" :paging="paging" :pageSize="pageSize" :translateTitle="translateTitle"/>
    </div>
</template>

<style >
</style>

<script>
import GenericPage from '@/components/GenericPage.vue'

export default 
{
    name: "genericPage",
    components: {GenericPage},

    data() 
    {
        return {
        page: "Join",
        pageSize: 1,
        paging: false,
        translateTitle: true
        }
    },
    methods:{
    },
    computed: {
    },
    created(){
    },
    metaInfo() {
        return {
            title: 'Starbase18 - ' + this.page,
            meta:[
                {
                    name: "description",
                    content: "Join our team and contribute in any way that you can"
                },
                {
                    name: "keywords",
                    content: "Internship, volunteer, module, minor, training"
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


