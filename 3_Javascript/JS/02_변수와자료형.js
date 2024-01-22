/* console.log(값) */
// 브라우저 콘솔에 괄호() 내부의 값을 출력(기록)

console.log("Hello, World");
console.log(1234); 
console.log('JS는 홑따옴표도 문자열로 취급!');

//----------------------------------------------

// 변수 선언
// 메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것
// 작성법 : 변수종류 변수명;

var num1;

// 변수에 값 대입
// 선언된 변수에 값을 대입하는 것
// 작성법 : 변수명 = 대입할 값 ;
num1 = 10;

// console 에 num1 값 출력하기
console.log(num1);

// 변수 선언 + 대입
// 작성법 : 변수종류 변수명 = 대입할 값 ;
var num2 = 20;

console.log(num2);

// num1, num2 의 합 출력하기
console.log(num1 + num2);

// 변수에 대입한 값 변경하기
num1 = 300; // 기존의 num1 변수에 300 값을 재대입(기존 값을 덮어쓰기함)
num2 = 500;

// 변경된 두 변수의 값 출력
// 1) 문자열 + 문자열/숫자/변수 == 이어쓰기
console.log("num1의 값 : " + num1);
console.log("num2의 값 : " + num2);
console.log("100" + 100); 
// 문자열 "100"과 숫자열 100의 + 이기 때문에 이어쓰기됨

// 2) 괄호 내부에 , 를 작성해서 각각의 값을 독립적으로 출력
console.log("num1 : ", num1);
console.log("num2 : ", num2);
console.log("num1 : ", num1, "/ num2 : ", num2);

//----------------------------------------------------------------

// var / let / const 의 차이점

// 1. var (변수, 변수 선언 시 중복되는 변수명으로 선언 가능)
//      -> 먼저 선언된 변수가 나중에 선언된 변수에 덮어 씌워짐

var menu = "삼겹살";
console.log("menu : " + menu);

var menu = "초밥";
console.log("menu : "+ menu);
// 변수명이 중복되어 덮어쓰기 되면 이전에 선언 해놓은 변수를
// 쓸 수 없게 되는 문제가 발생

//------------------------------------------------------------------

// 2. let (변수, var 의 변수명 중복 문제를 해결)
let num3 = 25;

// let num3 = 500;   -> 새로운 변수선언에서 같은 변수명으로 값을 대입하는것 불가능
num3 = 500; // 기존의 변수에 값을 재대입하는 것은 가능하다

console.log("num3 : " + num3);

//--------------------------------------------------------------

// 3. const (상수(constant) 항상 같은 수)
// 한번 값이 대입되면 새로운 값을 대입할 수 없음

const PI = 3.141592;

// PI = 1.23 ;  Uncaught TypeError: Assignment to constant variable.
            // 상수에 새로운 값을 대입할 수 없는데, 새로운 값이 대입되었다.

console.log("PI : " + PI);

//-------------------------------------------------------------------

// 함수 레벨 스코프 
// : 함수 내에서 선언된 변수는 함수 내에서만 유효하며, 함수 외부에서는 참조할 수 없다.
// 즉, 함수 내부에서 선언한 변수는 지역 변수이며, 함수 외부에서 선언한 변수는 전역 변수이다.

// 블록 {} 레벨 스코프
// : 모든 코드 블록 내에서 선언된 변수는 코드블록 내에서만 유효하며, 코드블록 외부에서는 참조할 수 없다
// 즉, 코드 블록 내부에서 선언한 변수는 지역변수 이다.

// 블록 레벨 (let, const)
let foo = 123; // 전역 변수 (Global Variable)

{
    let foo = 456; // 지역 변수 (Local Variable)
    let bar = 456; // 지역 변수 (Local Variable)
    console.log(bar); // 지역 변수가 적용되어 출력
}

console.log(foo);  // 전역 변수(Global Variable) 이 적용되어 출력됨
//console.log(bar);  //Uncaught ReferenceError: bar is not defined -> 지역 변수의 영향 X

// 함수 레벨

var test = 123;   // 전역 변수

console.log(test);

{
    var test = 456; // var 는 {} 블록 안에 있어도 전역 변수로 인식됨.
}

console.log(test); // {} 블록 밖에 있지만 var 변수는 코드블록 내에서 선언된 변수도 전역 변수로 인식.

/* JS 자료형 확인하기 */

// typeof 연산자 : 변수 / 값의 자료형을 출력하는 연산자 -> 작성법 : typeof 변수/값;

// undefined : 정의되지 않은 변수 / 값이 아직 대입되지 않았다.
let undef; // 변수 선언

console.log("undef : ", undef, typeof nudef);

// String (문자열) : "", '' 내부에 작성된 값
const name1 = "홍길동";

console.log("name : ", name1, typeof name1);

const phone = 12345678;

console.log("phone : ", phone, typeof phone);

const gender = "M"; // 한 글자만 작성해도 문자열(string)
console.log("gender : ", gender, typeof gender);

// Number (숫자열) : 정수, 실수, 양수, 음수, 0 ... 모든 숫자를 의미
const age = 30;
const height = 178.1;

console.log("age : ", age, typeof age);
console.log("height : ", height, typeof height);

// Boolean (논리값) : true / false 판별
const isTrue = true;  //boolean 변수명 앞에서 보통 "is"를 붙인다.
const isFalse = false;

console.log("isTrue : ", isTrue, typeof isTrue);
console.log("isFalse : ", isFalse, typeof isFalse);

// object (객체) : 값을 여러개 저장할 수 있는 형태
// 1) 배열(Array) : 여러 값이 나열되어 있는 것의 묶음.
const numbers = [10, 20, 30];  // [0번째 index, 1번째 index, 2번째 index]

console.log("numbers : ", numbers, typeof numbers);

console.log("numbers 배열 값 중 0번째 : ", numbers[0], typeof numbers[0]);
console.log("numbers 배열 값 중 1번째 : ", numbers[1], typeof numbers[1]);
console.log("numbers 배열 값 중 2번째 : ", numbers[2], typeof numbers[2]);

// 2) JS 객체 : 값을 K:V(Map) 형식으로 여러개 저장하는 형태
//          -> { K:V, K:V, K:V, ...}

// K(Key) : 값을 구분하는 이름(변수명 비슷)
// V(Value) : K 에 대응되는 값 (변수에 대입되는 값 비슷)

const user = { id : "user01", pw : "pass01", userName : "홍길동" };

console.log("user : ", user);

// 객체에 존재하는 값 하나씩 얻어오기
// 방법 1 : 변수명["key"]
console.log("user [id] : ", user["id"], typeof user["id"]);
console.log("user [pw] : ", user["pw"]);
console.log("user [userName] : ", user["userName"]);
//방법 2 : 변수명.key
console.log("user id : ", user.id, typeof user.id);
console.log("user pw : ", user.pw);
console.log("user userName : ", user.userName);

// 함수 (Function)
// 작성법 
// const 변수명 = function () {};
// (변수명 == 함수명)

const sumFn = function (a, b) { return a + b }; // 익명 함수

// function sumFn(a, b) {
//      return a + b
// }
// 위에 두 코드는 같다.

console.log(typeof sumFn);
console.log(sumFn(5, 7));