
let xindex = 0;
let yindex = 0;

document.addEventListener("keydown", (e) => {
  console.log(e);
  const map = document.querySelector("#map");
  const object = document.querySelector("#object");

  switch(e.key) {
    case "ArrowRight" : xindex += 10 ; break;
    case "ArrowLeft" : xindex -= 10 ; break; 
    case "ArrowUp" : yindex -= 10 ; break;
    case "ArrowDown" : yindex += 10 ; break;
    case " " : 
    
  
    map.innerHTML += 
    `<section id="object" class="icon" style="transform: translate3d(${xindex}px, ${yindex}px, 0)"></section>`
    break;


    default : alert("방향키와 스페이스바키를 이용하세요."); break;
  };
  
  object.style.transform = `translate3d(${xindex}px, ${yindex}px, 0)`;

});