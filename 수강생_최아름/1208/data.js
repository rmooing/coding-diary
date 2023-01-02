//1.string
var string = "javascript";
console.log(string);

//2.number
//숫자
var s =100;
console.log(s);
//문자열
var num = "10";
console.log(num);
//형변환(문자열->숫자 데이터로 형변환)
var t = Number("500");
console.log(t);

//3.boolean
var s = true;
console.log(s);
var t = 10>=100;
console.log(t);
var k = Boolean("hello");
console.log(k);
//Boolean()메서드는 숫자 0과 null,undefined,빈문자("")를 제외한 모든 데이터에 대해 true를 반환
var m = Boolean(0);

//4.null과 undefined
//undefined는 변수에 값이 등록되기 전의 기본값,null은 변수에 저장된 값이 null인 경우로 변수에 지정된 데이터를 비우고자 할 때 사용하는 값
var s;
console.log(s);
var t = null;
console.log(t);

//5.배열
var seasons = ["봄", "여름", "가을", "겨울"];

//6.객체
var date = new Date();
console.log(date);