<template>
    <div id="blog">    
        <GenericPage class="" :page="page" />
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
        page: "About"
        }
    },
    methods:{

    },
    computed: {

    },
    created(){

    },
}


</script>


