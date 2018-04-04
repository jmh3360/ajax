/**
 * 
 * 	+'<select name="user">'
	+'    <option value="member">회원</option>'
	+'    <option value="admin">관리자</option>'
	+'</select>'
 * 
 * var setCountArray=x=>{
    var a = new Array();
    for(var i=1; i<=x; i++){
        a.push(i);
    }
    return a;
}
 */

var createOption=x=>{
	var temp = '';
	$.each(x.arr,(i,j)=>{
		temp += '<option id="option-'+i+'" value="'+j+'"></option>'
	});
	return temp;
}
var createSelect =x=>{
	return '<select id="select-'+x.id+'" name="'+x.name+'"></select>'
}
var createForm =x=>{
	return '<form id = "'+x.id+'" action="'+x.action+'" method="post"></form>'
}
var boardFileUpload=x=>{

    return '<fieldset style="border:5px solid blue; height: 400px; width: 300px; background-color: white; margin-left: 550px;">'
        +'<div style="text-align: center; color: black">'
          +'<h1>FILE UPLOAD</h1>'
        +'</div>'
        +'<div id="div-fileupload" style="text-align: center">'
          +'<input type="file" size="30" name="file" style="display:inline-block; margin-top: 150px;"><br /><br /><br />'
      /*    +'<input  style="margin-top: 50px" type="submit" value="업로드" class="btn btn-primary btn-lg"/>'
          +'<input style="margin-top: 50px" type="reset" value="취 소" class="btn btn-default btn-lg"/>'*/
        +'</div>'
    +'</fieldset>'
}
var boardWriting=x=>{
	return '<div class="board_type1_write_wrap">'
	+'      <table class="board_write_type1">'
	+'        <tr>'
	+'          <td class="left" >'
	+'            <div class="column_name">글제목</div>'
	+'            <div class="column_desc"><input id="input-board-title" type="text" name="title" class="text_type1"/></div>'
	+'          </td>'
	+'        </tr>'
	+'        <tr>'
	+'          <td class="left">'
	+'            <ul class="split_three">'
	+'              <li>'
	+'                <div class="column_name">닉네임</div>'
	+'                <div class="column_desc"><input id="input-board-name" type="text" name="nickName" class="text_type1"/></div>'
	+'              </li>'
	+'              <li>'
	+'                <div class="column_name">옵션</div>'
	+'                <div class="column_desc">'
	+'                  <div>'
	+'                  <table><tr>'
	+'                    <td><a id="a-file-upload" class="popup-with-form" href="#test-form"><span class="glyphicon glyphicon-cloud-upload" aria-hidden="true"> 파일업로드</span></a></td>'
	+'      <td style="width: 100px; height: 100px"><div style="float: left; width: 100px; height: 100px"><img style="width: 50px; height: 50px" src="" alt="" /></div></td>'
	+'                  </tr></table>'
	+'                  </div>'
	+'                </div>'
	+'              </li> '
	+'            </ul>'
	+'          </td>'
	+'        </tr>'
	+'        <tr>'
	+'          <td class="left" >'
	+'            <div class="column_name">내용</div>'
	+'            '
	+'            <div class="column_desc">'
	+'              <textarea id="textarea-board-content" name="content" rows="" cols="" class="textarea_type1"></textarea>&nbsp;'
	+'            </div>'
	+'          </td>'
	+'        </tr> '
	+'      </table>'
	+'    </div>'
	+'    <!-- ok -->'
	+'    <div class="button_margin"></div>'
	+'    <div class="board_type1_write_button_wrap">'
	+'      <div id = "div-board-submitbox">'
	+'        <input type="submit" value="확 인"/>'
	+'        <input type="reset" value="취 소"/>'
	+'      </div>  '
	+'    </div>'
	+'  </div>'
}
var createNav=x=>{
	return '<nav id="'+x.id+'" class="'+x.clazz+'"></nav>'
}
var pagenation=x=>{
	return '<ul class="pagination">'
	+'    <c:if test="${page.prevBlock}">'
	+'      <li>'
	+'          <a href="#" aria-label="Previous" onclick="app.boardList'
	+'(${page.pageEnd-page.pageSize});return false;">'
	+'            <span aria-hidden="true">&laquo;</span>'
	+'          </a>'
	+'      </li>'
	+'    </c:if>'
	+'    '
	+'  <c:forEach begin="${page.pageStart}" end="${page.pageEnd}"  step="1"  varStatus="i">'
	+' '
	+'        <c:choose>'
	+'              <c:when test="${i.index eq page.pageNum}">'
	+'                <li>'
	+'                <a style="color: red" href="${path.context}/board/list?pageNum=${i.index}">${i.index}</a>'
	+'                </li>'
	+'               </c:when>'
	+'               '
	+'               <c:otherwise>'
	+'                <li>'
	+'                <a href="${path.context}/board/list?pageNum=${i.index}">${i.index}</a>'
	+'                </li>'
	+'               </c:otherwise>'
	+'         </c:choose>'
	+'      </c:forEach>'
	+'    '
	+'    <c:if test="${page.nextBlock}">'
	+'      <li>'
	+'        <a href="#" aria-label="Next" onclick="app.boardList(${page.pageStart+page.pageSize});return false;">'
	+'          <span aria-hidden="true">&raquo;</span>'
	+'        </a>'
	+'      </li>'
	+'    </c:if>'
	+'  </ul>'
}
var loginOutBox=x=>{
	return '<table id="'+x+'">'
	+'    <tr>'
	+'    <td><input id="login-userid-input" name="userid"'
	+'              type="text" value="장만호" placeholder="ID" tabindex="1" />'
	+'    </td>'
	+'    <td id="td-login-btn" rowspan="2">'
	
	+'    </td>'
	+'    </tr>'
	+'    <tr>'
	+'      <td><input id="login-password-input" name="password"'
	+'        type="password" value="1" placeholder="PASSWORD" tabindex="2" />'
	+'        <input type="hidden" name="cmd" value="login" />'
	+'        <input type="hidden" name="page" value="mypage" />'
	+'      </td>'
	+'    </tr>'
	+'  </table> '
	+' <a id="a-admin-link" href="#"> 관리자 </a>'
	+'<a id="a-join-link" href="#"> 회원가입 </a>'

}
var loginInBox=x=>{
	
}

