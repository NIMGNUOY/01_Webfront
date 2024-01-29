// 정규 표현식 객체 생성 + 확인하기

document.getElementById("btn1").addEventListener("click", () => {

    // 정규 표현식 객체 생성
    const regExp1 = new RegExp("script");
                // "script" 와 일치하는 문자열이 있는지 검사하는 정규표현식

    const regExp2 = /java/;
                // "java" 와 일치하는 문자열이 있는지 검사하는 정규표현식

    // 확인하기
    const str1 = "저희는 지금 javascript를 공부하고 있습니다";
    const str2 = "jsp(java server page)도 나중에 할겁니다";
    const str3 = "java, java, java";

    console.log("regExp1.test() : ", regExp1.test(str1));
    console.log(regExp1.exec(str1));

    console.log("regExp2.test() : ", regExp2.test(str2));
    console.log(regExp2.exec(str2));  
    // index : 4  ->  4번째 index에서 java라는 단어가 시작된다

    console.log("regExp2.test() : ", regExp1.test(str3));
});


// 메타 문자 확인하기

document.getElementById("btn2").addEventListener("click", () => {

    const div1 = document.getElementById("div1");
    
    // a (일반 문자열) : 문자열 내에 a라는 문자열이 존재하는지 검색
    const regExp1 = /a/;
    div1.innerHTML += "/a/, apple : " + regExp1.test("apple") + "<hr>";  // true
    div1.innerHTML += "/a/, price : " + regExp1.test("price") + "<hr>";  // false
    
    // [abcd] : 문자열 내에 a 또는 b 또는 c 또는 d 중 하나라도 일치하는
    //          문자가 있는지 검색

    const regExp2 = /[abcd]/;
    div1.innerHTML += "/[abcd]/, apple : " + regExp2.test("apple") + "<hr>";
    div1.innerHTML += "/[abcd]/, price : " + regExp2.test("price") + "<hr>";
    div1.innerHTML += "/[abcd]/, num : " + regExp2.test("num") + "<hr>";
    div1.innerHTML += "/a/, price : " + regExp1.test("price") + "<hr>";

    // ^ (캐럿) : 문자열의 시작을 의미
    const regExp3 = /^group/;   // 문자열의 시작이 group 인지 확인
    div1.innerHTML += "/^group/, group100 : " + regExp3.test("group100") + "<hr>";
    div1.innerHTML += "/^group/, 100group : " + regExp3.test("100group") + "<hr>";

    // $ (달러) : 문자열의 끝을 의미
    const regExp4 = /group$/;    // 문자열의 끝이 group 인지 확인(뒤에 $ 붙임)
    div1.innerHTML += "/^group/, group100 : " + regExp4.test("group100") + "<hr>";
    div1.innerHTML += "/^group/, 100group : " + regExp4.test("100group") + "<hr>";

});

// 이름 유효성 검사하기

document.getElementById("inputName").addEventListener("keyup", (e) => {

    // 화살표 함수의 this
    // 화살표 함수의 this 는 상위(부모)의 스코프 값이 상속된다

    // 이벤트 핸들러 내 일반 function : this
    // -> 이벤트가 일어난 객체


    // 결과 출력용 span
    const span = document.getElementById("inputNameResult");
    
    // 한글 2~5글자 정규표현식 객체 만들기
    const regExp = /^[ㄱ-힣]{2,5}$/; 
                // 시작과 끝이 모두 한글인 2~5글자 한글

    // 빈칸인지 검사
    if(e.target.value.length == 0) {   
        // e.target : 현재 이벤트가 일어나고 있는 요소(input)
        span.innerText = "";
        return;
    };

    // 유효성 검사
    if (regExp.test(e.target.value)) {
        // 유효한 경우
        span.innerText = "유효한 이름 형식입니다.";
        span.style.color = "green";
        span.style.fontWeight = "bold";
    } else {    // 유효하지 않는 경우
        span.innerText = "이름 형식이 유효하지 않습니다.";
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }

});


// 주민등록번호 유효성 검사
document.getElementById("inputPno").addEventListener("keyup", (e) => {

    const result = document.getElementById("inputPnoResult");

    if (e.target.value.length == 0) {
        result.innerText = "주민등록번호를 작성해주세요.";

        result.classList.remove("conform");
        result.classList.remove("error");

        return;
    };

    // 생년월일(6) - 고유번호(7)
    const regExp = /^\d{6}\-\d{7}$/;
                    /*
                        ^
                        \d{6}
                        \-
                        \d{7}
                        $
                    */

    if (regExp.test(e.target.value)) {
        result.innerText = "유효한 주민등록 번호 형식입니다.";
        
        result.classList.remove("error");
        result.classList.add("conform");
    } else {
        result.innerText = "유효하지 않습니다"
        result.classList.remove("conform");
        result.classList.add("error");
    }


});