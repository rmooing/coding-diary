// calcAge 함수를 만들기
// 매개변수는 birthYear
// calcAge 함수에 변수 age 계산은 2037-birthYear
// 함수호출은 calcAge(1991);
// 중복함수로 printAge함수를 생성하여 출력문 : AR, you are 35, born in 1991

function calcAge(birthYear) {
    let age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = "Choi";

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a,b) {
                return a + b;
            }
        }
        console.log(str); // error 블록영역 스코프를 가지고 있는데 밖에서 호출됐으므로 에러 , const는 재할당,재선언 불가능
        console.log(millenial); // true
        console.log(add(2,3)); // 5
    }
    printAge();
    return age;
}
const firstName = "AR";
// printAge(); // error
calcAge(1991);