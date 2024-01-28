const addBtn = document.querySelector("#addBtn");
const resetBtn = document.querySelector("#resetBtn");
const Num = document.querySelectorAll("#Num");
const numberIndex = document.querySelector(".numberIndex");
const phoneNum = document.querySelector(".phoneNum");

for (let i = 0; i < Num.length; i++) {
    

    // dialScreen에 번호 출력하기
    Num[i].addEventListener("click", () => {
        
        console.log(phoneNum);

        phoneNum.innerText += Num[i].innerText
        
    });

}

// 추가 버튼 클릭시 전화번호 목록에 추가
addBtn.addEventListener("click", () => {

    // 전화번호 추가
    const telNumber = document.createElement("div");
    telNumber.classList.add("telNumber");
    numberIndex.append(telNumber);

    telNumber.innerHTML += phoneNum.innerText;
    
    
    // 즐겨찾기, 삭제 버튼 추가
    // 즐겨찾기 추가 / 클릭시 색상 변경
    const bookMark = document.createElement("span");
    bookMark.classList.add("book-mark");
    bookMark.innerHTML = ` <i class="fa-regular fa-star"></i>`;
    telNumber.append(bookMark);

    bookMark.style.cursor = "pointer";

    bookMark.addEventListener ("click", () => {
       
        if(bookMark.style.color == "black"){
            
            bookMark.style.color = "yellow";
            telNumber.style.color = "red";
            del.style.color = "black";
        } else {

            bookMark.style.color = "black";
            telNumber.style.color = "black";
            del.style.color = "black";
        }

    });
    
    // 삭제 클릭시 번호 삭제
    const del = document.createElement("span");
    del.classList.add("delBtn");
    del.innerHTML = ` &times`;
    del.style.cursor = "pointer";
    
    telNumber.append(del);
    
    del.addEventListener("click", () => {
        telNumber.remove();
    });
});



resetBtn.addEventListener("click", () => {
    phoneNum.innerText = '';
});

