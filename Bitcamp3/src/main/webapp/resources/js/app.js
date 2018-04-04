/**
 * 
 */

var app = app || {};


//최상의 객체의 두개 이상의 객체가 생성되면 안된다.
app={init:x=>{
		$.getScript(x+'/resources/js/router.js',()=>{
			$.extend(new Router(x));
			app.algorithm.onCreate();
			app.member.onCreate();
			
		})
}};
//호텔 예약이나 
//비행기 예약할 때 js로 화면을 재구성 하게 되면
//동적으로 화면이 변할 때 재구성전 정보를 담을 수 있다.
app.cookie={
		setCookie: x=>{
			document.cookie = x.key + "="+x.val
		},
		getCookie: x=>{
			var name = x.key + "=";
			var res = document.cookie.split(';');
			for(var i =0; i<res.length;i++){
				var t = res[i];
				while(t.charAt[0]==''){
					t = t.substring(1,t.length);
					if(t.indexOf(name)==0){
						return t.substring(name.length,t.length);
					}
				}
			}
		},
		removeCookie:x=>{
			createCookie(name,"",-1);
		}
};
//정규식 확인하는 법
app.rgx={
		isNumber : x=>{
			return typeof x ==='number' && isFinite(x);
		},
		passwordChecker : x =>{
			var r = /^[0-9a-zA-Z]{4,10}/;
			return r.test(x)?"yes":"no";
			//숫자,영문 대소문자, 4부터 10까지
		},//0은 이 들어가면 오류 나는데 오류 안나게 어떻게 하지?
		adminChecker : x =>{
			var r = /^[0-9]{1,5}/;
				return r.test(x)?"yes":"no"
		}
}
app.home = {
        move : x=>{
        $.getScript(x,()=>{
            $('#li-home').empty();
            $(createATag({id:'a-home',link:'#',val:createSpan({id:'',clazz:'glyphicon glyphicon-home',val:'HOME'})}))
              .appendTo($('#li-home'))
              .on('click',()=>{
              app.member.onCreate();
              });    
        });
        
    }
}
app.nav = (x=>{
    var $wrapper,context,algo,view,image;
        var onCreate=x=>{
             $wrapper = $('#wrapper');
             context = $.context();
             image = $.image();
             view = $.javascript()+'/view.js';
             setContentView();
             app.home.move(view);
        };
    var setContentView = x =>{
    	$('#li-search-option').
    	append($(createSelect({
    		id:'search',
    		name:'user'})).
    			append(createOption({
    				arr:['member','admin']})));
  
    	$('#option-0').text('회원');
    	$('#option-1').text('관리자');
    	
    	$(createButton({id:'btn-search',clazz:'btn btn-default',val:'검 색'})).appendTo('#div-search').
    	on('click',()=>{
    		
    		$.ajax({
				url : context+'/search/'+$('#select-search option:selected').val()+'',
				method : 'POST',
				data : JSON.stringify({
					type:$('#select-search option:selected').val(),
					content:$('#input-search').val()}),
				dataType : 'json',
				contentType : 'application/json',
				success : x=>{
					
					alert(x.id);
					
				},
				error : (x,h,m)=>{
					alert('검색 실패 x='+x+', h='+h+', m='+m);
				}
			});
    	});
    	$('#span-board').remove();
		$('#a-board').remove();
		$(createATag({id:'a-board',link:'#', val : 
		createSpan({id:'nav-board', clazz : 'glyphicon-map-marker',val : '게시판'})})).
		appendTo('#li-board').
		on('click',()=>{
			app.board.onCreate();
			$('#nav-board').text('글쓰기');
			//디폴트 설정을 하면 기존 자바에서 사용하던 click를 지우고 
			//ajax설정에 클릭이벤트를 사용할 수 있다.
			$.getScript(view,()=>{
				
				$('#a-board').remove();
				$(createATag({id:'a-board',link:'#', val : 
					createSpan({id:'nav-board', clazz : 'glyphicon-map-marker',val : '글쓰기'})})).
					appendTo('#li-board').on('click',e=>{
					e.preventDefault();
					
					$('#container').html(createForm({id:'form-board',action:''}));
					$('#form-board').html(boardWriting(''));
					$(createButton({id:'btn-board-submit',clazz:'',val:'진짜 전송버튼'})).appendTo('#div-board-submitbox').
					on('click',e=>{
						e.preventDefault();
						
						$.ajax({
							url:context+'/board/post/article',
							data:JSON.stringify({
								id : $('#input-board-name').val(),
								title : $('#input-board-title').val(),
								content : $('#textarea-board-content').val()
							}),
							dataType:'json',
							contentType:'application/json',
							method:'POST',
							success:d=>{
								alert('성공');
								$('#form-board').ajaxForm({
									url : context+'/board/post/article',
									dataType : 'text',
									enctype : "multipart/form-data",
									beforeSubmit : function(){
										alert("로딩화면 !");
									},
									success : function(data){
										alert("등록완료 !"+data.result);
									}
								}).submit();
							},
							error:function(x,s,m){alert(m);}
						});
						/*$.post( context+"/board/post/article",{
							name : $('#input-board-name').val(),
							title : $('#input-board-title').val(),
							content : $('#textarea-board-content').text()
						}, x=> {
							 alert(x);
							});*/
					});
					$('#a-file-upload').on('click',e=>{
						e.preventDefault();
						$.magnificPopup.open({
							items: {src: 
								$(createForm({
								id:'form-board-fileupload',
								action:context+'/board/file/upload'}))
								.html($(boardFileUpload('')))}, type : 'inline'}, 0);
						$('#div-fileupload').append($(createInput({
							id:'btn-file-upload',
							clazz:'btn btn-primary btn-lg',
							type:'submit',
							val:'업로드'})).attr('style','margin-top: 50px').on('click',e=>{
							alert('파일 업로드 한다임마!');
							
							
							$('#form-board-fileupload').ajaxForm({
								url : context+'/board/file/upload',
								dataType : 'json',
								enctype : "multipart/form-data",
								beforeSubmit : function(){
									alert("로딩화면 !");
								},
								success : function(data){
									alert("등록완료 !"+data.result);
								}
							}).submit();
							}));
						$('#div-fileupload').append($(createInput({
							id:'btn-file-reset',
							clazz:'btn btn-default btn-lg',
							type:'reset',
							val:'취소'})).attr('style','margin-top: 50px').on('click',e=>{e.preventDefault();
							alert('파일 업로드 취소한다');
							}));
						
					});
				});
				
			});
		});
		$(createButtonNav1st()).appendTo($('#btn-nav-1st')).click(()=>{
			alert('Button Click!!');
		});
		
		$(createATag({id:'a-login',val:createSpan({id:'span-login',clazz:'glyphicon-user',val:'로그인'})})).appendTo($('#li-login')).click(()=>{
			alert('LOGIN BUTTON CLICK');
		});
    };
    return {onCreate:onCreate};
})();
app.board=(x=>{
	var $wrapper,context,algo,view,image,$monitor;
	var onCreate =()=>{
		$wrapper = $('#wrapper');
		context = $.context();
		algo = $.javascript()+'/algo.js';
		view = $.javascript()+'/view.js'
		setContentView();
	};
	var setContentView =()=>{
		articles(1);
	};
	
			//이렇게 표현하는 방식을
			
			var articles = x=>{
				//아래의 친구는 에러 메세지가 아예 없다.
				//얘는 db 를 받기만 하는 친구라 에러가 발생이 안하는 거란다.

				$.getJSON(context+'/articles/'+x,y=>{
					
					$.getScript(context+'/resources/js/view.js',()=>{
						
						$('#container').empty();
						$(createTable({id : 'articles',clazz:'table table-bordered'})).
						appendTo('#container');
						$(createTh({list:['글 번호','글 제목','내용','작성일','수정/삭제'],
						clazz:''})).appendTo('#articles');
						  $(createTr({
			                    trList: y.list,
			                    trClazz: '',
			                    tdList: '',
			                    tdClazz: '',
			                    jason:{tdList:'',tdClazz:'flag-'}
			                }))
			                .appendTo('#articles');
						  $('.flag-5').html(createATag({id:'',val:'수정/삭제'}));
						  $('.flag-5').attr('style','width: 5%');
						  $('.flag-4').attr('style','width: 5%');
						  $('.flag-1').attr('style','width: 5%');
						  $('.flag-2').attr('style','width: 15%');

						  $(createNav({id:'nav-page',clazz:''})).appendTo('#container');
						  $(createUl({id:'ul-page',clazz:'pagination'})).appendTo('#nav-page');
						  $('#nav-page').attr('style','text-align: center');
						  var t ='';
						  if(y.page.prevBlock){
							 t  +='<li>'
								+'<a href="#"  aria-label="Previous" onclick="app.board.articles('+y.page.pagePrev+');'
								+'return false;" >'
								+'<span aria-hidden="true">'
								+' &laquo;'
								+' </span>'
								+'</a>'
							  +'</li>';
						  }for(var i=y.page.pageStart;i<=y.page.pageEnd;i++){
							 
							  if(i==y.page.pageNum){
								 t +='<li><a href="#" onclick="app.board.articles('+i+'); return false;" '
	                                +'style="background-color:#3175af; color: white">'+i+'</a></li>';
	                            } else{
	                                t += '<li><a href="#" onclick="app.board.articles('+i+'); return false;">'+i+'</a></li>';
	                            }
						  }
						  if(y.page.nextBlock){
							  t+='<li>'
							  +'  <a href="#" aria-label="Next" onclick="app.board.articles('+y.page.pageNext+'); return false;" >'
							  +'    <span aria-hidden="true">&raquo;</span>'
							  +'  </a>'
							  +'</li>';
						  }
						$('#ul-page').html(t);
			
						/*$('#container').html(createTab({list:y,id:'articles-tab',clazz:'table-bordered'}));*/
						/*$('#container').html(createTable({id:'board-table',clazz:'table-bordered'}));
						$(createTr({trSize:setCountArray(1),tdSize:setCountArray(5),tdId:'td-board-',trId:'tr-board-'}));*/
					});
					
					
				});
				
			}
		return{onCreate:onCreate,articles:articles}
})();

