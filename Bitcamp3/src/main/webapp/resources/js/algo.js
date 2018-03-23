var arith = (x,y,z)=>{
	
	// 등차수열 초기값, 리밋값, 공차
	// 1+2+3+...+10
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
var switchSeq =(x,y,z)=>{

	// 스위치 수열 초기값, 리밋값, 20번째 항, 공차
	// 1-2+3-4+5-6...+99-10
	
	var sum = 0;
	var k = 0;

	
	for(var i =1;i<=(y*1);i+=(z*1)){
		if(i%2==0){
			k += z*1;
			sum -=k;
		}
		else{
			k += z*1;
			sum +=k*1;
		}
	}
	return sum;
}
var geometricSeq =(x,y,z)=>{
	var sum = x*1;
	var sum2 = x*1;
	alert("gemetricSeq");
	for (var i = 0;i<(y*1);i++){
		sum *=(z*1);
		alert("sum의 값"+sum);
		sum2 +=(sum);
		alert("sum2의 값"+sum2);
	}
	return sum2;
}
//팩토리얼
var fact =(x, y)=>{
    var  x = x*1, y = y*1;
    var sum = 0;
    var k = x;
    var str = "";
    for(var i=1; i<=y; i++) {
        k *= i;
        sum += k;
    };
    return str+sum;
};
// 피보나치
var fibo=(x, y, z)=>{
    var  x = x*1, y = y*1, z = z*1;
    var a = x;
    var b = z;
    var c = a + b;
    var str = "";
    var sum = a+b;
    for(var i=1; i<y-1; i++){
        sum += c;
        a = b;
        b = c;
        c = a + b;
    };
    return str+sum;
};

//소수 판별
var decimalCheck=x=>{
    var x = x*1;
    var str = "";
    for(var i=2; i<=x; i++){
        if((x%i) == 0) {
            str = "No!";
        } else {
            str = "Yes!";
        }
    }
    return str;
};
//소수 갯수
var decimalCount=x=>{
    var x = x*1;
    var k = 2
    var count = 0;
    var str = "";
    for(var i=2; i<=x; i++) {
        console.log(count);
        for(var j=2; j<=i; j++){
            if((i%j)==0) {
                if(i==j) {
                    count++;
                    break;
                } else {
                    break;
                }
            }
        }
    }
    return str+count;
};
//소수 합
var decimalSum=x=>{
    var x = x*1;
    console.log(x);
    var sum = 0;
    var a, b;
    var str = "";
    a = 2;
    for(;;){
        b=2;
        for(;;){
            if(a % b == 0) {
                if(a == b) {
                    sum += a;
                    break;
                } else {
                    break;
                }
            } else {
                b++;
            }
        }
        if(a < x){
            a++;
            continue;
        } else {
            break;
        }
    }
    return str+sum;
};
// 최대 공약수
var greatestCommonDivisor=(x, y)=>{
    var x = x*1, y = y*1;
    var j;
    var temp;
    var str = "";
    j = (x<y) ? x : y;
    for(var i=1; i<=j; i++){
        if(x%i == 0 && y%i == 0) {
            temp = i;
        }
    }
    return str+temp;
}; 
// 최소 공배수
var leastCommonMultiple=(x, y)=>{
    var x = x*1, y = y*1;
    var j;
    var temp;
    var str = "";
    j = (x>y) ? x : y;
    for(var i=j;;i++){
        if(i%x==0 && i%y==0) {
            temp = i;
            break;
        }
    }
    return str+temp;
};
// 소인수분해
var primeFactorization=x=>{
    var x = x*1;
    var s = new Array(20);
    var c = "";
    for(var i=2; i<=x; i++){
        if(x%i == 0) {
            if(x==i) {
                c += i;
                x = x/i;
                i--;
            } else {
                c += i+"X";
                x = x/i;
                i--;
            }
        } 
    }
    return c;
};
//최대값
var maxNum=(x, y, z, a, b)=>{
    var x=x*1, y=y*1, z=z*1, a=a*1, b=b*1;
    var num = [x,y,z,a,b];
    var max = num[0];
    var str = "";
    for(var i=1; i<5; i++){
        if(max < num[i]) {
            max = num[i];
        }
    }
    return str + max;
};
//최소값
var minNum=(x, y, z, a, b)=>{
    var x=x*1, y=y*1, z=z*1, a=a*1, b=b*1;
    var num = [x,y,z,a,b];
    var min = num[0];
    var str = "";
    for(var i=1; i<5; i++){
        if(min > num[i]) {
            min = num[i];
        }
    }
    return str + min;
};
//5배수 합
var fiveMultipleSum=x=>{
    var x=x*1;
    var sum=0;
    var str="";
    for(var i=1; i<=x; i++){
        if(i%5==0) {
            sum += i;
        }
    }
    return str+sum;
};
//7에 가까운 수
var findNearNum=(x, y, z, a, b)=>{
    var x=x*1, y=y*1, z=z*1, a=a*1, b=b*1;
    var num = [x,y,z,a,b];
    var near = 7;
    var min = 9;
    var nearNum = 0;
    var str = "";
    for(var i=0; i<num.length; i++){
        var abs = Math.abs(num[i] - near);
        if(min > abs) {
            min = abs;
            nearNum = num[i];
        }
    }
    return str + nearNum;
};
var fiveByFive=()=>{
	var mtx = new Array(new Array(5), new Array(5),
	new Array(5), new Array(5),new Array(5));
	var x=[
		{	
			a : 1,
			b : 2,
			c : 3,
			d : 4,
			e : 5
	},
		{
			a : 6,
			b : 7,
			c : 8,
			d : 9,
			e : 10
	},
	{
			a : 11,
			b : 12,
			c : 13,
			d : 14,
			e : 15
	},
	{
			a : 16,
			b : 17,
			c : 18,
			d : 19,
			e : 20
	},
	{
			a : 21,
			b : 22,
			c : 23,
			d : 24,
			e : 25
	}

];
	var a= new Array();
	var o = null;
	var k = 1;
	for(var i =0; i<5; i++){
		o = new Object();
		o.a = k++;
		o.b = k++;
		o.c = k++;
		o.d = k++;
		o.e = k++;
		a.push(o);
	}
	return JSON.stringify(a);
}

var createArrayTable=()=>{
	
	var mtx = ['선택 정렬','버블 정렬','삽입 정렬','석차 구하기','이분 검색','병합','스택'];
	return mtx;
}
var createMathTable=()=>{
	
	var mtx = ['소수의 판별','소수의 개수','소수의 합구하기','최대공약수','최소공배수','소인수분해','최대값,최소값','5의 배소의 합','7에 가장 가까운 수'];
	return mtx;
}
var createAppTable=()=>{
	
	var mtx = ['화폐단위','사과 구입','구구단','반 배정'];
	return mtx;
}
var createMath0=()=>{
	
	var mtx = ['수 입력'];
	return mtx;
}
var createMath3=()=>{
	
	var mtx = ['수 입력 1','수 입력 2'];
	return mtx;
}
var createMath6=()=>{
	
	var mtx = ['수 입력 1','수 입력 2','수 입력 3','수 입력 4','수 입력 5'];
	return mtx;
}
