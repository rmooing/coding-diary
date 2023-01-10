//아이디가 circle인 요소를 찾아서 변수로 저장
// var|let|const
const circle = document.querySelector("#circle");
//태그명이 article인 요소를 찾아서 변수로 저장
const article = circle.querySelectorAll("article");

//article의 전체 갯수(face1~face8)만큼 반복을 돌면서 mouseenter, mouseleave이벤트를 연결
for (let el of article) {
  //article 에 마우스를 올리면 부모인 #cirlce의 animation-play-state값을 "paused"로 변경
    el.addEventListener("mouseenter", (e) => {
    circle.style.animationPlayState = "paused";
});
  //article 에 마우스를 떼면 부모인 #cirlce의 animation-play-state값을 "running"로 변경
    el.addEventListener("mouseleave", (e) => {
    circle.style.animationPlayState = "running";
});
}