//로컬 호스트 에러 문제일 때 실행 할때 필요한 ()를 안넣어줘서 Error 남

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
			$('#container').remove();
			$wrapper.append(createDiv({
				id:'container',
				clazz:'login-container'}));
			$('#container').append(createDiv({
				id:'content',
				clazz:'login-content'}));
			$('#content').append(loginOutBox('login-inner-table'));
			
			$(createButton({
				id:'login-btn',
				clazz:'btn',
				val:'LOGIN'})).appendTo('#td-login-btn').on('click',x=>{
					
				login(x);

			});
			$('#a-admin-link').on('click',e=>{
				if(confirm('직원맞습니까?')){
					var p = prompt('직원번호를 입력하세요');
					if(app.rgx.adminChecker(p)==='yes'){
						var pass = prompt('비번을 입력하세요');
						$.ajax({
							url : context+'/admin/'+p+'/login',
							method : 'POST',
							data : JSON.stringify({
								id:p,
								pass:pass}),
							dataType : 'json',
							contentType : 'application/json',
							success : x=>{
								
								if(x.success==='1'){
									
									admin(x);
								}else if(x.admin.adminID!==p){
									alert('정확한 암호를 입력하세요..');
								}
								
							},
							error : (x,h,m)=>{
								alert('로그인에서 에러발생 x='+x+', h='+h+', m='+m);
							}
						});
					}else{
						alert('숫자값만 입력해 주세여');
					}
			
				}else{
					alert('직원만 접근 가능합니다.');
				}
			
			});
			var admin= x=>{
				
				$('#container').html('<h1>환영합니다.</h1>')
			}
			$('#a-join-link').on('click',e=>{
				//요런 기능이 있으니 참고하고 쓰세욧
				e.preventDefault
				if(app.rgx($('#').val())==='yes'){
					
				}else{
					alert('정규식에 맞지 않습니다. 다시 입력해 주세요');
					
				}
				alert('회원가입하러 갑시다.')
				$('#content').empty();
				
				$('#content').append(createTable({id:'table-join',clazz:''}));
				$(createViewTr({
					trNum:setCountArray(8),
					tdNum:setCountArray(2),
					id:'join',
					clazz:''
					})).appendTo('#table-join');
			});
			
		});
	};
	var login=e=>{
		
		e.preventDefault();
		
		var jason={
				'pass' : $('#login-password-input').val()};
		
		var userid = $('#login-userid-input').val();
		$.ajax({
			url : context+'/member/'+userid+'/login',
			method : 'POST',
			data : JSON.stringify(jason),
			dataType : 'json',
			contentType : 'application/json',
			success : x=>{
				var id =x.member.id;
				
				if(x.success==='1'){
					
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
			 app.nav.onCreate();
			
			$(createATag({id:'a-sequence',link:'#',val:'수열'})).appendTo($('#sequence-btn')).click(()=>{
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


