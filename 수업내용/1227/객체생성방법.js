// 1.객체 리터럴 방식
var per = {
    키 : 값,
    function(){
        코드;
    }
}
// 2.Object 생성자 함수
let person = new Object();

person.name = "Lee"; // 프로퍼티 
person.sayHello = function() { // 매서드
    console.log("Hi My name is " + this.name);
};

console.log(person);
person.sayHello();

// 3.생성자 함수
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const myCar = new Car("KIA", "SELTOS", 2024);
myCar.name = "Hyundai";
console.log(myCar);
const kensCar = new Car("fiat", "fiat", 2000);
console.log(kensCar);
const jennysCar = new Car("bentley", "bentaguy", 2022);
console.log(jennysCar);

// 객체 리터럴에 의한 객체 생성 방식의 문제점
const circle1 = {
    radius : 5,
    getDiameter() {
        return 2 * this.radius; // this는 함수 스코프 안에서만 자기 자신을 가리킴 // 값을 받기 위해 반드시 return을 작성
    },
}
console.log(circle1.getDiameter());


const circle2 = { // 이런식으로 계속 코드를 작성하기 힘듬
    radius : 20,
    getDiameter() {
        return 2 * this.radius; 
    },
}
console.log(circle2.getDiameter());


// 생성자 함수로 문제점을 해결
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}

// 반지름이 5인 Circle객체를 생성해서 값을 출력
const circle10 = new Circle(5);
console.log(circle10.getDiameter());

// 반지름이 10인 Circle객체를 생성해서 값을 출력
const circle11 = new Circle(10);
console.log(circle11.getDiameter());



// 4.Object.create 메서드
const person1 = {
    isHuman : false,
    printIntroduction : function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
}

const me = Object.create(person1);

me.name = "AR";
me.isHuman = true;

me.printIntroduction();