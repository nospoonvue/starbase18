import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import VueMarkdown from 'vue-markdown'

Vue.config.productionTip = false
//  Vue.prototype.$baseUrl = "https://script.google.com/macros/s/AKfycbzgJnPsDmqdl5wxs2Db0_3UXJ3h2rJHxxHgA_ZI8BuWQ5AwFdaB/exec"

Vue.prototype.$baseUrl = "https://script.google.com/macros/s/AKfycbxy316hbNN8U03kjgaaBbSLv60Jexfj5QIIBTARKY9jK3-1HeM26aYL5Q/exec"
                            


new Vue({
  router,
  store,
  render: h => h(App),
  components: {
    VueMarkdown
  },
  created()
  {


 
  },
  mounted()
  {

  }
}).$mount('#app')
