// if 문 - 양수인지 검사

const input1 = document.getElementById("input1");

function check1() {
    const value = Number(input1.value); 
    // 값이 숫자일때 먼저 자료형을 숫자로 바꿔주기
    
    if ( value > 0 ) {   // value가 0보다 커서 true인 경우
        alert("양수입니다.");
    }//else {
    //     alert("양수가 아닙니다.")
    // }

    // value가 0과 같거나 작아서 true 인 경우
    // -> value가 양수가 아닌 경우

    if ( value <= 0 ) {
        alert("양수가 아닙니다.");
    }
    // 조건에 충족하지 않으면 조건문 코드는 수행하지 않고
    // 다음 코드로 건너뜀
}

//--------------------------------------------------------

// if-else 홀짝 판별하기
function check2() {
    // 난수 발생 : Math.random() 
    // 난수 범위 : 0 <= Math.random() < 1

    // 0 ~ 100 사이 난수
    const randomNum = Math.floor ( Math.random() * 101 );
    //                소수점 내림     난수 0 ~ 100 

    if (randomNum % 2 == 1) {
        alert(`${randomNum}는 홀수입니다.`);
    } else {
        alert(`${randomNum}는 짝수입니다.`);
    }
}

// if-else if-else : -3 ~ 3 사이에 난수 발생시켜 양수, 음수, 0 판별

function check3() {
    const randomNum = Math.floor (Math.random() * 7) -3 ;
    //                               0 ~ 6          -3 ~ 3
    let message = randomNum + "은/는 ";

    if (randomNum == 0) {
        message += "0입니다.";  // 복합 대입 연산자 활용
    } else if (randomNum > 0) {
        message += "양수입니다.";
    } else {
        message += "음수입니다.";
    }

    alert(message);
}

// 어린이, 청소년, 성인 구분하기
const inputAge = document.getElementById("inputAge");

function check4() {
    const age = Number(inputAge.value);

    console.log("age : ", age);

    console.log(inputAge.value.length);

    // "문자열".length : 문자열의 길이

    // 입력된 나이의 길이가 0 인 경우 == 미입력
    if (inputAge.value.length == 0) {
        alert("미입력");
    } else  {   // 입력한 경우 -> 이 때 어린이, 청소년, 성인 판별
        
        // 중첩 if 문

        if (age < 0 || age > 150) {    // 0 ~ 150 사이가 아닌 경우
            alert("잘못 입력 하셨습니다.");
        } else if (age >= 0 && age <= 13) {
            alert("어린이 입니다.");
        } else if ( age <= 19 ) {
            alert("청소년 입니다.");
        } else {
            alert("성인 입니다.");
        }
    }
}

//---------------------------------------------------------------

// switch 문을 이용한 계산기

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const calcResult = document.getElementById("calcResult");

function calc(op) {
          // 매개변수 (Parameter)
          // - 함수 호출 시 전달되는 값을 저장하는 함수
    
          //ex) calc('+')
          //    '+' 값이 op 변수에 저장됨
    console.log(op);

    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

    // switch(식) 에서 
    // "식"은 다양한 값이 나타날 수 있는 변수 또는 계산식

    // 결과 저장 변수 선언
    let result;

    // break : switch 문을 멈춤
    // -> case에 break; 를 작성하지 않으면
    //   멈추지 않고 다음 case로 넘어간다

    switch (op) {

        // op 값에 따른 처리 case 작성
        case '+' : result = value1 + value2 ; break;  
        case '-' : result = value1 - value2 ; break;
        case '*' : result = value1 * value2 ; break;
        case '/' : result = value1 / value2 ; break;
        case '%' : result = value1 % value2 ; break;

        // 맞는 case가 없는 경우 적용할 기본값
        default : result = "잘못된 연산자"; break;
    }


    calcResult.innerText = result;

    // if 문 버전
    // if( op == '+' ) {
    //     calcResult.innerText = value1 + value2;
    // } else if (op == '-') {
    //     calcResult.innerText = value1 - value2;
    // } else if (op == '*') {
    //     calcResult.innerText = value1 * value2;
    // } else if (op == '/') {
    //     calcResult.innerText = value1 / value2;
    // } else if (op == '%') {
    //     calcResult.innerText = value1 % value2;
    // } else {
    //     calcResult.innerText = "잘못된 연산자";
    // }
}


