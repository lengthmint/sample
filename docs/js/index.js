Vue.use(VueChartkick);
var app = new Vue({
	el: '#app',
	data: function data() {
		return {
			chartData: [['Jan', 44], ['Feb', 27], ['Mar', 60], ['Apr', 55], ['May', 37], ['Jun', 40], ['Jul', 69], ['Aug', 33], ['Sept', 76], ['Oct', 90], ['Nov', 34], ['Dec', 22]] };

	} });