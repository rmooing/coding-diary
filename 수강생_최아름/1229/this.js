// this는 어디서든지 참조가 가능하다.
// 전역에서 this는 전역 객체 window를 가리킨다
console.log(this); // 빈 객체


// 일반 함수의 this
// 일반 함수로 호출된 모든 함수(중첩함수,콜백함수도 포함)의 this는 전역 객체 window를 가리킨다.
const calcAge = function(birthYear) {
    console.log(2037-birthYear); // 46
    console.log(this);
};
calcAge(1991); 

function foo() {
    console.log("foo's this: ", this); // this = window
    function bar() {
        console.log("bar's this: ", this); // this = window
    }
    bar();
};
foo();


// 메서드 호출에 의한 this
// 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
const ar = {
    year : 1991,
    calcAge : function() {
        console.log(this); // window 전역변수?
        console.log(2037-this.year); // 46
    },
};
ar.calcAge();


// 생성자 함수
// 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
function Person(name) {
    this.name = name;
    console.log(this); // this = me = "ar"
};

const me = new Person("ar");


// 화살표 함수의 this
var value = 1;

const obj = {
    value : 100,
    foo() {
        // 화살표 함수 내부의 this 상위 스코프의 this를 가리킨다.
        setTimeout(() => console.log(this.value), 100) ;
    },
};
obj.foo(); //100