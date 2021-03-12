<template>
 <div id="blog">
     <div style="float:left;width:100%;">
         
        <div style=" cursor: pointer;width:150px;margin-left: auto; margin-right: 0;" onClick="var iframe =document.getElementById(':2.container').contentWindow.document.getElementById(':2.close').click();">reset language</div>
        <div id="google_translate_element" style="width:150px;margin-left: auto; margin-right: 0;"></div>  
     </div>
    <GenericPage class="" :page="'Blog'" />
    <BlogListing :paging="this.paging" :pageSize="this.pageSize"/>
    
</div>
</template>


<style >
.goog-te-banner-frame.skiptranslate {
    display: none !important;
    } 
body {
    top: 0px !important; 
    }
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


