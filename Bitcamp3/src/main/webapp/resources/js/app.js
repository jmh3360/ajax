/**
 * 
 */

var app = app || {};


//최상의 객체의 두개 이상의 객체가 생성되면 안된다.
app=(()=>{
	
	var init=x=>{
		$.getScript(x+'/resources/js/router.js',()=>{
			$.extend(new Router(x));
			app.algorithm.onCreate();
			app.member.onCreate();
			app.board.onCreate();
		});
	};
	return{init:init};
})();//로컬 호스트 에러 문제일 때 실행 할때 필요한 ()를 안넣어줘서 Error 남
app.board=(()=>{
	var $wrapper,context,algo,view,image
	var onCreate=()=>{
		algo = $.javascript()+'/algo.js';
		view = $.javascript()+'/view.js'
		setContentView();
	};
	var setContentView=()=>{
		$.getScript(view,()=>{
			var json = null;
			$('#span-board').remove();
			$('#a-board').remove();
			$(createATag({id:'a-board', val : 
			createSpan({id:'nav-board', clazz : 'glyphicon-map-marker',val : '게시판'})})).
			appendTo('#li-board').
			on('click',()=>{
				alert('보드로 오너라');
			});
		});
			
	};
	return{onCreate:onCreate};
})();
app.member=(()=>{
	var $wrapper,context,algo,view,image,$monitor;
	var onCreate =()=>{
		$wrapper = $('#wrapper');
		context = $.context();
		algo = $.javascript()+'/algo.js';
		view = $.javascript()+'/view.js'
		setContentView();
	};
	var setContentView = ()=>{
		
		$.getScript(view,()=>{
			$wrapper.append(createDiv({id:'container',clazz:'login-container'}));
			$('#container').append(createDiv({id:'content',clazz:'login-content'}));
			$('#content').append(loginOutBox('login-inner-table'));
			
			$(createButton({id:'login-btn',clazz:'btn',val:'LOGIN'})).appendTo('#td-login-btn').on('click',e=>{
				e.preventDefault();
				
				//var jason = x.user
				var jason={
						'pass' : $('#login-password-input').val()};
				alert('login 버튼 클릭!!');
				var userid = $('#login-userid-input').val();
				$.ajax({
					url : context+'/members/'+userid+'/login',
					method : 'POST',
					data : JSON.stringify(jason),
					dataType : 'json',
					contentType : 'application/json',
					success : x=>{
						var id =x.user.id;
						alert('로그인 성공'+x.user.id);
						if(x.success==='1'){
							alert('로그인 성공한 id :'+id);
							var jason = x.member
							mypage(jason);
						}else{
							alert('로그인 실패'+x.user.id);
						}
					},
					error : (x,h,m)=>{
						alert('로그인에서 에러발생 x='+x+', h='+h+', m='+m);
					}
				});
			});
			
			
		});
	};
	var login=()=>{
		
	};
	var mypage = x=>{
		
		var id = x.id;
		var pass = x.pass;
		
			$.getScript(view,()=>{
				
				$('#content').html(createMyPageTab({id:'myPageInfo',clazz:'table table-bordered'}));	
				$('#b1').remove();
				$('#c1').remove();
				$('#d1').remove();
				$('#e1').remove();
				$('#a1').attr('colspan',5);
				$('#a3').remove();
				
				$('#a1').html(createHTag({size :'1', val:'MY PAGE'}));
				$('#a2').attr('rowspan',2);
				var arr1 = ['ID','PASS','주민번호'];
				
				$.each(arr1,(i,j)=>{
					
				});
				$('#b2').html(createHTag({size:'2',val:'ID'}));
				$('#b3').html(createHTag({size:'2',val:'PASS'}));
				$('#b4').html(createHTag({size:'2',val:'SSN'}));
				$('#a4').html(createHTag({size:'2',val:x.name}));
				$('#c2').html(createHTag({size:'2',val:x.id}));
				$('#c3').html(createHTag({size:'2',val:x.pass}));
				$('#c4').html(createHTag({size:'2',val:x.ssn}));
				$('#d2').html(createHTag({size:'2',val:'EMAIL'}));
				$('#d3').html(createHTag({size:'2',val:'ADDRESS'}));
				$('#d4').html(createHTag({size:'2',val:'PHONE'}));
				$('#e2').html(createHTag({size:'2',val:x.email}));
				$('#e3').html(createHTag({size:'2',val:x.addr}));
				$('#e4').html(createHTag({size:'2',val:x.phone}));
				$('#myPageInfo').attr('style','border :2px solid black');
				
			});
			

	};
	return{onCreate:onCreate,mypage:mypage};
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
			
			$(createATag({id:'a-login',val:createSpan({id:'span-login',clazz:'glyphicon-user',val:'로그인'})})).appendTo($('#li-login')).click(()=>{
				alert('LOGIN BUTTON CLICK');
			});
			$(createATag({id:'a-sequence',val:'수열'})).appendTo($('#sequence-btn')).click(()=>{
				alert('수열 BUTTON CLICK');
				//어펜드to div를 랩퍼에게 전달
				$(createDiv({id:'content',clazz:'container'})).appendTo($wrapper);
				$(createHTag({size:'1',val:'내가만든 테이블'})).appendTo('#content');
				$('#content').css('margin-top', '50px').html(sequenceMonitor());
				$('#tab-algo-arith').append($(createATag({id:'a-arith',val:'1+2+3+4+5+.......10'})).click(()=>{
					
					$('#tab-algo-res').html(createResult());
					$('#result-btn').on('click',()=>{
						alert('결과는 !!?');
						var x= $('#input-start').val();
						var y = $('#input-limit').val();
						var z = $('#input-tolerance').val();
						if(x !== '' && y !== '' && z !== ''&&
								x >0&&y >0&&z >0){
							$.getScript(algo,()=>{
								$('#tab-algo-res').html(createHTag({size:'2',val:'결과 값 \n '+arith(x,y,z)}));
							});
						}else{
							alert('값을 넣어 주세요');
						}
						
					});
				}));
				$('#tab-algo-switch').append($(createATag({id:'a-switch',val:'1-2+3-4+5-6...+99-10'})).click(()=>{
					$('#tab-algo-res').html(createResult());
					$('#result-btn').on('click',()=>{
						alert('결과는 !!?');
						var x= $('#input-start').val();
						var y = $('#input-limit').val();
						var z = $('#input-tolerance').val();
						if(x !== '' && y !== '' && z !== ''&&
								x >0&&y >0&&z >0){
							$.getScript(algo,()=>{
								$('#tab-algo-res').html(createHTag({id:'2',val:'결과 값 \n '+switchSeq(x,y,z)}));
							});
						}else{
							alert('값을 넣어 주세요');
						}
						
					});
				}));
				$('#tab-algo-geo').append($(createATag({id:'a-geo',val:'(-1)x2x(-3)x4....100'})).click(()=>{
					
					$('#tab-algo-res').html(createResult());
					$('#result-btn').on('click',()=>{
						var x = $('#input-start').val();
						var y = $('#input-limit').val();
						var z = $('#input-tolerance').val();
						
						if(x !== '' && y !== '' && z !== ''&&
								x >0&&y >0&&z >0){
							$.getScript(algo,()=>{
								$('#tab-algo-res').html(createHTag({size:'2',val:'결과 값 \n '+geometricSeq(x,y,z)}))
							});
						}else{
							alert('값을 넣어 주세요');
						}
					});
				}));
				$('#tab-algo-fact').append($(createATag({id:'a-fact',val:'1+2+4+7+11+16+22....20번째 항'})).click(()=>{
					//여기는 테스트 입니당.
					alert('test');
					$.getScript(algo,()=>{
						$('#tab-algo-res').html(createTab({id:'test',clazz:'tab-algo-fiveByFive',jason:fiveByFive(),txt:'Basic'}));
					});
				}));
				$('#tab-algo-fibo').append($(createATag({id:'a-fibo',val:'피보나치 수열 20번째 항까지'})).click(()=>{
					
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
			$(createATag({id:'a-math',val:'수학'})).appendTo($('#math-btn')).click(()=>{
				
				$(createDiv({id:'content',clazz:'container'})).appendTo($wrapper);
				$('#content').css('margin-top', '50px').
				html(createArrayTab({id:'math-tab',clazz:'table table-bordered',jason:createMathTable(),val:'수학 알고리즘'}));
				$('#right1').remove();
				$('#right2').remove();
				$('#right3').remove();
				$('#right4').remove();
				$('#right5').remove();
				$('#right6').remove();
				$('#right7').remove();
				$('#right8').remove();
				//렝쓰가 먹는 이유는 알고에서 배열을 넣어 놔서 그런다 그래도 뭔가 이상핟..
				$('#right0').attr('rowspan',createMathTable().length+1);
				$('#a-0').on('click',()=>{
					
					$('#right0').html(createRes({type:'text',jason:createMath0()}));
					var result='';
					
					$('#right0').append(createButton({id:'math-res-btn',clazz:'btn',val:'RESULT'}));
					$('#math-res-btn').on('click',()=>{
						$('#right0').append(createDiv({id:'math-res-div',clazz:''}));
						var x = $('#math-res-in-0').val();
						if(x !== '' &&	x >0){
							result=decimalCheck(x);
						}else{
							result='빈칸을 채워 임마!!';
						}
						$('#math-res-div').html(createHTag({size:'2',val:result}));
					});
				});
				$('#a-1').on('click',()=>{
					$('#right0').html(createRes({type:'text',jason:createMath0()}));
					var result='';
					
					$('#right0').append(createButton({id:'math-res-btn',clazz:'btn',val:'RESULT'}));
					$('#math-res-btn').on('click',()=>{
						$('#right0').append(createDiv({id:'math-res-div',clazz:''}));
						var x = $('#math-res-in-0').val();
						if(x !== '' &&	x >0){
							result="RESULT : "+decimalCount(x);
						}else{
							result='빈칸을 채워 임마!!';
						}
						$('#math-res-div').html(createHTag({size:'2',val:result}));
					});
				});
				$('#a-2').on('click',()=>{
					$('#right0').html(createRes({type:'text',jason:createMath0()}));
					var result='';
					
					$('#right0').append(createButton({id:'math-res-btn',clazz:'btn',val:'RESULT'}));
					$('#math-res-btn').on('click',()=>{
						$('#right0').append(createDiv({id:'math-res-div',clazz:''}));
						var x = $('#math-res-in-0').val();
						if(x !== '' &&	x >0){
							result="RESULT : "+decimalSum(x);
						}else{
							result='빈칸을 채워 임마!!';
						}
						$('#math-res-div').html(createHTag({size:'2',val:result}));
					});
				});
				$('#a-3').on('click',()=>{
					$('#right0').html(createRes({type:'text',jason:createMath3()}));
					var result='';
					
					$('#right0').append(createButton({id:'math-res-btn',clazz:'btn',val:'RESULT'}));
					$('#math-res-btn').on('click',()=>{
						$('#right0').append(createDiv({id:'math-res-div',clazz:''}));
						var x = $('#math-res-in-0').val();
						var y = $('#math-res-in-1').val();
						if(x !== '' &&	x >0 && y !== '' &&	y >0){
							result="RESULT : "+greatestCommonDivisor(x,y);
						}else{
							result='빈칸을 채워 임마!!';
						}
						$('#math-res-div').html(createHTag({size:'2',val:result}));
					});
				});
				$('#a-4').on('click',()=>{
					$('#right0').html(createRes({type:'text',jason:createMath3()}));
					var result='';
					
					$('#right0').append(createButton({id:'math-res-btn',clazz:'btn',val:'RESULT'}));
					$('#math-res-btn').on('click',()=>{
						$('#right0').append(createDiv({id:'math-res-div',clazz:''}));
						var x = $('#math-res-in-0').val();
						var y = $('#math-res-in-1').val();
						if(x !== '' &&	x >0 && y !== '' &&	y >0){
							result="RESULT : "+leastCommonMultiple(x,y);
						}else{
							result='빈칸을 채워 임마!!';
						}
						$('#math-res-div').html({size:'2',val:result});
					});
				});
				$('#a-5').on('click',()=>{
					$('#right0').html(createRes({type:'text',jason:createMath0()}));
					var result='';
					
					$('#right0').append(createButton({id:'math-res-btn',clazz:'btn',val:'RESULT'}));
					$('#math-res-btn').on('click',()=>{
						$('#right0').append(createDiv({id:'math-res-div',clazz:''}));
						var x = $('#math-res-in-0').val();
						if(x !== '' &&	x >0){
							result="RESULT : "+primeFactorization(x);
						}else{
							result='빈칸을 채워 임마!!';
						}
						$('#math-res-div').html(createHTag({size:'2',val:result}));
					});
				});
				$('#a-6').on('click',()=>{
					$('#right0').html(createRes({type:'text',jason:createMath6()}));
					var result='';
					
					$('#right0').append(createButton({id:'math-res-btn',clazz:'btn',val:'RESULT'}));
					$('#math-res-btn').on('click',()=>{
						$('#right0').append(createDiv({id:'math-res-div',clazz:''}));
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
						$('#math-res-div').html(createHTag({size:'2',val:result}));
					});
				});
				$('#a-7').on('click',()=>{
					$('#right0').html(createRes({type:'text',jason:createMath0()}));
					var result='';
					
					$('#right0').append(createButton({id:'math-res-btn',clazz:'btn',val:'RESULT'}));
					$('#math-res-btn').on('click',()=>{
						$('#right0').append(createDiv({id:'math-res-div',clazz:''}));
						var x = $('#math-res-in-0').val();
						if(x !== '' &&	x >0){
							result="RESULT : "+fiveMultipleSum(x);
						}else{
							result='빈칸을 채워 임마!!';
						}
						$('#math-res-div').html(createHTag({size:'2',val:result}));
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


