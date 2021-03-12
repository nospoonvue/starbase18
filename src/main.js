/*
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import VueMarkdown from 'vue-markdown'

Vue.config.productionTip = false
Vue.prototype.$baseUrl = "https://script.google.com/macros/s/AKfycbzgJnPsDmqdl5wxs2Db0_3UXJ3h2rJHxxHgA_ZI8BuWQ5AwFdaB/exec"


                            


new Vue({
  router,
  store,
  render: h => h(App),
  components: {
    VueMarkdown
  },
  created()
  {
    /*
		if(this.$route.query.nocache && this.$route.query.nocache === 'true') 
		{
      Vue.prototype.$baseUrl = "https://script.google.com/macros/s/AKfycbxy316hbNN8U03kjgaaBbSLv60Jexfj5QIIBTARKY9jK3-1HeM26aYL5Q/exec?nocache=false"
		}		
		else
		{
      Vue.prototype.$baseUrl = "https://script.google.com/macros/s/AKfycbxy316hbNN8U03kjgaaBbSLv60Jexfj5QIIBTARKY9jK3-1HeM26aYL5Q/exec?nocache=false"
		}	
    */
 
  //},
  //mounted()
  //{

  //}
//}).$mount('#app')


import Vue from 'vue'
import App from './App.vue'
//import axios from 'axios'
import router from './router'
import store from './store'
//import VueMarkdown from 'vue-markdown'
//import Menu from "@/components/Menu.vue";
//import vueConfig from '../vue.config'

Vue.config.productionTip = false
//Vue.prototype.$baseUrl = "https://script.google.com/macros/s/AKfycbzFu9XjeWN1BKMEYe6kNv16jQhiatpqBTFj0mlEfg/exec"
//Vue.prototype.$baseUrl = "https://script.google.com/macros/s/AKfycbwML4WonnuCnyHdCw2egjIBnvllhJH9Sb4PLapuGe73qwHcv6MQ4etu8g/exec"
Vue.prototype.$baseUrl = "https://script.google.com/macros/s/AKfycbx5GLrXhpdBh2avqiQLvHYSs5TmPTPbK_tAGu5zeUoL2GdJ3hKbsKLs/exec"
Vue.prototype.$appName = "Starbase18"


new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
		this.$store.commit('initialiseStore');
	},
  components: {
  //  VueMarkdown,
  //  Menu
  },
  created()
  {
    // Subscribe to store updates
    store.subscribe((mutation, state) => {
      // Store the state object as a JSON string
     localStorage.setItem('store', JSON.stringify(state));
    });

 
  },
  mounted()
  {

   
  }
}).$mount('#app')
