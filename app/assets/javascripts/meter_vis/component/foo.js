Vue.component('Foo', {
  template: '<div>\
  				<div id="title">{{title}}</div>\
  				<button v-for="(item, index) in btItems" :class="cls[btStatus[index]]" @click="changeStatus(index)" class="staticBt" :id="\'bt\'+index" v-if="select">{{index}}</button>\
  				<button id="all" @click="changeAll" v-else>all</button>\
  				<div id="myChart"></div>\
  			</div>',
  props: ['select'],
  data: function(){
  	return {
  		title: 'Downlink',
  		btItems: [0,1],
  		btStatus: [0,0],
  		cls: {
  			0: 'release',
  			1: 'trigger'
  		}
  		// select: true
  	}
  },
  methods: {
  	changeStatus: function(index){
  		var nowStatus = this.btStatus[index];
  		// console.log(nowStatus)
  		nowStatus = nowStatus === 0 ? 1 : 0;
  		this.btStatus = this.btStatus.map(function(value, iindex){
  			if(iindex === index){
  				return nowStatus;
  			}else{
  				return value
  			}
  		})
  		// console.log(this.btStatus)
  	},
  	changeAll: function(){
  		// console.log(this)
  	}
  },
  mounted: function(){
  	// console.log(typeof this.select)
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
