<template>
 <div id="dataConnection">
    <Status class="StatusShow" v-show="loading" />
    </div>
</template>

<style >
</style>

<script>
import axios from 'axios';
import Status from '@/components/Status.vue'

async function getData(viewStatus)
{

    const config = 
    {
        headers: 
        {            
        }
    }

    var settings = {
        'application': viewStatus.application,
        'table': viewStatus.table,
        'view': viewStatus.view                                                
    }

if(viewStatus.filter) settings.filter = viewStatus.filter
if(viewStatus.paging)
    {
         settings.offset = viewStatus.offset;
         settings.pageSize = viewStatus.pageSize;
    }

 if(viewStatus.$route.query.staging) settings.view = "Staging";

const formData = new FormData();
formData.append('data', JSON.stringify(settings));
formData.append('action', 'view');
//alert(JSON.stringify(settings));
//console.log(JSON.stringify(settings));
viewStatus.loading = true;
await axios.post (viewStatus.$baseUrl, formData, config)
        .then(response => 
        {
            viewStatus.parent.info = response.data.records;
            if(response.data.offset)
            {
                viewStatus.parent.offset = response.data.offset;
                viewStatus.parent.ready = true;
                viewStatus.ready = true;
            }
            else
            {
               viewStatus.parent.offset = -1;              
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
    name: "DataConnetion",
    components: {Status},

    data() 
    {
    return {
        info: null,
        ready: false,
        loading: false,
        offsetHistoryCursor: 0,
        offsetHistory: []        
        }
    },
    props: {
        parent: null,
        page: { default: "About", type: String  },
        application: null,
        table: null,
        view: null,
        paging: null,
        pageSize: null,
        offset: null,
        filter: null
    },
    created() 
    {    
        this.offsetHistory[0]="";
        getData(this);
    },
}


</script>


