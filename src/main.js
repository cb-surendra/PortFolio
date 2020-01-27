import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
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
import './../node_modules/@fortawesome/fontawesome-svg-core'
import './../node_modules/@fortawesome/fontawesome-free'
import './../node_modules/@fortawesome/free-solid-svg-icons'

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
