// font size , color 적용
/*

const applyBtn = document.getElementById("apply");

// 등록 클릭시 스타일 적용된 텍스트 출력
const resultBtn = document.getElementById("registration");

const result = document.getElementById("result");

// 결과 값에 div 추가
const p = document.createElement("p");
//span.classList.add("resultText");
//result.append(span);


applyBtn.addEventListener("click", () => {
    // 크기 지정
    const size = Number(document.getElementById("size").value);
    // 전역 변수로 주게 되면 처음 값 '0' 을 계속 가지게 되기 때문에
    // 이벤트 안에 작성해 주어야 한다!!!!


    // 색상 지정
    const color = document.getElementById("color").value;
    // 전역 변수로 주게 되면 처음 값 'null' 을 계속 가지게 되기 때문에
    // 이벤트 안에 작성해 주어야 한다!!!!
    
    p.style.fontSize = `${size}px`;
    p.style.color = `${color}`;

    console.log(p);
    
});


resultBtn.addEventListener("click", () => {
    
    // text area 문자 입력
    const text = document.getElementById("content").value;
    // 전역 변수로 주게 되면 처음 값 'null' 을 계속 가지게 되기 때문에
    // 이벤트 안에 작성해 주어야 한다!!!!

    p.innerText = `${text}`;


    result.append(p);
    
    console.log(p);


});

*/

// 등록 클릭시 전에 출력된 값 삭제되는 법
// innerHTML = '';

const applyBtn = document.querySelector("#apply");
const registration = document.querySelector("#registration");
const result = document.querySelector("#result");

applyBtn.addEventListener("click", () => {

    // 폰트 크기
    const size = Number(document.querySelector("#size").value);

    // 폰트 컬러
    const color = document.querySelector("#color").value;


    result.style.fontSize = `${size}px`;
    result.style.color = `${color}`;
    
});

registration.addEventListener("click", () => {

    // 텍스트 내용
    const content = document.querySelector("#content").value;
    
    result.innerHTML = `${content}`;

});

