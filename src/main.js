import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import CV from './components/cv/Cv.vue'
import About from './components/person/About.vue'
import moment from 'moment'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(moment);
Vue.prototype.moment = moment

const routes = [
  { path: '/', component: CV},
  { path: '/CV', component: CV},
  { path: '/About', component: About}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
