<template>
 <div id="itemsList">

    <DataConnection :application="this.application" :table="this.table" :view="this.view" :page="this.page" :paging="this.paging" :pageSize="this.pageSize" :offset="this.offset" :filter="this.filter" :parent="this" :key="key" />

    <section id="" class="post" v-for="item in info" :key="item.id" style="float:left;">
		<div class="" style="max-width:400px;margin:10px; height:500px;  display: flex; flex-direction: column;  justify-content: space-between;" >
			<article>
				<a :class="getSpan('Title',item)" :href="item.fields.Url" class="image" :target="urlTarget"><img :key="'img'+keyId" v-if="item.fields.Photos" v-bind:src="item.fields.Photos[0].url" v-bind:alt="getContent('Title',item)" style="width:100%" /></a>
				<h3 :class="getSpan('Title',item)" :key="'h3'+keyId">{{ getContent('Title',item) }}</h3>
                <vue-markdown :class="getSpan('Article',item)" :key="'article'+keyId">{{ getContent('Article',item) }}</vue-markdown>
			</article>

            <div style="">  
                <!--         
				<ul class="actions">
					<li><a href="#" class="button">More</a></li>
				</ul>
                -->
            </div>
		</div>
    </section>

    <Paging :paging="this.paging" :parent="this"/>

</div>
</template>

<style >
</style>

<script>

import DataConnection from '@/components/DataConnection.vue'
import Paging from '@/components/Paging.vue'
import VueMarkdown from 'vue-markdown'

export default 
{
    name: "itemsList",
    components: {DataConnection, VueMarkdown, Paging},

    data() 
    {
    return {
        key:0,
        info: null,
        ready: false,
        page: null,
        offset: 0,
        application: this.$application,
        keyId:1,
        language:"ENG"
        }
    },
    props: {
        paging: false,
        pageSize: null,
        table: null,
        view: null,
        filter: null,
        urlTarget: {type: String, default: '_blank'}
    },
    created() {
    },
    methods:{
      getSpan: function(contentLabel, dataSource)
      {
        if(dataSource.fields[contentLabel+this.getLanguage]) return "notranslate";
      },
      getContent: function(contentLabel, dataSource)
      {
        if(dataSource.fields[contentLabel+this.getLanguage])
        {
          //content found
          return dataSource.fields[contentLabel+this.getLanguage];
        }
        else
        {
          //default language
          return dataSource.fields[contentLabel+"ENG"];
        }        
      }        
    },
    computed: {
        getLanguage: function () {
            this.language = this.$store.state.language;
            this.keyId++;
            return this.language
        }
  },
}
</script>


