const menuItem = document.querySelectorAll(".menu-item");
const cart = document.getElementById("cart")

// 함수 설정
function addToCart(name, price) {
    
    // 주문 index
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    // 주문 품목
    const item = document.createElement("span");
    item.innerHTML = `${name}`;
    
    // 수량
    const quantity = document.createElement("span");
    quantity.classList.add("quantity");

    // 삭제
    const del = document.createElement("span");
    del.classList.add("delete-button");
    
    // 정리
    cart.append(cartItem);
    cartItem.append(item, quantity, del);


    // 가격 합계
    const total = document.getElementById("total");
    

};




