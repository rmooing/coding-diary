// 작은 이미지 클릭 했을때 크게 보여주기
// 접근한 이미지의 src 속성에 접근해서 값을 바꾸기
// let bigPic = document.querySelector("#cup");
// let smallPics = document.querySelectorAll(".small");

// for(let i = 0; i < smallPics-length; i++) {
//     smallPics[i].addEventListener("click", changePic);
// }

// function changePic() {
//     // bigPic.setAttribute("src",smallPic[i]);
//     bigPic.src = this.src;
//     newPic = this.src;
//     bigPic.setAttribute("src",newPic);
// }



let bigPic = document.querySelector("#cup");
let smallPics = document.querySelectorAll(".small");

for (let i = 0; i < smallPics.length; i++) {
  smallPics[i].addEventListener("click", changePic);
}

function changePic() {
  //   bigPic.src = this.src;
  newPic = this.src; // this => smallPics
  bigPic.setAttribute("src", newPic);
}

// 상세 설명 보기 토글 버튼
const view = document.querySelector("#view");
const detail = document.querySelector("#detail")


function detailView() {
  if(detail.style.display == "block") {
      detail.style.display = "none";
      view.textContent = "상세 설명 보기"
    } else {
      detail.style.display = "block";
      view.textContent = "상세 설명 닫기"
  }
};

view.addEventListener("click", detailView);

// function detailClose() {
  //   view.textContent = "상세 설명 보기"
  //   detail.style.display = "none";
  // };
  
  // function detailClose() {
    //   detail.style.display = "block";
    //   view.textContent = "상세 설명 닫기"
    // };
    
    // view.addEventListener("click", detailClose);