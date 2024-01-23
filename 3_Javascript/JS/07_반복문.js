
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

    ul.innerHTML ="";
    for (let num=1; num <= 9; num++) {
        ul.innerHTML += `<li>${value} x ${num} = ${value * num}</li>`;
    }
}