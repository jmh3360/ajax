/**
 * 컨트롤러 같은 놈이다.
 * 전역객체이다 여러명이서 작업시 오염이 되기 때문?
 */
function Router(x){
	sessionStorage.setItem('context',x);
	sessionStorage.setItem('javascript',x+'/resources/js');
	sessionStorage.setItem('style',x+'/resources/css');
	sessionStorage.setItem('img',x+'/resources/img');
	return{
		context: ()=>{return sessionStorage.getItem('context');},
		javascript: ()=>{return sessionStorage.getItem('javascript');},
		style: ()=>{return sessionStorage.getItem('style');},
		image: ()=>{return sessionStorage.getItem('img');}
	};
}
