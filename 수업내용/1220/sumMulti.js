//함수의 형태
// function sumMulti(x,y) {
//     if(x === y) {
//         return x * y;
//     } else {
//         return x + y;
//     }
// }
// console.log(sumMulti(5,10));
// console.log(sumMulti(5,5));

// 1. 전역변수와 지역변수 스코프 영역
// 예시1
var myVar = 100;
test();

function test() {
    var myVar = 50;
    // console.log("myVar is" + myVar); //50
}
console.log("myVar is" + myVar); // 100
console.log("myVar is" + myVar); // 만약 function안에 예약어 없이 myVar만 선언할 경우 값은 50이 된다



// 예시2
var var1 = 1;

if(true) {
    var var2 = 2;
    if(true) {
        var var3 = 3;
    }
}

function foo() {
    var var4 = 4;
    var var2 = 5; // 지역변수 var2
}

function bar() {
    var var5 = 5;
}

console.log(var1); // 1
console.log(var2); // 2 : 전역변수로 인식
console.log(var3); // 3
// 지역변수 var4,var5는 호출되기 전까지 생성되지 않는다. 함수를 호출하지 않으면 변수 선언문이 실행되지 않음
// console.log(var4); // error
// console.log(var5); // error

// var 키워드로 선언된 변수는 함수의 코드블록만을 지역스코프로 인정한다
// 함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었다 할지라도 모두 전역 변수다.
// 그러므로 이미 선언된 전역변수에 지역변수로 중복선언이 된다면 의도치 않게 변수 값이 변경되는 부작용을 발생 시킨다.

// let 
function calcSum(n) {
    let sum = 0;
    for(let i = 0; i < n+1; i++) {
        sum += i;
    }
    // sum = 100; // 변수 재할당이 가능
    // let sum; // 변수 재선언 불가능
    console.log(sum);
}
calcSum(10);


// const
const currentYear = 2023;
console.log(currentYear); // 2023

// const currentYear; // error : 변수 재선언 불가(상수이기 때문)
// currentYear = 2000; // 재할당
// console.log(currentYear); // error : 변수 재할당 불가(상수이기 때문)

// 표현식과 선언식
// 선언식 - 호출만 하면 됨

// let age = 16;
// if(age < 18) {
//     welcome();
//     function welcome() {
//         console.log("hello");
//     } 
// } else {
//     welcome();
//     function welcome() {
//         console.log("hi");
//     }
// }

// 표현식 - 코드를 먼저 읽고 난 다음 실행시켜줘야함
let age = 18;
let welcome;

if(age < 18) {
    welcome = function() {
        console.log("hello");
    }
} else {
    welcome = function() {
        console.log("hi");
    }
}
welcome(); // hi