function nav(){
	return '<nav class="navbar navbar-inverse">'
	+'  <div class="container-fluid">'
	+'    <!-- Brand and toggle get grouped for better mobile display -->'
	+'    <div class="navbar-header">'
/*	+'      <button id="btn-nav-1st" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">'
	+'        <span class="sr-only">Toggle navigation</span>'
	+'        <span class="icon-bar"></span>'
	+'        <span class="icon-bar"></span>'
	+'        <span class="icon-bar"></span>'
	+'      </button>'*/
	+'      <a class="navbar-brand" href="#">'
	+'    </a>'
	+'    </div>'
	+'    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'
	+'      <ul class="nav navbar-nav">'
	+'        <li id="li-home" class="active"><a href="#">'
	+'          <span class="glyphicon glyphicon-home" aria-hidden="true"> HOME</span></a></li>'
	+'        <li><a id="a-about" href="#">'
	+'          <span class="glyphicon glyphicon-map-marker" aria-hidden="true"> about</span>'
	+'        </a></li>'
	+'        <li id="li-board"><a id="span-board" href="#">'
	+'        </a></li>'
	+'        <li class="dropdown">'
	+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"  aria-expanded="false"> 선택 <span class="caret"></span></a>'
	+'          <ul class="dropdown-menu" role="menu">'
	+'            <li id = sequence-btn></li>'
	+'            <li id = math-btn></li>'
	+'            <li id = array-btn></li>'
	+'            <li id = sort-btn></li>'
	+'            <li id = application-btn></li>'
	+'          </ul>'
	+'        </li>'
	//검색 필터
	+'      <form id="form-search" class="navbar-form navbar-left" role="search">'
	+'        <li id="li-search-option" class="dropdown" style="margin-left: 500px">'
/*	+'<select name="user">'
	+'    <option value="member">회원</option>'
	+'    <option value="admin">관리자</option>'
	+'</select>'*/
	+'        </li>'
	+'			<li>'
	+'        <div id="div-search" class="form-group">'
	+'          <input id="input-search" type="text" class="form-control" placeholder="Search">'
	+'        </div>'
	/*+'        <button type="submit" class="btn btn-default">검 색</button>'*/
	+'		</li>'	
	+'      </form>'
	+'      <ul class="nav navbar-nav navbar-right">'
	+'        <li class="dropdown">'
	+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">'
	+'            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>'
	+'          <span class="caret"></span></a>'
	+'          <ul class="dropdown-menu" role="menu">'
	+'            <li><a id="a-mypage" href="#"> '
	+'              <span class="glyphicon glyphicon-user" aria-hidden="true"> 마이페이지 </span>'
	+'                </a></li>'
	+'                    <li id="li-login">'
	/*+'                        <a id="a-login" href="#"> '
	+'                            <span class="glyphicon glyphicon-user" aria-hidden="true">&nbsp;로그인</span>'
	+'                        </a>'*/
	+'                        <a id="a-join" href="#"> '
	+'                            <span class="glyphicon glyphicon-plus-sign" aria-hidden="true">&nbsp;회원가입</span>'
	+'                        </a>'
	+'                    </li>'
	+'                    <li>'
	+'                        <a id="a-logout" href="#">'
	+'                            <span class="glyphicon glyphicon-log-out" aria-hidden="true">&nbsp;로그아웃</span>'
	+'                        </a>'
	+'                    </li>  '
	+'          </ul>'
	+'      </ul>'
	+'    </div>'
	+'  </div>'
	+'</nav>'
	
}
function createButtonNav1st(){
	return ' <button id="btn-nav-1st" type="button" '
	+'	      class="navbar-toggle collapsed" data-toggle="collapse" '
	+' 		  data-target="#bs-example-navbar-collapse-1">'
	+'        <span class="sr-only">Toggle navigation</span>'
	+'        <span class="icon-bar"></span>'
	+'        <span class="icon-bar"></span>'
	+'        <span class="icon-bar"></span>'
	+'      </button>';
}
/*function createButtonLogin(){
	return '<a id="a-login" href="#"> '
	+'  <span class="glyphicon glyphicon-user" aria-hidden="true">&nbsp;로그인</span>'
	+'   </a>';
}
function sequenceBtn(){
	return  '<a id="a-burgerking" href="#"> 수열 </a>';
}
function mathBtn(){
	return  '<a id="math-btn" href="#"> 수학 </a>';
}
function arrayBtn(){
	return  '<a id="a-bitcamp" href="#"> 배열 </a>';
}
function sortBtn(){
	return  '<a id="a-mobile" href="#"> 정렬 </a>';
}
function ApplicationBtn(){
	return  '<a id="a-lotto" href="#"> 응용 </a>';
}
*/
var createFont=x=>{
	return'<font>'+x.val+'</font>'
}
var createATag=x=>{
	return '<a id ="'+x.id+'" href="'+x.link+'"> '+x.val+'</a>';
}
var createATag2=x=>{
	return '<a id="'+x.id+'" href="#"> '+x.val+'</a>';
}
var createSpan=x=>{
	return '<span id="'+x.id+'" class="glyphicon '+x.clazz+'"  aria-hidden="true">&nbsp'+x.val+'</span>';
}
var createHTag=x=>{
	return '<h'+x.size+'>'+x.val+'</h'+x.size+'>';
	
}
var createDiv=x=>{
	return '<div id = "'+x.id+'" class="'+x.clazz+'"></div>'
}
var createResult=()=>{
	
	return '<table>'
	+'  <tr><td>초기값</td><td>제한값</td><td>공차</td></tr>'
	+'  <tr><td><input type="text" id = "input-start"></td><td><input id = "input-limit" type="text"></td><td><input id = "input-tolerance" type="text"></td></tr>'
	+'  <tr><td>결과 값 <button id = "result-btn">go</button></td><td></td></tr>'
	+'</table>';
}
var createTab=x=>{
	var tab ='<table id = "'+x.id+'" class = "'+x.clazz+'">'
	+'<tr>'
	+'<th colspan ="5">'+x.txt+'</th>'
	+'</tr>';
	
	$.each(x.list,(i,j)=>{
		tab +='<tr>'
			+'<td >('+i+') '+j.title+'</td>'
			+'<td >('+i+') '+j.content+'</td>'
			+'<td >('+i+') '+j.title+'</td>'
			+'<td >('+i+') '+j.title+'</td>'
			+'<td >('+i+') '+j.title+'</td>'
			+'</tr>'
	});
	tab += '</table>'
	return tab ;
}
var setCountArray=x=>{
    var a = new Array();
    for(var i=1; i<=x; i++){
        a.push(i);
    }
    return a;
}
var createViewTr=x=>{
	var tmep ='';
	alert('trNum의 값은'+x.trNum);
	$.each(x.trNum,(i,j)=>{
		alert('trㅇ으each문 안 입니다'+j);
		temp +='<tr id="tr-'+x.id+'-'+j+'" class="'+x.clazz+'">'
		+createViewTd({
			tdNum:x.tdNum,
			tdClazz:x.tdClazz,
			id:x.id
		})+'</tr>';
	});
	return temp;
}
var createViewTd=x=>{
	alert('createViewTd오니?');
	var temp ='';
	$.each(x.tdNum,(i,j)=>{
		temp +='<td id ="td-'+x.id+'-'+j+'" class ="'+x.tdClazz+'"></td>'
	});
	return temp;
}
var createTable=x=>{
	return tab ='<table id ="'+x.id+'" class = "'+x.clazz+'"></table>'
}
//리스트를 이용하는 tr
var createTr=x=>{
	   var temp = '';
	   var trnum=0;
	   $.each(x.trList, (i,j)=>{
		   trnum++;
	       temp +='<tr id="tr_'+trnum+'" class="'+x.trClazz+'">'
	                   +createTd({
	                       list: j,
	                       q: trnum,
	                       klazz: x.jason.tdClazz
	                       })+'</tr>';
	   });
	   
	   return temp;
	}
