import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    version: '',
    language: 'ENG',
    labels: null
  },
  mutations: {
		initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
		},    
    setLanguage(state, lang)
      {
        this.state.language = lang;
      }
  },
  actions: {
  },
  modules: {
  }
})
