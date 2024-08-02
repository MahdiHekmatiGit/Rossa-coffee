// it adds items to ice cofee menu:
let list_container = document.querySelector('.ice_coffee_menu_container');

function loadIceDrinkMenu() {
    list_container.innerHTML = "";

    for (const object of iceDrinks) {
        const code = object.product_code;
        const name = object.product_name;
        const desciption = object.product_description;
        const image = object.product_image;
        const price = object.product_price;

        list_container.innerHTML += `
            <div class="product_card" data-product-code="${code}">
                <img src="${image}" class="product_card_image">
                <h3 class="product_card_name">${name}</h3>
                <p class="product_card_description">${desciption}</p>
                <p class="product_card_price">${price}$</p>
                <div class="product_card_bottom_panel">
                    <button class="product_card_add_card_button" data-product-code="${code}" onclick="addToBasket(event)">add to card</button>
                    <div class="pcobmc d-none" data-product-code="${code}">
                        <p class="product_card_basket_massage">in your cart</p>
                        <i class="bi bi-trash-fill" data-product-code="${code}" onclick="removeFromBasket(event)"></i>
                    </div>
                </div>
            </div>
        ` ;

        if (localStorage.getItem(code) !== null) {
            document.querySelector(`.pcobmc[data-product-code="${code}"]`).classList.remove('d-none');
            document.querySelector(`.product_card_add_card_button[data-product-code="${code}"]`).classList.add('d-none');
        } else {
            document.querySelector(`.pcobmc[data-product-code="${code}"]`).classList.add('d-none');
            document.querySelector(`.product_card_add_card_button[data-product-code="${code}"]`).classList.remove('d-none');
        }
    }

}

loadIceDrinkMenu();