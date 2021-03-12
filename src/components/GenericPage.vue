<template>
 <div id="genericPage">

    <DataConnection :application="this.application" :table="this.table" :view="this.view" :page="this.page" :paging="this.paging" :pageSize="this.pageSize" :offset="this.offset" :filter="this.filter" :parent="this" :key="key" />

    <h1>{{ this.page }}</h1>
    <section id="" class="post" v-for="item in info" :key="item.id">
        <h2 :v-show="!!item.fields['SectionHeader'+getLanguage]" :key="'head'+keyId">{{ item.fields['SectionHeader'+ getLanguage] }}</h2>
        <p><vue-markdown :key="'content'+keyId">{{ item.fields['SectionContent'+ getLanguage] }}</vue-markdown></p>
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
        application: "Starbase18", 
        table: "GenericContent",
        view: "Public",
        filter: '{GenericPage}="'+ this.page + '"',
        language: "ENG",
        keyId:1        
        }
    },
    props: {
        page: { default: "404", type: String  },
        paging: false,
        pageSize: null,
    },
    created() {
       
    },
    methods:{
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


