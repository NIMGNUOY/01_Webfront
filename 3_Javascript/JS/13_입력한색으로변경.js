const colorInput = document.querySelectorAll(".color-input");
const colorBox = document.querySelectorAll(".box");
const changeBtn = document.querySelector("#changeButton");

// 모범 답안

changeBtn.addEventListener("click", function() {
    
    for(let i = 0; i < 5; i++) {
        colorBox[i].style.backgroundColor = colorInput[i].value;
    }
});
