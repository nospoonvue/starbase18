<template>
 <div id="menu">
      <DataConnection :application="this.application" :table="this.table" :view="this.view" :page="this.page" :paging="this.paging" :pageSize="this.pageSize" :offset="this.offset" :filter="this.filter" :parent="this" :key="key" />
        <nav id="menu" class="notranslate">
			<header class="major">
		    	<h2>Menu</h2>
			</header>
			<ul  v-for="item in info" :key="item.id">
                <li style="border-top: 1px solid rgba(210,215,217,.75);" v-if="item.fields.Controler" :key="item.id+getKey"><router-link :to="'/'+item.fields.Controler">{{ item.fields['Title'+getLanguage][0] }}</router-link></li>												
                <li v-if="!item.fields.Controler" :key="item.id+getKey"><router-link :to="'/'">{{ item.fields['Title'+getLanguage][0] }}</router-link></li>                       
		   	</ul>
		</nav>
</div>
</template>

<style >
</style>

<script>

import DataConnection from '@/components/DataConnection.vue'

export default 
{
    name: 'MenuGenerator',
    components: {DataConnection},

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
        language:"ENG",
        table: "Menu",
        view: "Public",
        paging: false,
        pageSize:1,
        filter:null
        }
    },
    props: {

    },
    mounted()
    {
       // alert('fsd');
    },
    created() {
      //  alert('hi');
    },
    methods:{
    },
    computed: {
        getKey: function()
	   {
		return this.keyId;
	   },
        getLanguage: function () {
         
            this.language = this.$store.state.language;
            this.keyId++;
            return this.language
        }
  },
}
</script>


