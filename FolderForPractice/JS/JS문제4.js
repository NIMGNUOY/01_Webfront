const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    
    // 사과 input 값 , 가격 구하기
    const checkApple = document.querySelector("#apple");
    
    if(checkApple.checked) {
        
        const appleCount = Number(document.getElementById("appleCount").value);

        function applePrice() {
            return Number(appleCount * 2000);
        };
    } else {
        function applePrice() {
            return 0;
        }
    }

    // 바나나
    const checkBanana = document.querySelector("#banana");

    if(checkBanana.checked) {

        const bananaCount = Number(document.getElementById("bananaCount").value);

        function bananaPrice() {
            return Number(bananaCount * 3000);
        };
    } else {
        function bananaPrice() {
            return 0;
        }
    }

    // 멜론
    const checkMelon = document.getElementById("melon");

    if(checkMelon.checked) {

        const melonCount = Number(document.getElementById("melonCount").value);

        function melonPrice() {
            return Number(melonCount * 5000);
        };
    } else {
        function melonPrice() {
            return 0;
        }
    };

    // 총 가격 도출하기
    const result = document.getElementById("result");

    result.innerHTML = `${applePrice() + bananaPrice() + melonPrice()} 원`;

});