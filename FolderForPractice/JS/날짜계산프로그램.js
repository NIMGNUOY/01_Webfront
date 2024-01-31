const now = new Date();
const theDay = new Date("2024-12-25");

let toNow = now.getTime();
let toTheDay = theDay.getTime();
let passedTime = toTheDay - toNow;

passedTime = Math.round(passedTime / (1000 * 60 * 60 * 24));



console.log(passedTime);

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

  const text = document.getElementById("text");

  text.innerHTML += `${passedTime} 일 남았습니다`;

});

//----------------------------------------------------------------


function currentTime () {
  
  const nowTime = new Date();
  
  let hour = nowTime.getHours();
  let minutes = nowTime.getMinutes();
  let sec = nowTime.getSeconds();
  
  if(hour < 10) {hour = "0" + hour};
  if(minutes < 10) {minutes = "0" + minutes};
  if(sec < 10) {sec = "0" + sec};
  
  return hour + " : " + minutes + " : " + sec;

  
}

function clockFn() {
  
  const box = document.getElementById("box");

  setInterval(function() {
    
    box.innerText = currentTime();

  }, 1000);

};

clockFn();