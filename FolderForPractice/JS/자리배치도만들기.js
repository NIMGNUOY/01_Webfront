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
  const v1 = parseInt(adult.value);  // parseInt() : input 값에 입력된 string 자료형을
  const v2 = parseInt(youth.value);  // 정수형 즉 , number 로 바꿔준다.

  if (v1.length == 0 && v2.length == 0) {
    alert("인원수를 입력해주세요.");
  } else if (typeof v1 != 'number' || typeof v2 != 'number') {
    alert("숫자만 입력해주세요.");
  } else {
    alert (`성인 : ${v1} 명, 청소년 : ${v2} 명`);

    let count = 0;
    
    // 성인
    function adultFn() {
      return v1 * 15000 ;
    }
  
    function youthFn() {
      return v2 * 10000 ;
    }
    alert(`총액 : ${adultFn() + youthFn()}`);
  }

  console.log(typeof v1);
  
  // 가격 성인 15,000원 
  //     청소년 10,000원
  

  

});
