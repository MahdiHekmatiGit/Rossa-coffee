// each time with alt + ctrl + s , you can see localStorage data
// each time with alt + ctrl + c , you can clear localStorage data
window.addEventListener('keydown', (e) => {
    if (e.altKey && e.ctrlKey) {

        if (e.key == 's') {
            console.log(localStorage);
        } else if (e.key == 'c') {
            localStorage.clear();
            console.log("localStorage cleared");
            console.log(localStorage);
        }
    }
})


// ---important:
// varibales below declared before in other js file:
// basket_container <- container of basket
// basket_items_contianer <- contianer of baket items
// ---

// refresh basket items function:
function loadBasketList() {
    basket_items_contianer.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
        console.log(getProductObjectByCode('cs02'));
        const code = localStorage.key(i);
        const value = parseInt(localStorage.getItem(code));
        let firstPrice = getProductObjectByCode(code).product_price;
        

        basket_items_contianer.innerHTML += `
            <div class="basket_item" data-product-code="${code}">
                <div class="basket_item_image_Container">
                    <img src="${getProductObjectByCode(code).product_image}"
                        alt="" class="basket_item_image image_fit">
                </div>
                <div class="basket_item_right_Container">
                    <h4>${getProductObjectByCode(code).product_name}</h4>
                    <div class="item_div_1">
                        <span class="basket_item_price">${getProductObjectByCode(code).product_price}$</span>
                        <div>
                            <i class="bi bi-bag-dash-fill c_p" data-product-code="${code}" onclick="decreaseProductCount(event)"></i>
                            <span class="basket_item_count" data-product-code="${code}">0${value}</span>
                            <i class="bi bi-bag-plus-fill c_p" data-product-code="${code}" onclick="increaseProductCount(event)"></i>
                        </div>
                    </div>
                    <div class="item_div_2">
                        <span class="basket_item_final_price">${firstPrice * value}$</span>
                        <button data-product-code="${code}" onclick="removeFromBasket(event)">remove</button>
                    </div>
                </div>
            </div>
        ` ;
    }

    // write empty in basket when thre are not any order:
    if (basket_items_contianer.children.length == 0) {
        const emp = document.createElement('p');
        emp.style.position = 'relative';
        emp.style.top = '47%';
        emp.textContent = "Empty!";
        basket_items_contianer.appendChild(emp);
        document.querySelector('#order_button').setAttribute('disabled', 'disabled');
    } else {
        document.querySelector('#order_button').removeAttribute('disabled');
    }

}

function addToBasket(e) {
    let code = e.target.dataset.productCode;
    localStorage.setItem(code, 1);
    // condition by page title name
    if (document.title == 'iced Drinks') {
        loadIceDrinkMenu();
    } else if (document.title == 'hot Drinks') {
        loadHotDrinkMenu();
    } else if (document.title == 'cakes') {
        loadCakesMenu();
    }
}

function removeFromBasket(e) {
    let code = e.target.dataset.productCode;
    localStorage.removeItem(code);

    // condition by page title name:
    if (document.title == 'iced Drinks') {
        loadIceDrinkMenu();
    } else if (document.title == 'hot Drinks') {
        loadHotDrinkMenu();
    } else if (document.title == 'cakes') {
        loadCakesMenu();
    }


    loadBasketList();
}

function increaseProductCount(e) {
    let code = e.target.dataset.productCode;
    let lastVal = parseInt(localStorage.getItem(code));
    localStorage.setItem(code, lastVal += 1);

    loadBasketList();
}

function decreaseProductCount(e) {
    let code = e.target.dataset.productCode;
    let lastVal = parseInt(localStorage.getItem(code));

    if (lastVal <= 1) {
        localStorage.removeItem(code);
        // condition by page title name:
        if (document.title == 'iced Drinks') {
            loadIceDrinkMenu();
        } else if (document.title == 'hot Drinks') {
            loadHotDrinkMenu();
        } else if (document.title == 'cakes') {
            loadCakesMenu();
        }
    } else {
        localStorage.setItem(code, lastVal -= 1);
    }

    loadBasketList();
}

function openOrderPage() {

}