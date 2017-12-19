$(document).ready(function(){
	// 1. js文件引入时（coffee.js）已注册foo组件
	// 2. 初始化页面视图（包含foo组件）
	var meterView = new MeterView();
	var routes = [
		{ path: '/', component: meterView['Bar1']},
		{ path: '/bar1', component: meterView['Bar1'] },
		{ path: '/bar2', component: meterView['Bar2'] }
	];
	// 3. 初始化路由
	var router = new VueRouter({
	 routes: routes
	})
	// 4.将vue挂载到app元素上
	var app = new Vue({
		el: '#app',
		data: {
			isSelect: true
		},
		methods: {
			changeMode: function(){
				console.log(this.$router)
				console.log(this.$route)
				if(this.$route.path !== '/bar2'){
					this.$router.push('/bar2')
				}else{
					this.$router.push('/bar1')
				}
			}
		},
		router: router
	})
})