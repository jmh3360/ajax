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
	var $wrapper,context,algo,view,$monitor,$wrapper2;
	var onCreate =()=>{
		$wrapper = $('#wrapper');
		$wrapper2 = $('#wrapper2');
		context = $.context();
		algo = $.javascript()+'/algo.js';
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
			$(createATag(createSpan('glyphicon-user','로그인'))).appendTo($('#li-login')).click(()=>{
				alert('LOGIN BUTTON CLICK');
			});
			$(createATag('수열')).appendTo($('#sequence-btn')).click(()=>{
				alert('수열 BUTTON CLICK');
				//어펜드to div를 랩퍼에게 전달
				$(createDiv('content','container')).appendTo($wrapper);
				$(createHTag('1','내가만든 테이블')).appendTo('#content');
				$('#content').css('margin-top', '50px').html(sequenceMonitor());
				$('#tab-algo-arith').append($(createATag('1+2+3+4+5+.......10')).click(()=>{
					alert('나와라얍');
					$('#tab-algo-res').html(createResult());
					$('#result-btn').on('click',()=>{
						alert('결과는 !!?');
						var x= $('#input-start').val();
						var y = $('#input-limit').val();
						var z = $('#input-tolerance').val();
						alert(z);
						$.getScript(algo,()=>{
							alert('c');
							
							$('#tab-algo-res').html(createHTag('2','결과 값 \n '+arith(x,y,z)))
							

						});
					});
				}));
				$('#tab-algo-switch').append($(createATag('1-2+3-4+5-6...+99-10')).click(()=>{
					alert('나와라얍');
					$('#tab-algo-res').html(createResult());
				}));
				$('#tab-algo-geo').append($(createATag('(-1)x2x(-3)x4....100')).click(()=>{
					alert('나와라얍');
					$('#tab-algo-res').html(createResult());
				}));
				$('#tab-algo-fact').append($(createATag('1+2+4+7+11+16+22....20번째 항')).click(()=>{
					alert('나와라얍');
					$('#tab-algo-res').html(createResult());
				}));
				$('#tab-algo-fibo').append($(createATag('피보나치 수열 20번째 항까지')).click(()=>{
					alert('나와라얍');
					$('#tab-algo-res').html(createResult());
					
				}));
				//이게 on click가 더 빠르당 ㅋㅋ
				
				
				
				/*$('#tab-algo-switch').append('1-2+3-4+5-6...+99-10');
				$('#tab-algo-geo').createATag('(-1)x2x(-3)x4....100');
				$('#tab-algo-fact').createATag('1+2+4+7+11+16+22....20번째 항');
				$('#tab-algo-fibo').createATag('피보나치 수열 20번째 항까지');*/
				
				/*$(sequenceMonitor()).appendTo('#content');*/
				/*$monitor.html(createDiv('container',sequenceMonitor(createHtag('2','Sequence Table'))));*/
				
			});
			
/*			$(createATag('등차수열')).appendTo($('#tab-algo-arith')).click(()=>{
				createDiv('arith','container').appendTo($wrapper);
			});*/
			$(createATag('수학')).appendTo($('#math-btn')).click(()=>{
				alert('수학 BUTTON CLICK');
				
			});
			$(createATag('배열')).appendTo($('#array-btn')).click(()=>{
				alert('배열 BUTTON CLICK');
			});
			$(createATag('정렬')).appendTo($('#sort-btn')).click(()=>{
				alert('정렬 BUTTON CLICK');
			});
			$(createATag('응용')).appendTo($('#application-btn')).click(()=>{
				alert('응용 BUTTON CLICK');
			});
		});
		
	};
	return{onCreate:onCreate};
})();

