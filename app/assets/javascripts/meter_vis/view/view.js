var MeterView = function(){

}
MeterView.prototype = {
	'Bar1': Vue.component('Bar1', {
	  template: '<foo :select=true></foo>'
	}),
	'Bar2': Vue.component('Bar2', {
	  template: '<foo :select=false></foo>'
	})
}