<template>
 <div id="blog">
     <div style="float:left;width:100%;">
        
        <div id="google_translate_element" style="width:150px;margin-left: auto; margin-right: 0;"></div>  
     </div>
    <GenericPage class="" :page="'Blog'" />
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
    },    
    mounted()
    {
      let translateScript = document.createElement('script')
      translateScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit')
      document.head.appendChild(translateScript)
    }
}


</script>


