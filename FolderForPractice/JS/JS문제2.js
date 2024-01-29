const idxNum = document.querySelector("#idxNum");
const addBtn = document.querySelector("#btn");

addBtn.addEventListener("click", () => {

    const v1 = Number(idxNum.value);

    for ( let i = 1; i <= v1; i++){
        const container = document.querySelector("#container");
        const input = document.createElement("input");
        input.classList.add("input-number");
        container.append(input);
    };

    const sumBtn = document.querySelector("#sumBtn");
    
    sumBtn.addEventListener("click", () => {
        
        const inputNum = document.querySelectorAll(".input-number");

        let sum = 0;
        for (let i = 0; i < inputNum.length; i++) {
            
            const v2 = Number(inputNum[i].value);

            sum += v2;
            
        }

        const result = document.querySelector("#result");

        result.innerHTML = `${sum}`;

    });
    
});