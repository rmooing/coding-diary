//primitive - 단순 데이터 타입
let age = 30;
let oldAge = age;
console.log(age); //30
console.log(oldAge); //30
age = 31;
console.log(age); //31
console.log(oldAge); //30



//objects(reference) - 참조형 데이터 
const me = {
    name : 'ar',
    age : 21
};

const friend = me;
friend.age = 27;

console.log('friend', friend);
console.log('me', me);