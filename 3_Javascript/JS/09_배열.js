// 배열 선언 및 기초 사용법
function check1() {
    
    // 배열 선언 방법 확인
    const arr1 = new Array();     
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ["사과", "바나나", "포도"];
    
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);
    
    // 배열명.length : 배열의 길이(배열에 있는 칸 수 또는 저장된 데이터 수)
    console.log(arr1.length);
    console.log(arr2.length);
    console.log(arr3.length);
    console.log(arr4.length);

    // 배열의 index
    /* 
        - 배열의 각 칸을 구분하는 번호
        - 0 부터 시작!
        - 중간에 번호를 생략할 수 없다(항상 연속적)
        - 마지막 index == 배열길이 - 1 (0부터 시작이기 때문에)
    
    */

    // 배열명[index] -> 배열의 해당 인덱스에 존재하는 데이터 반환
    console.log("arr4[0] : ", arr4[0]);
    console.log("arr4[1] : ", arr4[1]);
    console.log("arr4[2] : ", arr4[2]);

    // 배열명[index] = 값;   ->  해당 index에 지정된 값 대입
    arr2[0] = 100;
    arr2[1] = "점심시간";
    arr2[2] = true;
    console.log("arr2 : ", arr2);
    // JS 배열의 특징 : 인덱스 별로 자료형을 다르게 할 수 있다.

    // 길이 제한이 없다 -> 값을 배열에 원하는 만큼 추가 가능
    arr1[0] = "가";
    arr1[1] = "나";
    arr1[2] = "다";
    arr1[3] = "라";
    
    console.log("arr1 : ", arr1);

    // 원하는 index에 값을 마음대로 추가할 수 있다.
    // -> 중간에 건너뛴 index는 빈칸으로 채워진다.
    arr1[5] = "자음";
    console.log("arr1 : ", arr1);
    
}

// 배열과 for 문
function check2() {
    
    // for 문을 이용해서 배열 요소 초기화 하기
    // 초기화 : 변수나 배열요소에 처음으로 값을 대입하는 것

    // index : 배열의 각 칸을 구분하는 번호
    // 배열 요소 == 배열의 각 칸

    // for 문 사용 X

    const arr1 = [];

    arr1[0] = 0;
    arr1[1] = 10;
    arr1[2] = 20;
    arr1[3] = 30;

    console.log("arr1 : ", arr1);

    // for 문 사용 O
    const arr2 = [];
    for (let i = 0; i <= 3; i++) {
        arr2[i] = i * 10;
        // arr2[0] = 0 * 10;
        // arr2[1] = 1 * 10;
        // arr2[2] = 2 * 10;
        // arr2[3] = 3 * 10;
    } 

    console.log("arr2 : ", arr2);
}

// 배열과 for 문 2
function check3() {
    // 배열에 저장된 값 하나씩 순서대로 출력하기
    // -> for 문을 이용해서 배열의 모든 요소 접근하기

    const arr = [10, 20, 50, 100, 500, 1000];

    for (let i = 0; i <= arr.length-1; i++) {
    //              i < arr.length   -> 이렇게 사용할 수도 있음
        console.log(`arr[${i}] == ${arr[i]}`);
    }
}


// 배열과 for 문 3
function check4() {
    
    // for문을 이용해서 배열을 순서대로 초기화한 후에
    // 다른 for 문을 이용해서 배열요소를 하나씩 모두 출력

    const arr = new Array(5);   // 5 칸 짜리 배열(요소별로 내용 없음)
    
    // 1. 배열을 순서대로 초기화
    for(let i = 0; i < arr.length; i++) {
        arr[i] = Number(prompt(`${i} 번째 숫자 입력`));
    }

    // 2. 배열 요소를 하나씩 모두 출력 + 합계(sum)
    let sum = 0;  // 합계

    for(let i = 0; i < arr.length; i++) {
        console.log(`arr[${i}] : ${arr[i]}`);
        sum += arr[i];  // 값 누적
    }

    console.log("sum : ", sum);
    

}

//------------------------------------------------------

//저녁 메뉴 뽑기
function selectMenu() {
    const menuResult = document.getElementById("menuResult");

    // 저녁 메뉴로 초기화된 배열 생성
    const menu = ["짬뽕", "제육덮밥", "초밥",
                 "삼겹살", "서브웨이", "돈까스", "칼국수"];  // 길이 : 7
    
    // menu 배열 index 범위 내에서 난수 생성
    const randomNum = Math.floor(Math.random() * menu.length);

    // 난수 번째 index 요소값을 화면에 출력
    menuResult.innerText = menu[randomNum];
    
}

//------------------------------------------------------------

// 2차원 배열
function check5() {
    
    const arr = [[1,2,3,4], 
                 [5,6,7,8], 
                 [9,10,11,12]];

    console.log(arr[1][3]); // 8
   
    console.log(arr[2][2]); // 11
    // 배열명[행][열]

    const arr1 = [100,200,300,400];
    const arr2 = [900,800,700,600];

    arr[3] = arr1;
    arr[4] = arr2;

    console.log(arr);

    console.log(arr[4][3]);  // 600
}


// 2 부터 2 씩 증가하는 수를 
// 5 행 5 열 배열의 모든 요소에 차례대로 대입하고 출력하기
/*
    [[2,4,6,8,10]
     [12,14,16,18,20]
     [22,24,26,28,30]
     [32,34,36,38,40]
     [42,44,46,48,50]]
*/
function check6() {
    
    let count = 2;
    const arr = [];

    for (let row = 0; row < 5; row++) {  // 행 제어
        
        arr[row] = [];
        // arr[0] = []

        for (let col = 0 ; col < 5; col++) {
            arr[row][col] = count;  // row 행 col 열에 count 대입
            count += 2;  // count를 2 씩 증가
            // arr[0][0] = 2;
            // arr[0][1] = 4;
            // arr[0][2] = 6;
            // arr[0][3] = 8;
            // arr[0][4] = 10;
            //---------------------------
            // arr[1][0] = 12;
            // arr[1][1] = 14;
            // arr[1][2] = 16;
            // arr[1][3] = 18;
            // arr[1][4] = 20;
        }
         
    }

    console.log(arr);
}


function check7() {

    let count = 1;
    const arr = [];

    for(let row = 0; row < 5; row ++) {

        arr[row] = [];

        for(let col = 0; col < 5; col ++) {

            arr[row][col] = count;
            count += 2;
            
        }

    }
    console.log(arr);

}