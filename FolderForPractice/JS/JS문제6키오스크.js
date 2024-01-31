const menuItem = document.querySelectorAll(".menu-item");
const cart = document.getElementById("cart");
const emptyCart = document.getElementById("empty-cart");

// 메뉴별 이름 가격 값 구하기
const list0 = menuItem[0].childNodes
const list1 = menuItem[1].childNodes
const list2 = menuItem[2].childNodes
const list3 = menuItem[3].childNodes
const list4 = menuItem[4].childNodes
const list5 = menuItem[5].childNodes

console.log(list0);



// 함수 설정
function addToCart(name, price) {
    
    let count = 1;
    
    emptyCart.remove();
    
    cart.classList.add("cart-item");
    // 주문 index
    const itemIdx = document.createElement("div");
    itemIdx.classList.add("cart", "cart-item");
    
    // 주문 품목
    const item = document.createElement("span");
    item.innerHTML = `${name}`;
    cart.append(item);
    
    // 주문 수량
    
    const itemNum = document.createElement("span");
    itemNum.classList.add("quantity");
    cart.append(itemNum);
    
    
    
    // - 버튼
    const minusBtn = document.createElement("button");
    minusBtn.innerHTML = "-";
    itemNum.append(minusBtn);

    minusBtn.addEventListener("click", () => {
        count--;
    });

    // 수량
    const numbers = document.createElement("p");
    itemNum.append(numbers);
    
    
    // + 버튼

    const plusBtn = document.createElement("button");
    plusBtn.innerHTML = "+";
    itemNum.append(plusBtn);
    
    plusBtn.addEventListener("click", () => {
        count++;
    });
    
    numbers.innerHTML = `${count}`;

    // 삭제 버튼
    const del = document.createElement("span");
    del.classList.add("delete-button");
    cart.append(del)
    del.innerHTML = `&times`;
    
    del.addEventListener("click", (e) => {
        const parent = e.target.parentElement;
        parent.remove();
        
    });

    
    const total = document.getElementById("total");
    total.innerHTML = `합계 : ￦${price}`;
    
    
};




