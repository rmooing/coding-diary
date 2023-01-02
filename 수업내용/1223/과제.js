//두팀이 있다 돌고래와 코알라. 3번을 서로 시합을 해서 평균 점수가 가장 높은 팀이 트로피를 얻는다.
//1. 각각팀의 평균 점수를 아래 점수를 참고하여 산출하세요.
//2. 어떤팀이 승리했는지를 평균 점수를 비교해서 승리팀을 콘솔에 출력하세요. 물론 무승부의 가능성도 있다는것 잊지마세요.

//data 1: 돌고래 점수: 96, 108, 89. 코알라 점수: 88, 91, 110

//내가 푼 문제1
// var dolphin = [96, 108, 89];
// var koala = [88, 91, 110];

// var dolphinSum = dolphin.reduce(function (accumulator,currValue) {
//     return accumulator + currValue;
// });
// var koalaSum = koala.reduce(function(accumulator,currValue) {
//     return accumulator + currValue;
// });

// var dolphinAverage = dolphinSum / dolphin.length;
// var koalaAverage = koalaSum / koala.length;

// if(dolphinAverage > koalaAverage) {
//     console.log("dolphin");
// } else if(dolphinAverage === koalaAverage) {
//     console.log("무승부");
// } else {
//     console.log("koala");
// };

//내가 푼 문제2
// var dolphinSum = 96 + 108 + 89;
// var dolphinAvg = dolphinSum / 3;

// var koala1Sum = 88 + 91 + 100;
// var koala1Avg = koala1Sum / 3;

// if (dolphinAvg > koala1Avg) {
//     console.log("dolphin");
// } else if (dolphinAvg == koala1Avg) {
//     console.log("무승부");
// } else {
//     console.log("koala");
// }

//강사님 풀이
let scoreDolphins = calcAverage(44, 23, 71) / 3;
let scoreKoalas = calcAverage(65, 54, 49) / 3;


console.log(scoreDolphins, scoreKoalas);


if(scoreDolphins >= 100 && scoreDolphins > scoreKoalas){
    console.log("dolphin");
} else if(scoreKoalas >= 100 && scoreDolphins < scoreKoalas){
    console.log("koala");
} else if(scoreDolphins == scoreKoalas && scoreKoalas >= 100){
    console.log("무승부");
} else {
    console.log("이긴팀 없음");
}


// if(scoreDolphins > scoreKoalas) {
//     console.log("돌핀우승");
// } else if (scoreKoalas > scoreDolphins) {
//     console.log("코알라우승");
// } else if (scoreDolphins == scoreKoalas) {
//     console.log("무승부");
// }




// 같이 수업듣는 학생 답안1
// var average = (a, b, c) => (a + b + c) / 3;
// var dolphin = average(96, 108, 89);
// var koala = average(88, 91, 110);

// console.log(dolphin);
// console.log(koala);

// if (dolphin > koala) {
//   var win1 = "돌고래팀이 승리하였습니다 🏆";
//   console.log(win1);
// } else if ((dolphin = koala)) {
//   var draw = "무승부입니다.";
//   console.log(draw);
// } else {
//   var win2 = "코알라팀이 승리하였습니다 🏆";
//   console.log(win2);
// }




//3. 보너스: 최소점 100 득점이 전제조건으로, 다른팀보다 점수가 높을때 이길 수 있다. 논리연산자와 else if를 사용하여 최소값을 찾기.
//최소점 역시 무승부에 반영될 수 있다.두팀 모두 같은 점수이고 최소한 100점이상일경우에 무승부이고 그렇지 않으면 승리팀은 없음.
//보너스 data 1: 돌고래 점수: 97, 112, 101. 코알라 점수: 109, 95, 123
//보너스 data 2: 돌고래 점수: 97, 112, 101. 코알라 점수: 109, 95, 106

// var data1 = {
//     dolphin1 : [97, 112, 101],
//     koala1 : [109, 95, 123]
// }
// var data2 = {
//     dolphin2 : [97, 112, 101],
//     koala2 : [109, 95, 106]
// }

// var dolphin1Sum = data1.dolphin1.reduce(function(accumulator , currValue){
//     return accumulator + currValue;
// });
// var koala1Sum = data1.koala1.reduce(function(accumulator,currValue) {
//     return accumulator + currValue;
// });







//주어진 배열에 프린트 "... 17℃ in 1 days ... 21℃ in 2 days ... 23ºC in 3 days ..."를 출력하기  [몇도 , 며칠 변수로 저장]
// 백틱 이용해서

//arr이라는 배열을 갖는 arrprintForecast함수를 생성하고 위처럼 콘솔에 출력하기.
//TEST DATA 1: [17, 21, 23]
//TEST DATA 2: [12, 5, -5, 0, 4]
//힌트
//-for문을 이용하여 인수값을 arr매개변수에 대입하고 대입연산자로 문자열을 반복 연결해준다.
//-문자열에 날짜 서수의 규칙은 index를 활용



//강사님 풀이
// var data1 = [17, 21, 23]
// var data2 = [12, 5, -5, 0, 4]

// console.log(`...${data1[0]}℃...${data1[1]}℃...${data1[2]}℃...`);


// function arrprintForecast(arr) {
//     let str = "";
//     for(let i = 0; i < arr.length; i++) {
//         str += `${arr[i]}℃ in ${i + 1} days...`
//     }
//     console.log(`...${str}`);
// }
// arrprintForecast(data2);
