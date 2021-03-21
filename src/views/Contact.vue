<template>
    <div id="blog">    
        <GenericPage class="notranslate" :page="page" :paging="paging" :pageSize="pageSize"/>
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
        page: "Contact",
        paging: false,
        pageSize: 2
        }
    },
    metaInfo() {
        return {
            title: 'Starbase18 - ' + this.page,
            meta:[
                {
                    name: "description",
                    content: "Join Starbase18, contact us and tell us how you would like to contribute"
                },
                {
                    name: "keywords",
                    content: "Contacting, sponsoring, helping, machines, materials"
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


