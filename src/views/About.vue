<template>
    <div id="blog">    
        <GenericPage class="" :page="page" :paging="paging" :pageSize="pageSize"/>
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
        page: "About",
        paging: false,
        pageSize: 2
        }
    }
}


</script>


