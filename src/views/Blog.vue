<template>
 <div id="blog">

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

function clickLanguage()
{

}

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

    },
    methods: {        
        setLanguage : function()
        {
            //  var menuItems = document.querySelectorAll('[class^="goog-te-menu2-item"]');
       // var menuItems = document.querySelectorAll('[class$="goog-te-menu2-item"]');
  
        var menuItems = document.getElementsByClassName('goog-te-menu-frame skiptranslate')[0].contentWindow.document.querySelectorAll("[class^='goog-te-menu2-item']");

         alert(menuItems.length);
         menuItems[1].click();
        }
    }
}


</script>


