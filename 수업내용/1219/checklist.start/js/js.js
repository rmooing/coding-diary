//1. 함수 addList(), showList(), removeList()

var itemList = []; // 준비물을 저장할 배열을 만드는것. 빈 배열을 만든 후 itemList 변수에 저장

//2. 빈 배열에 넣을 준비물을 추가 버튼 클릭 시 itemList배열에 추가시킬 함수와 그 리스트를 보여줄 함수를 생성하여 이벤트를 연결
var addBtn = document.querySelector("#add"); // 추가 버튼을 addBtn변수로 저장
addBtn.addEventListener("click",addList); // addBtn을 클릭하면 addList함수를 실행

function addList() {
    var item = document.querySelector("#item").value;
    if(item != null) {
        itemList.push(item); // 빈배열로 저장된 itemList배열의 끝에 push매서드로 item변수 값을 추가
        document.querySelector("#item").value = ""; // 추가된 리스트의 값을 지움(리셋)
        document.querySelector("#item").focus();
    }
    // console.log(itemList);
    showList();
}

function showList() {
    var list = "<ul>"; // 목록을 시작하는 <ul>태그 저장
    for(var i = 0; i < itemList.length; i++) {
        list += "<li>" + itemList [i] + "<span class='close' id=" + i + ">X</span></li>";
    }
    list += "</ul>"; // 목록을 끝내는 </ul>태그 저장
    document.querySelector("#itemList").innerHTML = list;

    //3.챙긴 준비물 목록에서 지우기. 항목의 인덱스 값을 삭제 버튼의 id값으로
    var remove = document.querySelectorAll(".close");
    //remove (모든 x버튼의 배열 객체)의 모든 요소를 확인 ("<span class='close' id=" + i + "></span></li>")
    for(var i = 0; i < remove.length; i++) {
        remove[i].addEventListener("click", removeList);
    }
}

function removeList() {
    console.log(this);
    var id = this.getAttribute("id");
    itemList.splice(id,1);
    showList();
}<span class="del">X</span>