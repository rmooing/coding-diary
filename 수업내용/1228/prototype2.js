//1. 새로운 객체가 생성됨
//2. 함수가 호출이 될때 this는 그 객체임
//3. 객체는 prototype과 연결되어 있다
//4. 함수는 자동으로 객체를 반환한다


const Person = function (firstName, birthYear) {
    this.firstName = firstName; // 새로운 객체 연결 this
    this.birthYear = birthYear;
}

const ar = new Person("AR", 2000);
console.log(ar);

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(ar instanceof Person); //true

Person.hey = function() {
    console.log("Hey there😘");
    console.log(this); // 2. this는 객체임 여기선 Person
};
Person.hey();

console.log(Person.prototype); // constructor

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

ar.calcAge();
matilda.calcAge();

console.log(ar.__proto__); // {calcAge: ƒ, constructor: ƒ}
console.log(ar.__proto__ === Person.prototype); // true

// isPrototypeOf 객체가 다른 객체의 프로토타입과 일치하는지를 확인
console.log(Person.prototype.isPrototypeOf(ar)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

