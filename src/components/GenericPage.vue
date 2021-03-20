<template>
 <div id="genericPage">

    <DataConnection :application="this.application" :table="this.table" :view="this.view" :page="this.page" :paging="this.paging" :pageSize="this.pageSize" :offset="this.offset" :filter="this.filter" :parent="this" :key="key" />

    <h1 :class="getTranslated">{{ this.page }}</h1>
    <section id="" class="post" v-for="item in info" :key="item.id">
        <h2 :v-show="!!getContent('SectionHeader',item)" :key="'head'+keyId" :class="getSpan('SectionHeader',item)">{{ getContent('SectionHeader',item) }}</h2>
        <p :class="getSpan('SectionContent',item)"><vue-markdown :key="'content'+keyId">{{ getContent('SectionContent',item) }}</vue-markdown></p>
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
    name: "GenericPage",
    components: {DataConnection, VueMarkdown, Paging},

    data() 
    {
    return {
        key:0,
        info: null,
        ready: false,
        offset: 0,
        application: this.$application, 
        table: "GenericContent",
        view: "Public",
        filter: '{GenericPage}="'+ this.page + '"',
        language: "ENG",
        keyId:1,
        titleClass: ""        
        }
    },
    props: {
        page: { default: "404", type: String  },
        paging: false,
        pageSize: null,
        translateTitle: { default: true, type: Boolean  },
    },
    created() {
       
    },
    methods:{
        getSpan: function(contentLabel, dataSource)
        {
            if(dataSource.fields[contentLabel+this.getLanguage]) return this.titleClass = "notranslate";
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
        },
        getTranslated: function (){
            if(!this.translateTitle) return "notranslate";
        }
  },
}
</script>


