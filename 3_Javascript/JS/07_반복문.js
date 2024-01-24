
/*
for (let num = 1; num <= 5; num++) {
    // 조건식이 True 인 경우 반복 수행할 코드;
    console.log("통과");
}
*/


//------------------------------------------------

function check1() {
    let result = ""; // 빈 문자열

    for(let num = 1; num <= 5; num++) {

        result += num;
        // result   = result + num;
        //   "1"    =  ""    +   1   (1턴)
        //   "12"   =  "1"   +   2   (2턴)
        //   "123"  =  "12"  +   3   (3턴)
        //   "1234" =  "123" +   4   (4턴)
        //   "12345"=  "1234"+   5   (5턴)

    
    }
    console.log(result);

}

function check2() {
    for(let num2 = 1; num2 <= 10; num2++) {
        console.log(num2);
    }
}

function check3() {
    for(let num3 = 1; num3 <= 20; num3++) {
        console.log(num3);
    }
}

function check4() {
    for(let num4 = 5; num4 <= 15; num4++) {
        console.log(num4);
    }
}

function check5() {
    for(let num5 = 1; num5 <= 30; num5 += 2) {
        console.log(num5);
    }
}

function check6() {
    let sum = 0; // 합계를 저장하기 위한 변수
    for(let num6 = 1; num6 <= 10; num6++) {
        sum += num6;
        
    }
    console.log(sum);
}

//-----------------------------------------------------
// 입력받은 범위 내 모든 정수의 합 구하기
const input1 = document.getElementById("inputNumber1-1");
const input2 = document.getElementById("inputNumber1-2");

const result1 = document.getElementById("result1");

function sumFn() {
    const v1 = Number(input1.value);
    const v2 = Number(input2.value);

    let sum1 = 0;

    for(let num = v1; num <= v2; num++) {
        sum1 += num;
    }
    console.log(sum1);

    result1.innerText = sum1;
}


// 입력받은 범위 내에서 증감식만큼 증가하며 모든 정수 출력하기



function executeFn2() {
    const start = Number(document.getElementById("inputNumber2-1").value);
    const finish = Number(document.getElementById("inputNumber2-2").value);
    const increase = Number(document.getElementById("inputNumber2-3").value);

    // 결과 출력할 ul 요소
    const ul = document.getElementById("result2");

    ul.innerHTML = ""; // 이전 ul에 작성된 내용을 모두 삭제
    for (let num=start; num <= finish; num += increase) {
        ul.innerHTML += `<li>${num}</li>`;
    }


}

// 요소.innerText = `<li>${num}</li>`;
// -> 요소의 내용으로 문자열을 대입
// (HTML 태그를 해석하지 않고 문자 그대로 보여줌)

// 요소.innerHTML = `<li>${num}</li>`;
// -> HTML 태그를 해석해서 화면에 태그의 본 기능대로 출력

//--------------------------------------------------------

// 구구단 출력

function executeFn3() {
    const value = Number(document.getElementById("input3").value);
    const ul = document.getElementById("result3");

    ul.innerHTML ="";  // 이전 내용 삭제

    if (value < 2 || value > 9) {
        alert("2 ~ 9 사이만 입력해주세요.");

    } else {  
        for (let num=1; num <= 9; num++) {
            ul.innerHTML += `<li>${value} x ${num} = ${value * num}</li>`;
        }
    }
}

// 답안

/*

function executeFn3() {
    const value = Number(document.getElementById("input3").value);
    const ul = document.getElementById("result3");

    ul.innerHTML ="";  // 이전 내용 삭제

    if (value < 2 || value > 9) {
        alert("2 ~ 9 사이만 입력해주세요.");
        return;  // 함수를 종료하고 호풀한 곳으로 돌아감
                 // 함수 종료 정도로만 인식
    }  

    for(let num = 1; num <= 9; num++) {
        ul.innerHTML += `<li>${value} x ${num} = ${value * num}</li>`
    }
}

*/

//-----------------------------------------------------------------

/* 다음 모양 출력하기
12345
12345
12345
12345
*/

function check8() {
    
    // 4턴 반복하는 for문
    for(let num1 = 1; num1 <= 4; num1++) {


        // "12345" 출력하는 구문
        let sum = "";
        for(let num2 = 1; num2 <= 5; num2++) {
            sum += num2;
        }

        console.log(sum);
    }
}

/* 다음 모양 출력하기
1
12
123
1234
12345
*/


function check9() {
    for (let num1 = 1; num1 <= 5; num1++) {
        
        let sum = "";
        
        
        for(let num2 = 1; num2 <= num1; num2++) {
    
            sum += num2;
            
        }
        console.log(sum);
    }
}

/* 다음 모양 출력하기
*
**
***
****
*****
*/

function check10() {
    for (let num1 = 1; num1 <= 5; num1++) {
        
        let sum="";

        for(let num2 = 1; num2 <= num1; num2++) {
            sum += "*";
        }

        console.log(sum);
    }
}

//-------------------------------------------------------

// while 반복문

function check16() {
    
    // 변수를 선언만 해두기
    let val;  // undefined

    // 취소를 누르기 전 까지 반복
    // == 취소를 누르면 반복 종료
    while (val !== null) {
        // 동일 비교 연산자
        // !== : 값과 자료형이 모두 다른 경우 True
        // === : 값과 자료형이 모두 같은 경우 True

        val = prompt("입력 후 확인");  // 변수의 prompt값 대입
        // 확인 -> 입력값
        // 취소 -> null

        console.log(val);
    }
}

// 메뉴 주문하기

function check17() {
    
    // 메뉴 가격
    const gimbap = 3000;
    const ramen = 3500;
    const donkkaseu = 5000;

    // 주문 개수 카운트
    let gCount = 0; // 김밥
    let rCount = 0; // 라면
    let dCount = 0; // 돈까스

    // prompt 로 입력한 값을 저장할 변수 선언
    let input;   // undefined

    while (input !== null) {   // 취소 누르기 전까지 반복

        input = prompt("메뉴 번호를 입력하세요.");

        switch (input) {
            case "1" : gCount++; break;
            case "2" : rCount++; break;
            case "3" : dCount++; break;
            case null : alert("주문 완료!"); break;
            default : alert("메뉴에 작성된 번호만 입력해주세요."); break;
        }
    }

    alert(`김밥 : ${gCount}개, 라면 : ${rCount}개, 돈까스 : ${dCount}개`);
    let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkkaseu);
    alert(`총 가격은 ${sum}원 입니다.`)
}


// while 문을 for 반복문 처럼 사용하기

function check18() {
    
    // 1 부터 10 까지 출력
    let i = 1;   // 변수 선언

    while (i <= 10) {    // 조건식
        console.log(i);

        i++;    // 증감식
    }

    console.log("---------------");

    //10 부터 1 까지 1 씩 감소(while)

    let num = 10;

    while (num >= 1) {
        console.log(num);

        num--;
    }
}