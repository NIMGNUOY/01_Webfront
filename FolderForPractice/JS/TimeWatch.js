const time = document.querySelector("#time");
const dayData = document.querySelector("#day-data");


// 날짜
function dayInfo() {
  let nowDate = new Date();

  let year = nowDate.getFullYear();
  let month = nowDate.getMonth() + 1;
  let date = nowDate.getDate();

  console.log(month);
  console.log(date);

  if (month < 10) {month = "0" + month};
  if (date < 10) {date = "0" + date};

  return year + " - " + month + " - " + date ;

  
}

dayData.innerText = dayInfo();

// 시간

function nowTime() {

  let now = new Date();

  let hour = now.getHours();
  let minutes = now.getMinutes();
  let sec = now.getSeconds();

  if(hour < 10) {hour = "0" + hour};
  if(minutes < 10) {minutes = "0" + minutes};
  if(sec < 10) {sec = "0" + sec};

  return hour + " : " + minutes + " : " + sec;

}



function clockFn() {


  interval = setInterval(function () {

    time.innerText = nowTime();

  }, 1000);

}

clockFn();

// 버트 기능 수행

document.querySelector("#stopWatch").addEventListener("click", () => {

  time.innerText = "00 : 00 : 00 ";

  clearInterval(interval);

});

document.querySelector("#startBtn").addEventListener("click", () => {

  function startWatch() {
  
    setInterval(function () {
    
      let minutes = 0;
      let sec = 0;
      let ms = 0;
      
      ms++;
  
      if(ms = 1000) {ms = "00", sec ++};
      if(ms < 100) {ms = "0" + ms};
      if(sec < 10) {sec = "0" + sec};
      if(sec = 60) {sec = "00", minutes ++};
      if(minutes < 10) {minutes = "0" + minutes};
    
      time.innerText = startWatch();
      return minutes + " : " + sec + " : " + ms;

      
    }, 100);
  }



});