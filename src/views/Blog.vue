<template>
 <div id="blog">

    <GenericPage class="" :page="this.page" />
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
        page: "Blog",
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
    },
    metaInfo() {
        return {
            title: 'Starbase18 - ' + this.page,
            meta:[
                {
                    name: "description",
                    content: "Follow our journey, everything we do we are telling about in our blog and other socials"
                },
                {
                    name: "keywords",
                    content: "Blogging, vlogging, socials, facebook, youtube, instagram, linkedin"
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


