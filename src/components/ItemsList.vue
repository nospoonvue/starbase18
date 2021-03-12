<template>
 <div id="blogListing">

    <DataConnection :application="this.application" :table="this.table" :view="this.view" :page="this.page" :paging="this.paging" :pageSize="this.pageSize" :offset="this.offset" :filter="this.filter" :parent="this" :key="key" />

    <section id="" class="post" v-for="item in info" :key="item.id" style="float:left;">
		<div class="" style="max-width:400px;margin:10px; height:500px;  display: flex; flex-direction: column;  justify-content: space-between;" >
			<article>
				<a :href="item.fields.Url" class="image" target="_blank"><img :key="'img'+keyId" v-if="item.fields.Photos" v-bind:src="item.fields.Photos[0].url" v-bind:alt="item.fields['Title'+getLanguage]" style="width:100%" /></a>
				<h3 :key="'h3'+keyId">{{ item.fields['Title'+getLanguage] }}</h3>
                <vue-markdown :key="'article'+keyId">{{ item.fields['Article'+getLanguage] }}</vue-markdown>
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
        application: "Starbase18",
        keyId:1,
        language:"ENG"

        }
    },
    props: {
        paging: false,
        pageSize: null,
        table: null,
        view: null,
        filter: null
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


