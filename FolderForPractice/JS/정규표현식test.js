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


document.getElementById("joinBtn").addEventListener("click", (e) => {
    
    // 성별 체크
    const male = document.getElementById("male");
    const female = document.getElementById("female");

    if (!male.checked && !female.checked) {
        alert("성별을 선택해주세요.");
    };

    // 전화번호 유형 판별
    
    const inputCelNum = document.getElementById("inputCelNum");
    const regExp = /^[0][0-9]{1,2}\-[0-9]{3,4}\-[0-9]{4}/;
    
    if(regExp.test(inputCelNum.value)) {
    
        alert("회원가입이 완료되었습니다.");
        return;
            
    } else {
        alert("전화번호의 형식이 올바르지 않습니다.");
        return;
    };
    
    
});

















