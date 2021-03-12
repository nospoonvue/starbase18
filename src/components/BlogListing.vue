<template>
 <div id="blogListing">

    <DataConnection :application="this.application" :table="this.table" :view="this.view" :page="this.page" :paging="this.paging" :pageSize="this.pageSize" :offset="this.offset" :filter="this.filter" :parent="this" :key="key" />
    <section id="" class="post" v-for="item in info" :key="item.id">
        <div class="content" >
        <br/>
        <span class="image object">
                <img v-bind:src="item.fields.Photos[0].url" v-bind:alt="item.fields['TitleENG']" style="width:100%" />
        </span>
            <header>
                <h1>{{ item.fields['TitleENG'] }}</h1>
                <p><vue-markdown>{{ item.fields['SubtitleENG'] }}</vue-markdown></p>
                <h5>{{ item.fields.PublishDate }} </h5>
            </header>
            <p><vue-markdown>{{ item.fields['ArticleENG'] }}</vue-markdown></p>
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
        application: "Starbase18", 
        table: "Blog",
        view: "Public",    
        }
    },
    props: {
        paging: false,
        pageSize: null,
    },
    created() {
    },
    methods:{
    },
    computed: {
  },
}
</script>


