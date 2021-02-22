<template>
 <div id="blog">
    
    <Status class="StatusShow" v-bind:img="status" v-show="loading" />
    <h1>{{ pageFilter }}</h1>
    <section id="" class="post" v-for="item in info" :key="item.id">
        <h2 :v-show="!!item.fields.SectionHeader" >{{ item.fields.SectionHeader }}</h2>
        <p><vue-markdown>{{ item.fields.SectionContent }}</vue-markdown></p>
    </section>
    <section class="">
    <div id="pages" style="text-align:center" v-show="ready">
        <p><button  :disabled='backDisabled' v-on:click="backward">previous page</button> | <button  :disabled='forwardDisabled' v-on:click="forward">next page</button></p>
    </div>
    </section>
</div>
</template>


<style >

</style>

<script>
import axios from 'axios';
import Status from '@/components/Status.vue'
import VueMarkdown from 'vue-markdown'

async function getData(viewStatus)
{

    const config = 
    {
        headers: 
        {
        
        
        }
    }
var settings = {
    'table': viewStatus.table,
    'view': viewStatus.view,
    'pageSize': viewStatus.pageSize,
    'offset': viewStatus.offset,
    'filter': '{GenericPage}="'+ viewStatus.pageFilter + '"'
}

const formData = new FormData();
formData.append('data', JSON.stringify(settings));
formData.append('action', 'view');

viewStatus.loading = true;
await axios.post (viewStatus.$baseUrl, formData, config)
        .then(response => 
        {
           
            viewStatus.info = response.data.records;
            if(response.data.offset)
            {
                viewStatus.offset = response.data.offset;
                viewStatus.ready = true;
                 alert(response.data.offset);
            }
            else
            {
                viewStatus.offset = "";                
            }
            viewStatus.loading = false;

        }).catch
        (
            function (error) 
            {
                console.log(error)
                //viewStatus.status = error;
                viewStatus.loading = false;
            }
        )
}

export default 
{
    name: "GenericPage",
    components: {Status, VueMarkdown},

    data() 
    {
    return {
        info: null,
        ready: false,
        loading: false,
        status: "",
        offset: "",
        offsetHistoryCursor: 0,
        pageSize: 5,
        offsetHistory: [],  
        table: "GenericContent",
        view: "Public",
        pageFilter: this.page
        }
    },
    props: {
        page: { default: "About", type: String  },
    },
    methods:
    {
        forward: function() 
        {
            this.offsetHistoryCursor++;
            this.offsetHistory[this.offsetHistoryCursor] = this.offset;
            getData(this);
           
        },
        backward: function()
        {
            this.offsetHistoryCursor--;
            if(this.offsetHistoryCursor < 0) this.offsetHistoryCursor =0;
            this.offset = this.offsetHistory[this.offsetHistoryCursor];
            getData(this);
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
           // if(this.offset)
    	    return  (this.offsetHistoryCursor >0 || this.offsetHistoryCursor ==0) && this.offset == "";
        }  
  },
    created() 
    {
        this.offsetHistory[0]="";
        getData(this);
    },
}


</script>


