/*
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
*/



const cart = document.getElementById('cart');
const totalElement = document.getElementById('total');
const emptyCartDiv = document.getElementById('empty-cart');
let total = 0;

// 장바구니 메뉴 요소 생성 함수
function createCartItemElement(item, price) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.setAttribute('data-item', item);
    cartItem.setAttribute('data-price', price);

    const itemName = document.createElement('span');
    itemName.innerText = item;

    const quantityContainer = document.createElement('div');
    quantityContainer.classList.add('quantity');

    const decreaseButton = document.createElement('button');
    decreaseButton.innerText = '-';
    decreaseButton.onclick = function() { decreaseQuantity(decreaseButton); };

    const quantitySpan = document.createElement('span');
    quantitySpan.innerText = '1';

    const increaseButton = document.createElement('button');
    increaseButton.innerText = '+';
    increaseButton.onclick = function() { increaseQuantity(increaseButton); };

    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText = 'X';
    deleteButton.onclick = function() { deleteItem(deleteButton); };

    quantityContainer.appendChild(decreaseButton);
    quantityContainer.appendChild(quantitySpan);
    quantityContainer.appendChild(increaseButton);

    cartItem.appendChild(itemName);
    cartItem.appendChild(quantityContainer);
    cartItem.appendChild(deleteButton);

    return cartItem;
}

// 메뉴 선택 시 장바구니 함수
function addToCart(item, price) {
    const cartItems = document.getElementsByClassName('cart-item');
    let existingItem = null;

    // 검사해서 이미 장바구니에 존재하는지 확인
    for (const cartItem of cartItems) {
        if (cartItem.getAttribute('data-item') === item) {
            existingItem = cartItem;
            break;
        }
    }

    // 장바구니에 아이템이 이미 있는 경우
    if (existingItem) {
        const quantityElement = existingItem.querySelector('.quantity span');
        const quantity = parseInt(quantityElement.innerText, 10) + 1;
        quantityElement.innerText = quantity;
    } else {
        // 장바구니에 아이템이 없는 경우
        const cartItem = createCartItemElement(item, price);
        cart.appendChild(cartItem);
    }

    // 합계 갱신
    total += price;
    totalElement.innerText = `합계: ₩${total.toLocaleString()}`;

    // 장바구니가 비어 있습니다. 문구 감춤
    emptyCartDiv.style.display = 'none';
    cart.style.display = 'block';
}

// 메뉴 개수 증가버튼 함수
function increaseQuantity(button) {
    const quantityElement = button.parentElement.querySelector('span');
    const quantity = parseInt(quantityElement.innerText, 10) + 1;
    quantityElement.innerText = quantity;
    updateTotal();
}

// 메뉴 개수 감소버튼 함수
function decreaseQuantity(button) {
    const quantityElement = button.parentElement.querySelector('span');
    let quantity = parseInt(quantityElement.innerText, 10) - 1;
    quantity = Math.max(1, quantity); // 최소값은 1로 유지
    quantityElement.innerText = quantity;
    updateTotal();
}

// 장바구니 메뉴 삭제 함수
function deleteItem(button) {
    const cartItem = button.parentElement;
    const price = parseInt(cartItem.dataset.price, 10);
    const quantity = parseInt(cartItem.querySelector('.quantity span').innerText, 10);

    // 합계에서 해당 아이템 가격 차감
    total -= price * quantity;

    // 합계 갱신
    totalElement.innerText = `합계: ₩${total.toLocaleString()}`;

    cartItem.remove();

    // 장바구니가 비어 있습니다. 문구 갱신
    if (cart.children.length === 0) {
        emptyCartDiv.style.display = 'block';
        cart.style.display = 'none';
    }
}

// 장바구니에 담긴 메뉴 합계 업데이트 함수
function updateTotal() {
    total = 0;
    const cartItems = document.getElementsByClassName('cart-item');
    for (const cartItem of cartItems) {
        const price = parseInt(cartItem.dataset.price, 10);
        const quantity = parseInt(cartItem.querySelector('.quantity span').innerText, 10);
        total += price * quantity;
    }
    totalElement.innerText = `합계: ₩${total.toLocaleString()}`;

    // 장바구니가 비어 있습니다. 문구 갱신
    if (cart.children.length === 0) {
        emptyCartDiv.style.display = 'block';
        cart.style.display = 'none';
    }
}