import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import i18n from './i18n'

import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
Vue.use(Viewer);

import VueWaypoint from 'vue-waypoint'
 
// Waypoint plugin
Vue.use(VueWaypoint)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
