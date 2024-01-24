// 분기문

// break 확인
function check1() {
    
    // 1 부터 10 까지 1 씩 증가하다가 5가 되면 멈춤
    for (let i = 1; i <= 10; i++) {
        console.log("i : ", i);
        
        if (i === 5) break;
    }
}

// 무한 반복하는 while 문 멈추기
function check2() {
    let num = 1;
    // 10 초과 시 멈춤
    while(true) {
        // true 일 때 반복 수행할 코드
        console.log("num : ", num++);
        
        
        if(num > 10) break;
    }
}

// continue 확인하기
function check3() {
    
    // 1 부터 20 까지 출력, 단 3의 배수는 건너뛰기
    for (let i = 1; i <= 20; i++) {
        
        // 3 의 배수인 경우
        if (i % 3 === 0) continue; 
        // 이 코드를 감싸고 있는 가장 가까운
        // for 문 시작부분으로 넘어감
        // 즉, 아래 console.log 코드는 수행하지 않고
        // for 문 시작부분으로 넘어간다.
        
        console.log("i : ", i);
    }

}


/*
    1부터 30까지 1씩 증가하며 출력
    단, 홀수 또는 10의 배수는 건너뛰기
*/
function check4() {
    for (let i = 1; i <= 30; i++) {
        if (i % 2 === 1 || i % 10 === 0) continue;
        

        console.log("i : ", i);
    }
}

/*
    0 ~ 9 까지 5줄 출력
    - 각 줄에서 4의 배수는 건너뛰기
    - 3번째 줄 출력 후 멈추기

    01235679
    01235679
    01235679
*/

function check5() {
    for (let i = 1; i <= 5; i++) {

        let sum = "";
        for (let num = 0; num <=9; num++) {
            if(num !== 0 && num % 4 === 0) continue;
            // num !== 0   ->  이 부분으로 앞에 0이 붙음.
            // num 이 0 이면 첫번째 조건이 false 가 되므로
            // continue 가 수행되지 않음.

            sum += num;
            
        }
        
        console.log(sum);
        if (i === 3) break;
    }
}

//------------------------------------------------------
// UP , DOWN 게임

function startGame() {
    
    const successNum = Math.floor(Math.random() * 100) + 1 ;
    let count = 0;

    let input;
    for (let i = 1; i <= 5; i++) {
        if (input !== null) {
            input = prompt("1 ~ 100 사이 숫자를 입력하세요.");
        } else if (input < 1 || input >100) {
            alert
        }
    }  
}