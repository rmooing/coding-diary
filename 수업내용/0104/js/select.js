// const selectMenu = document.testForm.major;

// function displaySelect() {
//     let selectedText = selectMenu.option[selectMenu.selectedIndex].innerText; // 배열 형태로 인덱스 번호 저장해줌
//     alert("[" + selectedText + "]를 선택하였습니다");
// }

const selectMenu = document.testForm.major;

function displaySelect() {
  let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
  alert("[" + selectedText + "]를 선택하였습니다.");
}