//list를 이용하는 td
	var createTd=x=>{
	   var temp = '';
	   var w=0;
	    $.each(x.list,(k,j)=>{
	        w++;
	        temp +='<td id="td_'+x.q+'_'+w+'" class="'+x.klazz+w+'">'
	                                        +'&nbsp;'+j+'</td>';
	        
	    });
	   return temp;
	}

var createTh =x=>{
	var th = '<tr>';
	$.each(x.list,(i,j)=>{
		th+='<th>'+j+'</th>'
	});
	th += '</tr>'
	return th;
}
var createArrayTab=x=>{
	var tab ='<table id = "'+x.id+'" class = "'+x.clazz+'">'
	+'<tr >'
	+'<th colspan="2">'+x.val+'</th>'
	+'</tr>';
	$.each(x.jason,(i,j)=>{
		tab +='<tr>'
			+'<td id ="left'+i+'" style="width: 50%"><a id="a-'+i+'" href="#"> '+j+'</a></td>'
			+'<td id ="right'+i+'"></td>'
			+'</tr>'
	});
	
	return tab;
}
var createMyPageTab=x=>{
	var tab = '<table id = "'+x.id+'" class = "'+x.clazz+'">'

	var arr = [1,2,3,4];
	$.each(arr,(i,j)=>{
		tab +='<tr>'
			+'<td id ="a'+j+'"></td>'
			+'<td id ="b'+j+'"></td>'
			+'<td id ="c'+j+'"></td>'
			+'<td id ="d'+j+'"></td>'
			+'<td id ="e'+j+'"></td>'
			+'</tr>';
			
	});
	tab += '</table>';
	return tab;
}
var createRes=x=>{
	var h = '';
	$.each(x.jason,(i,j)=>{
		h +='<p id ="math-res-name-'+i+'">'+j+'</p>'
			+'<input id="math-res-in-'+i+'" type="'+x.type+'"/>';
	});
	
	return h;
}
var createUl=x=>{
	
	return '<ul id ="'+x.id+'" class="'+x.clazz+'"></ul>';
}
var createLi=x=>{
	return '<li id ="'+x.id+'" class="'+x.clazz+'"></li>';
}
var sequenceMonitor2=()=>{
	
	return '        <table id="tab-array" class="table table-bordered">'
    +'            <tr>'
    +'                <td id = "tab-array-arith" class="td1" style="width: 400px;"></td>'
    +'                <td id = "tab-array-res"  class="td2" rowspan="5" style="width: 400px;"></td>'
    +'            </tr>'
    +'        </table>';


}
var sequenceMonitor=()=>{
	//'    <div class="container" style="margin-top: 50px;">'
	//createHTag=('2',수열 알고 리즘)
	return '        <table id="tab-algo" class="table table-bordered">'
    +'            <tr>'
    +'                <td id = "tab-algo-arith" class="td1" style="width: 400px;"></td>'
    +'                <td id = "tab-algo-res"  class="td2" rowspan="5" style="width: 400px;"></td>'
    +'            </tr>'
    +'            <tr>'
    +'                <td id = tab-algo-switch></td>'
    +'            </tr>'
    +'            <tr>'
    +'                <td id = tab-algo-geo></td>'
    +'            </tr>'
    +'            <tr>'
    +'                <td id = tab-algo-fact></td>'
    +'            </tr>'
    +'            <tr>'
    +'                <td id = tab-algo-fibo></td>'
    +'            </tr>'
    +'        </table>';


}
var createButton =x=>{
	return '<button id = "'+x.id+'" class = "'+x.clazz+'">'+x.val+'</button>';
}
var createText=x=>{
	return '<h1 id = "'+x+'"></h1>'
}
var createInput = x=>{
	return '<input id = "'+x.id+'" value="'+x.val+'" class="'+x.clazz+'" type = "'+x.type+'"/>'
}
