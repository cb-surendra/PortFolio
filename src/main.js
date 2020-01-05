// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue';
import router from './router'
import './../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './../node_modules/bootstrap/dist/js/bootstrap'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.component('v-icon', Icon)
Vue.config.productionTip = false
Vue.use(BootstrapVue);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mode: 'history',
  components: { App },
  template: '<App/>'
})
