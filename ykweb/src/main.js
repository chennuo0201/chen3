import Vue from 'vue'
import App from './App.vue'
import '@babel/polyfill'
import router from './router'
import store from './store'
import "./assets/css/unit.css"
import './plugins/element.js'
import ElemntUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Qs from 'qs'
import MD5 from "@/common/SDK/md5.min"
import Vueaxios from 'vue-axios'
import utils from '@/common/util/utils.js'
Vue.use(ElemntUI)
Vue.use(Vueaxios, axios)
Vue.prototype.$axios = axios
Vue.prototype.qs = Qs
Vue.prototype.md5 = MD5
Vue.prototype.utils = utils
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')