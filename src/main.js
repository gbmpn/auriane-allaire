import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PrismicVue from '@prismicio/vue'
import linkResolver from './link-resolver'

const accessToken = '' // Leave empty if your repo is public
const endpoint = 'https://auriane-test.prismic.io/api/v2' 

Vue.config.productionTip = false

Vue.use(PrismicVue, {
  endpoint,
  apiOptions: { accessToken },
  linkResolver
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')

