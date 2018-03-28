/**
 * 
 */
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
	+' <a id="login-admin-link" href="#"> 관리자 </a>'
	+'<a id="login-join-link" href="#"> 회원가입 </a>'

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
	+'        <li id="a-home" class="active"><a href="#">'
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
	+'      </ul>'
	+'      <form class="navbar-form navbar-left" role="search">'
	+'        <div class="form-group">'
	+'          <input type="text" class="form-control" placeholder="Search">'
	+'        </div>'
	+'        <button type="submit" class="btn btn-default">검 색</button>'
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
var createATag=x=>{
	return '<a id ="'+x.id+'" href="#"> '+x.val+'</a>';
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
	
	$.each(JSON.parse(x.jason),(i,j)=>{
		tab +='<tr>'
			+'<td >('+i+') '+j.a+'</td>'
			+'<td >('+i+') '+j.b+'</td>'
			+'<td >('+i+') '+j.c+'</td>'
			+'<td >('+i+') '+j.d+'</td>'
			+'<td >('+i+') '+j.e+'</td>'
			+'</tr>'
	});
	tab += '</table>'
	return tab ;
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
var createUl=(x,y)=>{
	
	return '<ul id ="'+x+'" class="'+y+'"></ul>';
}
var createLi=(x,y,z)=>{
	return '<li id ="'+x+'" class="'+y+'"></li>';
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
var createInput = (x,y)=>{
	return '<input id = "'+x+'" type = "'+y+'"/>'
}
var createTR = (x,y)=>{
	return '<tr id = "'+x+'">+y+</tr>'
}
var createTR = (x,y)=>{
	return '<tr id = "'+x+'">+y+</tr>'
}