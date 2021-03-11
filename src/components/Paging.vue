<template>
 <div id="paging" style="clear:both;">
    <section class="">
        <div id="pages" style="text-align:center" v-show="isReady && paging" >
            <p><button  :disabled='backDisabled' v-on:click="backward">previous page</button> | <button  :disabled='forwardDisabled' v-on:click="forward">next page</button></p>
        </div>
    </section>
</div>
</template>


<style >

</style>

<script>
export default 
{
    name: "Paging",
    components: {},

    data() 
    {
    return {
        offset: 0,
        offsetHistoryCursor: 0,        
        offsetHistory: [], 
        }
    },
    props: {
        paging: false,
        parent: null,
    },
    created() 
    {

    },
    methods:
    {
        forward: function() 
        {
            this.offsetHistoryCursor++;
            this.offsetHistory[this.offsetHistoryCursor] = this.parent.offset;
            this.parent.key++;//force update
           
        },
        backward: function()
        {
            this.offsetHistoryCursor--;
            if(this.offsetHistoryCursor < 0) this.offsetHistoryCursor =0;
            this.parent.offset = this.offsetHistory[this.offsetHistoryCursor];
            this.parent.key++;//force update
        }
    },
    computed: {
  	    backDisabled: function(){
              if(this.offsetHistoryCursor == 0)
                return true;
                else
    	        return false;
        },
        forwardDisabled: function(){
            return this.parent.offset == -1;
        },
        isReady: function(){
            return this.parent.ready;
        }
  },
}


</script>


