<template>
 <div id="blog">
    
   <BlogListing :paging="this.paging" :pageSize="this.pageSize"/>
    
</div>
</template>


<style >

</style>

<script>

import BlogListing from '@/components/BlogListing.vue'

export default 
{
    name: "Blog",
    components: {BlogListing},

    data() 
    {
   return {
        paging: false,
        pageSize: 1 
        }
    }
}


</script>


