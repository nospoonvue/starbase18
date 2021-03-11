<template>
 <div id="blog">
    <GenericPage class="" :page="this.table" />
    <BlogListing :paging="this.paging" :pageSize="this.pageSize"/>
    
</div>
</template>


<style >

</style>

<script>
import GenericPage from '@/components/GenericPage.vue'
import BlogListing from '@/components/BlogListing.vue'

export default 
{
    name: "Blog",
    components: {GenericPage,BlogListing},

    data() 
    {
   return {
        paging: false,
        pageSize: 1 
        }
    }
}


</script>


