// 좌석 클릭 시 좌석 배경색 바꾸기

const seat = document.getElementsByTagName("span");

for(let i = 0; i < seat.length; i++) {

  seat[i].addEventListener("click", () => {

    if(seat[i].style.backgroundColor == "skyblue") {

      seat[i].style.backgroundColor = "white";

    } else {

      seat[i].style.backgroundColor = "skyblue";
    }
  
  })
  

}

// input 값 출력하기

const adult = document.querySelector("#adult");
const youth = document.querySelector("#youth");



// button 클릭 시 프롬트창 띄우기

const btn = document.querySelector("#btn");


btn.addEventListener("click", () => {
  const v1 = adult.value;
  const v2 = youth.value;

  if (v1.length == 0 && v2.length == 0) {
    alert("인원수를 입력해주세요.");
  } else if (typeof `${v1}` != "number" || typeof `${v2}` != "number") {
    alert("숫자만 입력해주세요.");
  }

  console.log(typeof v1);

});