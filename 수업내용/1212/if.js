//1. if문 : true/false 반환
//boolean과 마찬가지로 0,null,""(빈문자),undefined 값이 조건식에 입력되면 false를 반환

//예시1
var num = 10;
    if(num < 500) {
        console.log("hello");
    }
    if(0) {
        console.log("hi");
    }

//예시2
var useName = prompt("방문자의 이름은?","");
if(useName){document.write(useName + "님 반갑습니다");}


//2.if else문
var result = confirm("정말로 회원을 탈퇴하시겠어요?");

if(result) {
    document.write("탈퇴 처리 되었습니다");
} else {
    document.write("탈퇴 취소 되었습니다");
}


//3.else if
var mon = prompt("현재는 몇월 입니까?","0");

if(mon >=9 && mon <= 11) {
    document.write("가을");
}
else if(mon >=6 && mon <= 8) {
    document.write("여름");
}
else if(mon >=3 && mon <= 5) {
    document.write("봄");
}
else{
    document.write("겨울");
}

