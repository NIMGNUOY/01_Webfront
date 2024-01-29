const num = document.querySelectorAll(".number");
const result = document.querySelector("#result");
const resetBtn = document.querySelector("#reset");


for (let i = 0; i < num.length; i++) {
    

    num[i].addEventListener("click", () => {
        result.innerHTML += num[i].innerHTML;

        let str = result.innerHTML;
        if(str.trim().length == '10') {
        alert("10자까지 입력 가능합니다.");
    };
        
    });


    resetBtn.addEventListener("click", ()=>{
        result.innerHTML = '';
    });
    
}

