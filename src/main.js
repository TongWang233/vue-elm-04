/*工程js的入口文件*/
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'
import app from './App.vue'
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'
import './css/reset.css'
import './framework/icon.css'
import './framework/reset.css'
import './framework/font-awesome/css/font-awesome.min.css'


var vm = new Vue({
	el: '#app',
	data: {
		
	},
	methods: {
		
	},
	render: c => c(app),
	router
})
