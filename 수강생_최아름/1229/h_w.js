//1.생성자함수 Car는 make와 speed를 매개변수로 property를 생성한다. speed 프로퍼티는 현재 차의 속도를 km/h로 표현한다
//2.accelerate 메소드는 실행될 때마다 차의 속도를 10씩 증가시키고 새로운 speed값을 콘솔창에 출력한다.
//3.brake 메소드는 실행될 때마다 차의 속도를 5씩 감소시키고 새로운 speed값을 콘솔창에 출력한다.
//4.두개의 car 객체를 생성하고 각각의 accelerate 와 brake 메소드를 실행해본다.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw = new Car("BMW", 120);
const mercedes =  new Car("Mercedes", 95);

bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();


// 콜백 함수로 구현해보기
// 버튼 만든 후 버튼 누를때마다 속도가 늘어나거나 줄어드는거 만들어보기
// function addEventListener ("click", function({})