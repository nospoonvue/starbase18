<template>
 <div id="courses">
    
    <Status class="StatusShow" v-bind:img="status" v-show="loading" />
       <h1>Courses</h1>
 <br/>
    <section id="" class="post" v-for="item in data" :key="item.fields.Title" style="float:left">
       
        <div class="content" style="max-width:400px;margin:10px; height:500px;  display: flex; flex-direction: column;  justify-content: space-between;">
            <header>
                <Agile :slidesToShow="1" :dots="false" :navButtons="false" :key="item.fields.Visuals.length" :centerMode="true">
                    <div class="slide" v-for="item in  filterImages(item.fields.Visuals)" :key="item.url"  >
                        <img v-bind:src="item.url" v-bind:alt="item.Title" style="width:100%;border-radius:10px;" />
                    </div>
                </Agile>
                <h6>ECTS: {{ item.fields.ECTS }} </h6> 
                <h2>{{ item.fields.Title }}</h2>
            </header>
            <p>
                <vue-markdown>{{ item.fields.ShortDescription }}</vue-markdown>
            </p>
            <div style="">           
                <ul class="actions">
                    <li><router-link :to="'/course/'+item.fields.LinkName" class="button big">Learn More</router-link></li>
                </ul>
            </div>
        </div>

    </section>
    <section class="">
    <div id="pages" style="text-align:center" v-show="ready">
        <p><button  :disabled='backDisabled' v-on:click="backward">previous page</button> | <button  :disabled='forwardDisabled' v-on:click="forward">next page</button></p>
    </div>
    </section>
</div>
</template>


<style >

.agile{
    width: 100%;
    max-width: 800px;   
    text-align: center;
	}	
.slide {
	align-items: center;
	color: #fffFFF;
	display: flex;
	object-fit: cover;
    width: 100%;
    height: 100%;
	justify-content: center;
}

.agile__nav-button:hover {
  color: #ff0000;
}
.agile__dot {
  margin: 10px 10px;
}
.agile__dot button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button, .agile__dot:hover button {
  background-color: #ff0000;
}


</style>

<script>
import axios from 'axios';
import Status from '@/components/Status.vue'
import VueMarkdown from 'vue-markdown'
import { VueAgile } from 'vue-agile'

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
    'fields': ['Title','ShortDescription', 'Visuals','ECTS','LinkName']
}
//alert(JSON.stringify(settings));
const formData = new FormData();
formData.append('data', JSON.stringify(settings));
formData.append('action', 'view');

viewStatus.loading = true;
await axios.post (viewStatus.$baseUrl, formData, config)
        .then(response => 
        {
            viewStatus.data = response.data.records;
            //alert(JSON.stringify(response.data));
            if(response.data.offset)
            {
                viewStatus.offset = response.data.offset;
                viewStatus.ready = true;
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
                console.log("fooout:"+error)
                //viewStatus.status = error;
                viewStatus.ready = false;
                viewStatus.loading = false;
            }
        )
}

export default 
{
    name: "courses",
    components: {Status, VueMarkdown,Agile: VueAgile },

    data() 
    {
    return {
        data: null,
        ready: false,
        loading: false,
        status: "",
        offset: "",
        offsetHistoryCursor: 0,
        pageSize: 20,
        offsetHistory: [],  
        table: "Course",
        view: "Main",
        klaar:false
        }
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
        },
        filterImages: function (visuals) {
            return visuals.filter(function (image) {
            return  image.url.includes("_small");  
            })
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
    mounted()
    {
         this.klaar=true;
    }
}

</script>


