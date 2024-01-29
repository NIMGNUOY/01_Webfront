// 아이디 유효성 검사
document.getElementById("inputId").addEventListener("keyup", (e) => {
    
    const regExp = /^[a-z][a-z0-9A-Z]{6,14}$/;
    
    if (e.target.value.length == 0) {
        
        const inputId = document.getElementById("inputId");
        inputId.innerText = "";
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

    if (pw.value.length ==0) {
        alert("비밀번호를 입력해주세요");
        checkPw.value = "";
        pw.focus();
        return;
    }

    if (pw.value == checkPw.value) {
        
    }

});