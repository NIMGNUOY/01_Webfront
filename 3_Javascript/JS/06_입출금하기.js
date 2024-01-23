//prompt 사용 연습
function test() {

    const password = prompt("비밀번호를 입력하세요.");

    // 확인 -> 입력값
    // 취소 -> null

    if (password == null) {
        alert("취소");
    } else {
        
        if(password == 1234) {
            alert("비밀번호 일치");
        } else {
            alert("비밀번호 불일치");
        }

    }
}

//------------------------------------------------------

const output = document.getElementById("output");
const amount = document.getElementById("amount");

let balance = 10000; // 잔액 기록변수 (초기값 10000)
const password = '1234' // 비밀번호 저장 변수 (초기 비밀번호 1234)

output.innerText = balance;

// 입금

function deposit() {
    // 1. 입금 버튼 클릭
    // 2. input 에 입력된 금액구하기
    // 3. 구한 금액을 잔액(balance)에 추가하기
    

    if(amount.value.length == 0) {
        alert("금액을 입력해주세요.");
    } else {
        const plusAmount = Number(amount.value);
    
        balance += plusAmount;
        output.innerText = balance;
        alert(`${plusAmount}원이 입금되었습니다.`)

        amount.value=''; // input 에 작성된 값 제거
    }
}


// 출금

function withdrawal() {
    if (amount.value.length == 0) {
        alert("금액을 입력해주세요.")
    } else {
        const pw = prompt("비밀번호를 입력해주세요.")

        if(pw != password) {
            alert("비밀번호가 틀렸습니다.")
            amount.value='';
        } else {
            const v1 = Number(document.getElementById("output").value);
            const v2 = Number(document.getElementById("amount").value);
            if (v1 < v2) {
                alert("잔액이 부족합니다.")
                amount.value='';
            } else {
                balance -= v2;
                alert(`${v2}원이 출금되었습니다.`)
                output.innerText = balance;
                amount.value='';
            }
        }
    }
}
