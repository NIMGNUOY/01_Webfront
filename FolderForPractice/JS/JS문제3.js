const createBtn = document.querySelector("#createBtn");
const lottoBoard = document.querySelector("#lottoBoard");

createBtn.addEventListener("click", () => {
    
    for(let i = 1; i <= 45; i++) {
        
        const num = document.createElement("span");
        num.classList.add("number");
        lottoBoard.append(num);
        num.innerHTML = `${i}`;

        num.addEventListener("click", () => {

            num.classList.add("active");

            let numActive = document.querySelectorAll(".active").length;

            if (numActive > 6) {
                
                alert("6개까지 선택 가능합니다.");
                
            }

        });
        
        
    };
    
    
});

