/**
 * 
 */

var app = app || {};


//최상의 객체의 두개 이상의 객체가 생성되면 안된다.
app=(()=>{
	alert('1');
	var init=x=>{
		$.getScript(x+'/resources/js/router.js',()=>{
			$.extend(new Router(x));
			app.algorithm.onCreate();
		});
	};
	return{init:init};
})();//로컬 호스트 에러 문제일 때 실행 할때 필요한 ()를 안넣어줘서 Error 남

// 이방식이 왜 좋다고 한거 였ㅈㅈㅈ?
app.algorithm =(()=>{
	var $wrapper,context,algorithm,view;
	var onCreate =()=>{
		$wrapper = $('#wrapper');
		context = $.context();
		algorithm = $.javascript()+'/algorithm.js';
		view = $.javascript()+'/view.js'
		setContentView();
	};
	var setContentView = ()=>{
		$wrapper.empty();
		$.getScript(view,()=>{
			$wrapper.html(nav());
			$(createButtonNav1st()).appendTo($('#btn-nav-1st')).click(()=>{
				alert('Button Click!!');
			});
			$(createButtonLogin()).appendTo($('#li-login')).click(()=>{
				alert('LOGIN BUTTON CLICK');
			});
		});
	};
	return{onCreate:onCreate};
})();

