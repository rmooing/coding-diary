const userId = document.querySelector("#user-id");
const pw1 = document.querySelector("#user-pw1");
const pw2 = document.querySelector("#user-pw2");

// 함수와 연결
userId.onchange = checkId;
pw1.onchange = checkPw;
pw2.onchange = comparePw;

function checkId() {
    if(userId.value.length < 4 || userId.value.length > 15) {
        alert("4~15자리의 영문과 숫자로 입력");
        userId.value = "";
        userId.select();
    }
};
function checkPw() {
    if(pw1.value.length < 8) {
        alert("8자리 이상");
        pw1.value = "";
        pw1.focus();       
    }
};
function comparePw() {
    if(pw2.value !== pw1.value) {
        alert("암호가 다릅니다. 다시 입력하세요");
        pw2.value = "";
        pw2.focus();       
    }
}