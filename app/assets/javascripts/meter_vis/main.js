$(document).ready(function(){
	// var routes = [
	//   { path: '/foo', component: Foo },
	//   { path: '/bar', component: Bar }
	// ];
	var app = new Vue({
		el: '#app',
		data: {
			'title': 'Downlink'
		},
		methods: {
		},
		mounted: function(){
			var option = {
			    tooltip : {
			        formatter: "{a} <br/>{b} : {c}%"
			    },
			    toolbox: {
			        show : false,
			        feature : {
			            mark : {show: true},
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    series : [
			        {
			            name:'业务指标',
			            type:'gauge',
			            detail : {formatter:'{value}G'},
			            data:[{value: 50, name: 'Gbps'}]
			        }
			    ]
			};
            var myChart = echarts.init(document.getElementById('myChart'));
            myChart.setOption(option);     
		}
	})
})