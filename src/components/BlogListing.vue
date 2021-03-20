<template>
 <div id="blogListing">
    
    <DataConnection :application="this.application" :table="this.table" :view="this.view" :page="this.page" :paging="this.paging" :pageSize="this.pageSize" :offset="this.offset" :filter="this.filter" :parent="this" :key="key" />
    <section id="posts" class="post" v-for="(item) in info" :key="item.id">
        <div class="content" :key="'content'+keyId">
            <header>
                <h1 :class="getSpan('Title',item)">{{ getContent('Title',item) }}</h1>
                <p :class="getSpan('Subtitle',item)"><vue-markdown>{{ getContent('Subtitle',item) }}</vue-markdown></p>
                <h5>{{ item.fields.PublishDate }} </h5>
            </header>
            <p :class="getSpan('Article',item)"><vue-markdown>{{ getContent('Article',item) }}</vue-markdown></p>

            <span class="image object">
                <img v-if="item.fields.Photos" v-bind:src="item.fields.Photos[0].url" v-bind:alt="getContent('Title',item)" style="width:100%" />
            </span>
            <!--
            <ul class="actions">
                <li><a href="#" class="button big">Learn More</a></li>
            </ul>
            -->
            <hr/>
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
    name: "BlogListing",
    components: {DataConnection, VueMarkdown, Paging},

    data() 
    {
    return {
        key:0,
        info: null,
        ready: false,
        offset: 0,
        application: this.$application, 
        table: "Blog",
        view: "Public",    
        filter: null,
        keyId: 1,
        language: "ENG",
        page: "Blog"//not used
        }
    },
    props: {
        paging: false,
        pageSize: null,
    },
    ready() {
this.keyId++;

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


