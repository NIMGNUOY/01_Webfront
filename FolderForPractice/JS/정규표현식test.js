// 아이디 유효성 검사
document.getElementById("inputId").addEventListener("keyup", (e) => {
    
    const regExp = /^[a-z][a-z0-9A-Z]{6,14}$/;
    
    if (e.target.value.length == 0) {
        
        const inputId = document.getElementById("inputId");
        inputId.innerText = "";
        inputId.style.background = "white";
        return;
    }

    if (regExp.test(e.target.value)) {
        e.target.style.backgroundColor = "springgreen";

    } else {
        e.target.style.backgroundColor = "pink";
    }
});

// 비밀번호 일치 / 불일치

const pw = document.getElementById("pw");
const checkPw = document.getElementById("checkPw");

checkPw.addEventListener("keyup", (e) => {
    
    const pwMessage = document.getElementById("pwMessage");

    if (pw.value.length ==0) {
        alert("비밀번호를 입력해주세요");
        checkPw.value = "";
        pw.focus();
        return;
    }


    if (pw.value == checkPw.value) {
        

        pwMessage.innerHTML = "비밀번호 일치";
        pwMessage.style.color = "green";
    } else {
        
        pwMessage.innerHTML = "비밀번호 불일치";
        pwMessage.style.color = "red";
    }

});

// 이름 키를 입력시 문자열 검사

document.getElementById("inputName").addEventListener("keyup", (e) => {
    
    const nameMessage = document.getElementById("nameMessage");

    const regExp = /^[ㄱ-힣]{2,5}$/;

    if (regExp.test(e.target.value)) {
        
        nameMessage.innerHTML = "정상입력";
        nameMessage.style.color = "green";
        
    } else {
        
        nameMessage.innerHTML = "한글만 입력하세요";
        nameMessage.style.color = "red";
    }

});

// 성별 체크

const male = document.getElementById("male");
const female = document.getElementById("female");

if (!male.checked && !female.checked) {
    alert("성별을 선택해주세요.");
}

// 전화번호 형식 검사

document.getElementById("inputCelNum").addEventListener("keyup", (e) => {
    
    const regExp = /^[0][0-9]{1,3}\-[0-9]{4}\-[0-9]{4}/;

    const celMessage = document.getElementById("celMessage");

    if(regExp.test(e.target.value)) {

        celMessage.innerHTML = "확인";
        e.target.style.backgroundColor = "springgreen";
        
    } else {
        alert("전화번호의 형식이 올바르지 않습니다.")
    };

});