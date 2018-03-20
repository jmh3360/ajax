var arith = (x,y,z)=>{
	alert('아리스'+y);
	//등차수열 초기값, 리밋값, 공차
	//1+2+3+...+10
	var sum = 0;
	sum = x*1;
	var k = x*1;
	var str = x+"+";
	for(var i =1;i<y*1;i++){
		if(i<y-1){
			k += z*1;
			sum +=k;
			str += k+"+";
			
		}else if(i=y-1){
			k += z*1;
			sum +=k;
			str += k+"=";
		}
			
			
		
	}
	return str+sum;
}