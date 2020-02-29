import Vue from 'vue'
import App from './App'
import config from './common/js/config.js' //配置
import lib from './common/js/lib.js' //方法
import store from './store'
Vue.config.productionTip = false
Vue.prototype.config = config;
Vue.prototype.lib = lib;
Vue.prototype.$store = store;
App.mpType = 'app'

const app = new Vue({
    ...App,
	config,
	lib,
	store
})
app.$mount()
