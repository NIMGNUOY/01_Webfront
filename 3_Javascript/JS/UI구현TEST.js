
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    
    // 너비 
    const width = document.querySelector("#width");
    const widthVl = Number(width.value);
    
    // 높이
    const height = document.querySelector("#height");
    const heightVl= Number(height.value);
    
    // 글자 크기
    const fontSize = document.querySelector("#font-size");
    const fontSizeVl = Number(fontSize.value);
    
    // 굵기  - 보통
    const fontNormal = document.querySelector("#normal");
    
    // 굵기 - 굵게
    const fontBold = document.querySelector("#bold");
    
    // 글자색
    const color = document.querySelector("#text-color");
    const colorVl = color.value;
    
    // 배경색
    const bgColor = document.querySelector("#bg-color");
    const bgColorVl = bgColor.value;
    
    // 가로정렬 - 왼쪽
    const rowLeft = document.querySelector("#row-left");
    
    // 가로정렬 - 가운데
    const rowCenter = document.querySelector("#row-center");
    
    // 가로정렬 - 오른쪽
    const rowRight = document.querySelector("#row-right");
    
    // 세로정렬 - 위
    const colTop = document.querySelector("#col-top");
    
    // 세로정렬 - 가운데
    const colCenter = document.querySelector("#col-center");
    
    // 세로정렬 - 아래
    const colBottom = document.querySelector("#col-bottom");
    
    // 출력문자열
    const textBox = document.querySelector("#text-box");
    const textBoxVl = textBox.value;
    
    
    // 결과 출력하기
    const resultBox = document.querySelector("#result-box");
    const result = document.createElement("div");
    result.classList.add("result-1");
    resultBox.append(result);

    result.style.width = `${widthVl}px`;

    result.style.height = `${heightVl}px`;

    result.style.fontSize = `${fontSizeVl}px`;

    result.style.color = `${colorVl}`;

    result.style.backgroundColor = `${bgColorVl}`;

    result.innerText = `${textBoxVl}`;

    result.style.border = `3px solid black`;
    

    console.log(btn);

    // 폰트 굵기
    if (fontNormal.checked) {
        result.style.fontWeight = 'normal';
        
    } else if (fontBold.checked) {
        result.style.fontWeight = 'bold';
    };

    result.style.display = 'flex';

    // 가로 정렬
    if (rowLeft.checked) {
        result.style.justifyContent = 'left';
    } else if (rowCenter.checked) {
        result.style.justifyContent = 'center';
    } else if (rowRight.checked) {
        result.style.justifyContent = 'right'; 
    };

    // 세로 정렬
    if (colTop.checked) {
        result.style.alignItems = 'flex-start';
    } else if (colCenter.checked) {
        result.style.alignItems = 'center'; 
    } else if (colBottom.checked) {
        result.style.alignItems= 'flex-end';
    };
    
    console.log(result.style.alignContent);
    
    return;
});