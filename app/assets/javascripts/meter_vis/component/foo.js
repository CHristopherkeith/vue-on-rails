Vue.component('Foo', {
  template: '<div>\
  				<div id="title">{{title}}</div>\
  				<button v-for="(item, index) in btItems" :class="cls[btStatus[index]]" @click="changeStatus(index)" class="staticBt" :id="\'bt\'+index" v-if="select">{{index}}</button>\
  				<button id="all" @click="changeAll" v-else>all</button>\
  				<div id="myChart"></div>\
  				<select v-model="selected">\
				    <option v-for="option in themeArr" :value="option.value">{{ option.text }}</option>\
			  	</select>\
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
  		},
  		option: {
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
		},
  		selected: 'DARK_THEME',
  		themeArr: [
			{text: 'DARK', value: 'DARK_THEME'},
			{text: 'SHINE', value: 'SHINE_THEME'},
			{text: 'GRAY', value: 'GRAY_THEME'},
			{text: 'MINT', value: 'MINT_THEME'},
			{text: 'MACARONS', value: 'MACARONS_THEME'},
			{text: 'SAKURA', value: 'SAKURA_THEME'},
		],
		themeVar: {
			'DARK_THEME' : DARK_THEME,
			'SHINE_THEME': SHINE_THEME,
			'GRAY_THEME': GRAY_THEME,
			'MINT_THEME': MINT_THEME,
			'MACARONS_THEME': MACARONS_THEME,
			'SAKURA_THEME': SAKURA_THEME
		},
		myChart: null
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
	
    this.myChart = echarts.init(document.getElementById('myChart'));
    this.myChart.setOption(this.option);  
    this.myChart.setTheme(DARK_THEME);  
  },
  watch: {
	selected: function(){
		// console.log(this.selected);
		this.myChart.setTheme(this.themeVar[this.selected]); 
	}
  }
})
