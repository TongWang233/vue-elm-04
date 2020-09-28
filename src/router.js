//单独定义路由
//引入vue-router
import VueRouter from 'vue-router'
//引入4个vue组件
import Home from './components/tabbar/home.vue';
import Find from './components/tabbar/find.vue';
import Order from './components/tabbar/order.vue';
import My from './components/tabbar/my.vue';
import BusinessList from './components/businessList.vue';
// 创建路由对象
var router = new VueRouter({
	//定义路由匹配规则
	routes: [
		{ 'path': '/', redirect: '/home'},
		{ 'path': '/home', 'component': Home},
		{ 'path': '/find', 'component': Find},
		{ 'path': '/order', 'component': Order},
		{ 'path': '/my', 'component': My},
		{ 'path': '/components/businessList', 'component': BusinessList}
	],
	 //使用自定义类设置高亮
     linkActiveClass: 'mui-active'
})

//为外界暴露router对象
export default router;