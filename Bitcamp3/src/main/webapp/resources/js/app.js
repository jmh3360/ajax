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
			app.member.onCreate();
		});
	};
	return{init:init};
})();//로컬 호스트 에러 문제일 때 실행 할때 필요한 ()를 안넣어줘서 Error 남
app.member=(()=>{
	var $wrapper,context,algo,view,image,$monitor;
	var onCreate =()=>{
		$wrapper = $('#wrapper');
		$monitor = $('#monitor');
		context = $.context();
		algo = $.javascript()+'/algo.js';
		view = $.javascript()+'/view.js'
		setContentView();
	};
	var setContentView = ()=>{
		
		$.getScript(view,()=>{
			$wrapper.append(createDiv('container','login-container'));
			$('#container').append(createDiv('content','login-content'));
			$('#content').append(loginOutBox('login-inner-table'));
			
			$(createButton('login-btn','','LOGIN')).appendTo('#td-login-btn').on('click',()=>{
				alert('login 버튼 클릭!!')
			});
			
			/*+'      <button id="login-btn">LOGIN</button>'*/
		});
	};
	var login=()=>{
		
	};
	return{onCreate:onCreate};
})();
// 이방식이 왜 좋다고 한거 였ㅈㅈㅈ?
app.algorithm =(()=>{
	var $wrapper,context,algo,view;
	var onCreate =()=>{
		$wrapper = $('#wrapper');
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
					
					$('#tab-algo-res').html(createResult());
					$('#result-btn').on('click',()=>{
						alert('결과는 !!?');
						var x= $('#input-start').val();
						var y = $('#input-limit').val();
						var z = $('#input-tolerance').val();
						if(x !== '' && y !== '' && z !== ''&&
								x >0&&y >0&&z >0){
							$.getScript(algo,()=>{
								$('#tab-algo-res').html(createHTag('2','결과 값 \n '+arith(x,y,z)))
							});
						}else{
							alert('값을 넣어 주세요');
						}
						
					});
				}));
				$('#tab-algo-switch').append($(createATag('1-2+3-4+5-6...+99-10')).click(()=>{
					$('#tab-algo-res').html(createResult());
					$('#result-btn').on('click',()=>{
						alert('결과는 !!?');
						var x= $('#input-start').val();
						var y = $('#input-limit').val();
						var z = $('#input-tolerance').val();
						if(x !== '' && y !== '' && z !== ''&&
								x >0&&y >0&&z >0){
							$.getScript(algo,()=>{
								$('#tab-algo-res').html(createHTag('2','결과 값 \n '+switchSeq(x,y,z)))
							});
						}else{
							alert('값을 넣어 주세요');
						}
						
					});
				}));
				$('#tab-algo-geo').append($(createATag('(-1)x2x(-3)x4....100')).click(()=>{
					
					$('#tab-algo-res').html(createResult());
					$('#result-btn').on('click',()=>{
						var x = $('#input-start').val();
						var y = $('#input-limit').val();
						var z = $('#input-tolerance').val();
						
						if(x !== '' && y !== '' && z !== ''&&
								x >0&&y >0&&z >0){
							$.getScript(algo,()=>{
								$('#tab-algo-res').html(createHTag('2','결과 값 \n '+geometricSeq(x,y,z)))
							});
						}else{
							alert('값을 넣어 주세요');
						}
					});
				}));
				$('#tab-algo-fact').append($(createATag('1+2+4+7+11+16+22....20번째 항')).click(()=>{
					//여기는 테스트 입니당.
					alert('test');
					$.getScript(algo,()=>{
						$('#tab-algo-res').html(createTab('test','tab-algo-fiveByFive',fiveByFive(),'Basic','default'));
					});
				}));
				$('#tab-algo-fibo').append($(createATag('피보나치 수열 20번째 항까지')).click(()=>{
					
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
				
				$(createDiv('content','container')).appendTo($wrapper);
				$('#content').css('margin-top', '50px').
				html(createArrayTab('math-tab','table table-bordered',createMathTable(),'수학 알고리즘','default'));
				$('#right1').remove();
				$('#right2').remove();
				$('#right3').remove();
				$('#right4').remove();
				$('#right5').remove();
				$('#right6').remove();
				$('#right7').remove();
				$('#right8').remove();
				$('#right0').attr('rowspan',createMathTable().length+1);
				$('#a-0').on('click',()=>{
					
					$('#right0').html(createRes('text',createMath0()));
					var result='';
					
					$('#right0').append(createButton('math-res-btn','','RESULT'));
					$('#math-res-btn').on('click',()=>{
						$('#right0').append(createDiv('math-res-div',''));
						var x = $('#math-res-in-0').val();
						if(x !== '' &&	x >0){
							result=decimalCheck(x);
						}else{
							result='빈칸을 채워 임마!!';
						}
						$('#math-res-div').html(createHTag('2',result));
					});
				});
				$('#a-1').on('click',()=>{
					$('#right0').html(createRes('text',createMath0()));
					var result='';
					
					$('#right0').append(createButton('math-res-btn','','RESULT'));
					$('#math-res-btn').on('click',()=>{
						$('#right0').append(createDiv('math-res-div',''));
						var x = $('#math-res-in-0').val();
						if(x !== '' &&	x >0){
							result="RESULT : "+decimalCount(x);
						}else{
							result='빈칸을 채워 임마!!';
						}
						$('#math-res-div').html(createHTag('2',result));
					});
				});
				$('#a-2').on('click',()=>{
					$('#right0').html(createRes('text',createMath0()));
					var result='';
					
					$('#right0').append(createButton('math-res-btn','','RESULT'));
					$('#math-res-btn').on('click',()=>{
						$('#right0').append(createDiv('math-res-div',''));
						var x = $('#math-res-in-0').val();
						if(x !== '' &&	x >0){
							result="RESULT : "+decimalSum(x);
						}else{
							result='빈칸을 채워 임마!!';
						}
						$('#math-res-div').html(createHTag('2',result));
					});
				});
				$('#a-3').on('click',()=>{
					$('#right0').html(createRes('text',createMath3()));
					var result='';
					
					$('#right0').append(createButton('math-res-btn','','RESULT'));
					$('#math-res-btn').on('click',()=>{
						$('#right0').append(createDiv('math-res-div',''));
						var x = $('#math-res-in-0').val();
						var y = $('#math-res-in-1').val();
						if(x !== '' &&	x >0 && y !== '' &&	y >0){
							result="RESULT : "+greatestCommonDivisor(x,y);
						}else{
							result='빈칸을 채워 임마!!';
						}
						$('#math-res-div').html(createHTag('2',result));
					});
				});
				$('#a-4').on('click',()=>{
					$('#right0').html(createRes('text',createMath3()));
					var result='';
					
					$('#right0').append(createButton('math-res-btn','','RESULT'));
					$('#math-res-btn').on('click',()=>{
						$('#right0').append(createDiv('math-res-div',''));
						var x = $('#math-res-in-0').val();
						var y = $('#math-res-in-1').val();
						if(x !== '' &&	x >0 && y !== '' &&	y >0){
							result="RESULT : "+leastCommonMultiple(x,y);
						}else{
							result='빈칸을 채워 임마!!';
						}
						$('#math-res-div').html(createHTag('2',result));
					});
				});
				$('#a-5').on('click',()=>{
					$('#right0').html(createRes('text',createMath0()));
					var result='';
					
					$('#right0').append(createButton('math-res-btn','','RESULT'));
					$('#math-res-btn').on('click',()=>{
						$('#right0').append(createDiv('math-res-div',''));
						var x = $('#math-res-in-0').val();
						if(x !== '' &&	x >0){
							result="RESULT : "+primeFactorization(x);
						}else{
							result='빈칸을 채워 임마!!';
						}
						$('#math-res-div').html(createHTag('2',result));
					});
				});
				$('#a-6').on('click',()=>{
					$('#right0').html(createRes('text',createMath6()));
					var result='';
					
					$('#right0').append(createButton('math-res-btn','','RESULT'));
					$('#math-res-btn').on('click',()=>{
						$('#right0').append(createDiv('math-res-div',''));
						var x = $('#math-res-in-0').val();
						var y = $('#math-res-in-1').val();
						var z = $('#math-res-in-2').val();
						var a = $('#math-res-in-3').val();
						var b = $('#math-res-in-4').val();
						if(x !== '' && y !== '' && z !== ''&& a !== ''&& b !== ''&&
						   x >0 && y >0 && z >0 && a >0 && b >0){
							result="RESULT : "+maxNum(x,y,z,a,b);
						}else{
							result='빈칸을 채워 임마!!';
						}
						$('#math-res-div').html(createHTag('2',result));
					});
				});
				$('#a-7').on('click',()=>{
					$('#right0').html(createRes('text',createMath0()));
					var result='';
					
					$('#right0').append(createButton('math-res-btn','','RESULT'));
					$('#math-res-btn').on('click',()=>{
						$('#right0').append(createDiv('math-res-div',''));
						var x = $('#math-res-in-0').val();
						if(x !== '' &&	x >0){
							result="RESULT : "+fiveMultipleSum(x);
						}else{
							result='빈칸을 채워 임마!!';
						}
						$('#math-res-div').html(createHTag('2',result));
					});
				});
				$('#a-8').on('click',()=>{
					$('#right0').html(createRes('text',createMath6()));
					var result='';
					
					$('#right0').append(createButton('math-res-btn','','RESULT'));
					$('#math-res-btn').on('click',()=>{
						$('#right0').append(createDiv('math-res-div',''));
						var x = $('#math-res-in-0').val();
						var y = $('#math-res-in-1').val();
						var z = $('#math-res-in-2').val();
						var a = $('#math-res-in-3').val();
						var b = $('#math-res-in-4').val();
						if(x !== '' && y !== '' && z !== ''&& a !== ''&& b !== ''&&
						   x >0 && y >0 && z >0 && a >0 && b >0){
							result="RESULT : "+findNearNum(x,y,z,a,b);
						}else{
							result='빈칸을 채워 임마!!';
						}
						$('#math-res-div').html(createHTag('2',result));
					});
				});
			});
			$(createATag('배열')).appendTo($('#array-btn')).click(()=>{
				alert('배열 BUTTON CLICK');
				$(createDiv('content','container')).appendTo($wrapper);
				$('#content').css('margin-top', '50px').
				html(createArrayTab('array-tab','table table-bordered',createArrayTable(),'배열 알고리즘','default'));
				$('#right1').remove();
				$('#right2').remove();
				$('#right3').remove();
				$('#right4').remove();
				$('#right5').remove();
				$('#right6').remove();
				$('#right0').attr('rowspan',createArrayTable().length+1);
				
				

			});
			$(createATag('정렬')).appendTo($('#sort-btn')).click(()=>{
				alert('정렬 BUTTON CLICK');
				$(createDiv('content','container')).appendTo($wrapper);
				$('#content').css('margin-top', '50px').
				html(createArrayTab('sort-tab','table table-bordered',createArrayTable(),'정렬 알고리즘','default'));
				$('#right1').remove();
				$('#right2').remove();
				$('#right3').remove();
				$('#right4').remove();
				$('#right5').remove();
				$('#right6').remove();
				$('#right0').attr('rowspan',createArrayTable().length+1);
				$('#a-1').on('click',()=>{
					$('#right0').html(createResult());
					
				});
			});
			$(createATag('응용')).appendTo($('#application-btn')).click(()=>{
				alert('응용 BUTTON CLICK');
				$(createDiv('content','container')).appendTo($wrapper);
				$('#content').css('margin-top', '50px').
				html(createArrayTab('app-tab','table table-bordered',createAppTable(),'응용 알고리즘','default'));
				$('#right1').remove();
				$('#right2').remove();
				$('#right3').remove();
				$('#right0').attr('rowspan',createAppTable().length+1);
			});
		});
		
	};
	return{onCreate:onCreate};
})();


