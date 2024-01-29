// window.setTimeout()

const btn = document.querySelector("#btn1");

btn.addEventListener("click", () => {

    setTimeout(function() {
        alert("3초 후 출력");
    }, 3000);

});


// window.setInterval()

let interval;  // setInverval 을 저장하기 위한 전역 변수

// 현재 시간을 문자열로 반환하는 함수
function currentTime() {
    
    const now = new Date();   // 현재 위치의 연월일시간

    let hour = now.getHours();   // 시
    let min = now.getMinutes();    // 분
    let sec = now.getSeconds();    // 초

    if (hour < 10) {hour = "0" + hour};
    if (min < 10) {min = "0" + min};
    if (sec < 10) {sec = "0" + sec};

    return hour + " : " + min + " : " +  sec ;
    // ex)  14 : 41 : 30 

};

function clockFn() {
    
    const clock = document.getElementById("clock");
    
    clock.innerText = currentTime();

    interval = setInterval(function() {
        clock.innerText = currentTime();
    }, 1000);

};

clockFn();


// clearInterval()

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(interval);
});