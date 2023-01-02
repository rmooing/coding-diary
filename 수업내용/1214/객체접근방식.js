var person = {
    name : 'ar',
    'last-name' : 'choi',
    10 : 100,
    // function start() {
    //     코드;
    // }
}

//마침표 표기법에 의한 프로퍼티 접근
console.log(person.name);

//대괄호 표기법에 의한 프로퍼티 접근 : 괄호안에 문자형으로 표기
console.log(person["last-name"]);
// console.log(person["name"]); // error
// console.log(person[name]); // error

//프로퍼티 키가 숫자로 이루어진 문자열일 경우
console.log(person[10]);
console.log(person["10"]);

//존재하지 않는 프로퍼티 접근
console.log(person.age); // undefined

//프로퍼티 값을 갱신 , 생성 , 삭제
var person = {
    'last-name' : 'Lee',
    'first-name' : 'June',
    gender : 'female'
};
console.log(person["last-name"]);
person['last-name'] = 'Park';
console.log(person["last-name"]);
//객체가 소유하고 있는 프로퍼티에 새로운 값을 할당하면 프로퍼티 값은 갱신된다
//동적생성
person.age = 20;
console.log(person.age);
//객체가 소유하고 있지않은 프로퍼티 키에 값을 할당하면 키와 값으로 프로퍼티를 동적으로 생성하여 객체에 추가

//프로퍼티 삭제
delete person.gender; 
console.log(person.gender); //undefined 존재하지 않는 프로퍼티
console.log(person); // {last-name: 'Park', first-name: 'June', age: 20}

var person2 = {
    // name: ['Bob','Smith'],
    name: {first: 'Bob', last:'Smith'},
    age: 32,
    gender: 'male',
    interest: ['music', 'skiing'],
    bio: function() {
        alert(this.name + "is" + this.age + "years old. He likes" + this.interest[0] + " and " + this.interest[1]);
    },
};
console.log(person2.name[0]); // Bob (array인 경우)
console.log(person2.name.first); // Bob (객체일 경우)
person2.bio();
