/**
 * 
 */

var app = app || {};
var route = route || {};
app = (()=>{
	var init =x=>{
		onCreate(x);//기능에 대한 초기화
		setContentView();//화면단을 구성하는것
	};
	var onCreate=x=>{
		route.init(x);
	};
	var setContentView=()=>{
		alert(route.$());
		$('#wrapper').empty();
		app.algolithm.init();
		
	};
	var test2 = ()=>{};
	return { //클로져
		init : init
	};
})();


//이방식이 왜 좋다고 한거 였ㅈㅈㅈ?
app.algolithm =(()=>{
	var init =()=>{
		onCreate();
		setContentView();
	};
	var onCreate =x=>{
		
	};
	var setContentView = ()=>{
		
		$('#wrapper').html('<h1>Hello AJAX</h1>');
	};
	return{init:init};
})();
/*app.router=(()=>{
	var onCreate=x=>{
		$.getScript(x+'/resources/js/router.js',()=>{
			$.extend(new Router(x));
			app.algorithm.onCreate();
		});
	};
	return{onCreate:onCreate};
});*/

route = (()=>{
	init=x=>{sessionStorage.setItem('x',x);};
	var $ = ()=>{
		return sessionStorage.getItem('x');
	};
	var onCreate=()=>{};
	var setContentView=()=>{};
	return{init:init,$:$};
})();