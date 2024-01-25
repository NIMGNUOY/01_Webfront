

// 모범 답안

let xindex = 0;  // x좌표 방향대로 얼만큼 이동했는지 기억할 변수
let yindex = 0;  // y좌표 방향대로 얼만큼 이동했는지 기억할 변수


// addEventListener("이벤트 종류", 함수(이벤트가 발생했을때 수행할 기능))
document.addEventListener("keydown", function(e) {
    // e : 이벤트 객체
    const boomberman = document.getElementById("boomberMan"); // 봄버맨 이미지

    switch(e.key) {
        case 'ArrowRight' : xindex += 10; break;
        case 'ArrowLeft' : xindex -= 10; break;
        case 'ArrowUp' : yindex -= 10; break;
        case 'ArrowDown' : yindex += 10; break;
        case 'x' : 
        
        const map = document.getElementsByClassName("map");
        map[0].innerHTML +=
        `<img src="../img/boom.png"
        style="transform: translate3d(${xindex}px, ${yindex}px, 0); position : absolute;" >`;
        break;

        default : alert("방향키와 x만 가능"); break;
        
    }

    boomberman.style.transform = `translate3d(${xindex}px, ${yindex}px, 0)`;
});




