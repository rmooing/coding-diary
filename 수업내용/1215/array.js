//push() 데이터의 마지막에 데이터를 추가
var arr = ["zero", "one", "two"];
arr.push("three");

console.log(arr); // (4) ['zero', 'one', 'two', 'three']

// 값 변경 후 , push 메서드를 호출
arr.length = 5;
arr.push("four");
console.log(arr); // (6) ['zero', 'one', 'two', 'three', …, 'four']

//length 데이터의 갯수만큼 생성하고 할당(배열 객체의 개수 확인을 위한 방법)
var array = [{"name" : "value"},[1,2,3],true,"nifth"];
console.log(array.length); // 4
array[array.length] = "korea";
console.log(array); // (5) [{…}, Array(3), true, 'nifth', 'korea']

//pop 마지막 요소가 삭제됨
console.log(array.pop()); //korea
console.log(array); //(4) [{…}, Array(3), true, 'nifth']

//shift() pop과 반대로 처음 요소가 삭제됨
console.log(array.shift()); // {name: 'value'}
console.log(array); // (3) [Array(3), true, 'nifth']

//unshift() 처음 요소에 추가
console.log(array.unshift("-1")); // 4
console.log(array); // (4) ['-1', Array(3), true, 'nifth']

//delete 데이터의 값을 삭제(empty data로 바뀜)
console.log(delete array[2]); // true
console.log(array); // (4) ['-1', Array(3), …, 'nifth']

//splice() 시작 배열 번호부터 끝 배열 번호의 전 배열 요소까지의 배열 요소를 삭제하고 반환
//splice(start, deleteCount, item..)
//start : 배열 시작 위치 인덱스 번호
//deleteCount : 삭제할 요소의 개수
//item(옵션) : 삭제할 위치에 추가할 요소

var arr1 = ["zero", "one", "two", "three"];
console.log(arr1.splice(2,1)); // (1) ['two']
console.log(arr1); // (3) ['zero', 'one', 'three']
console.log(arr1.splice(2,1, '2')); //
console.log(arr1);

//concat() 서로 다른 배열 2개를 합쳐서 새로운 배열을 만들어 줌. 어느 배열을 먼저 쓰는가에 따라 기준이 달라지고 결과 배열의 순서도 달라짐
var nums = [1,2,3];
var chars = ["a", "b", "c", "d"];

var numsChars = nums.concat(chars);
var charsNums = chars.concat(nums);
console.log(numsChars); // (7) [1, 2, 3, 'a', 'b', 'c', 'd']
console.log(charsNums); // (7) ['a', 'b', 'c', 'd', 1, 2, 3]

//join() 배열 요소를 연결해서 ★하나의 문자열로 만들어 줌★
var string1 = nums.join();
console.log(string1); // 1,2,3
var string2 = nums.join("/");
console.log(string2); // 1/2/3

//reverse() 배열의 순소를 바꿈
chars.reverse();
console.log(chars); // (4) ['d', 'c', 'b', 'a']

//sort() 배열의 순서를 알파벳이나 숫자의 순서대로 다시 나열(오름차순으로 정렬)
chars.sort();
console.log(chars); // (4) ['a', 'b', 'c', 'd']

//slice(start, end) start의 인덱스 번호 부터 end 인덱스 번호 하나 앞 까지 지정하여 추출한 배열 요소들을 새로운 배열로 생성
var s = [1,2,3,4,5,6,7,8,9,10];

var s1 = s.slice(3,5)
console.log(s1); // (2) [4, 5]
var s2 = s.slice(undefined, 5);
console.log(s2); // (5) [1, 2, 3, 4, 5]
var s3  = s.slice(-3);
console.log(s3); // (3) [8, 9, 10]
var s4 = s.slice(-3,9); // [8,9]
var s5 = s.slice(10); // 10(x) []
var s6 = s.slice(4); // 4(x) [5,6,7,8,9,10]
var s7 = s.slice(undefined); // [1,2,3,4,5,6,7,8,9,10]
var s8 = s.slice(5,-4); // [6,7](x) [6]
var s9 = s.slice(2,15); // [3,4,5,6,7,8,9,10,undefined,undefined,undefined,undefined](x) [3,4,5,6,7,8,9,10]

//trim() 문자열의 공백,줄바꿈,탭,유사 캐릭터를 제거
console.log(" okay \n".trim()); // okay

//zeropad() 정한 길이만큼 패딩 캐릭터를 반환
console.log((String(6).padStart(10, "0"))); // padStart(자리수, 넣고싶은 내용) // 0000000006

//repeat() 문자열 반복
console.log("Korea".repeat(3)); // KoreaKoreaKorea

// 1. 요소를 더하거나 지우기
// push(...items) – 맨 끝에 요소 추가하기
// pop() – 맨 끝 요소 추출하기
// shift() – 첫 요소 추출하기
// unshift(...items) – 맨 앞에 요소 추가하기
// splice(pos, deleteCount, ...items) – pos부터 deleteCount개의 요소를 지우고, items 추가하기 [ 원본을 수정하기 때문에 권장하지 않음]
// slice(start, end) – start부터 end 바로 앞까지의 요소를 복사해 새로운 배열을 만듦 [ 슬라이스를 많이 씀 ]
// concat(...items) – 배열의 모든 요소를 복사하고 items를 추가해 새로운 배열을 만든 후 이를 반환함. items가 배열이면 이 배열의 인수를 기존 배열에 더하여 새로운 배열을 생성

// 2. 원하는 요소 찾기
// indexOf/lastIndexOf(item, pos) – pos부터 원하는 item을 찾음. 찾게 되면 해당 요소의 인덱스를, 아니면 -1을 반환함
// includes(value) – 배열에 value가 있으면 true를, 그렇지 않으면 false를 반환함
// find/filter(func) – func의 반환 값을 true로 만드는 첫 번째/전체 요소를 반환함
// findIndex는 find와 유사함. 다만 요소 대신 인덱스를 반환함

// 3. 배열 전체 순회하기
// forEach(func) – 모든 요소에 func을 호출함. 결과는 반환되지 않음
    ["영수", "정현", "남이"].forEach((item, index, array) => {
        alert(`${item} is at index ${index} in ${array}`);
    });

  // 배열 변형하기
  // map(func) – 모든 요소에 func을 호출하고, 반환된 결과를 가지고 새로운 배열을 만듦
  // sort(func) – 배열을 정렬하고 정렬된 배열을 반환함
  // reverse() – 배열을 뒤집어 반환함
  // split/join – 문자열을 배열로, 배열을 문자열로 변환함
  // reduce(func, initial) – 요소를 차례로 돌면서 func을 호출함. 반환값은 다음 함수 호출에 전달함. 최종적으로 하나의 값이 도출됨


// mpa filter reduce - 중요


  // 기타
  // Array.isArray(arr) – arr이 배열인지 여부를 판단함 (T/F 반환)


