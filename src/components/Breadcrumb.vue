<template>
 <div id="breadcrumb" style="clear:both;">     
     <span v-for="(item) in pages" :key="item.id">
         / <a class="breadcrumb" :href="'/#/'+item.url">{{item.title}}</a>
     </span>
</div>
</template>

<style >
#breadcrumb
{
    padding-top: 10px;
}
.breadcrumb
{
    font-size: small;
}
</style>

<script>
export default 
{
    name: "Breadcrumb",
    components: {},

    data() 
    {
    return {

        }
    },
    props: {
        pages: null
    },
    created() 
    {

    },
    methods:
    {
  
    },
    computed: {
 
  },
}


</script>


