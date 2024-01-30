// font size , color 적용

const applyBtn = document.getElementById("apply");

// 크기 지정
const size = Number(document.getElementById("size").value);

// 색상 지정
const color = document.getElementById("color").value;

// text area 문자 입력
const text = document.getElementById("content").value;

// 등록 클릭시 스타일 적용된 텍스트 출력
const resultBtn = document.getElementById("registration");
const result = document.getElementById("result");

const addText = document.createElement("p");
addText.classList.add("resultText");
result.append(addText);


applyBtn.addEventListener("click", () => {
    

    addText.style.fontSize = `${size}px`;
    addText.style.color = `${color}`;
    console.log(addText);

});

resultBtn.addEventListener("click", () => {

    addText.innerHTML = "";

    addText.innerHTML = `${text}`;
});


// 등록 클릭시 전에 출력된 값 삭제되는 법
// innerHTML = '';