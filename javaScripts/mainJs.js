function bodyLoaded(event, isIndexPage) {
    appenBasketElement(event);
    if (isIndexPage) {
        animatingIndexHeader();
    }
}

let menu_page_names = document.querySelectorAll('.menu_page_names');
for (let menuNameElement of menu_page_names) {
    menuNameElement.onclick = showOrHideShortAccessMenu;
}

window.addEventListener('scroll', (event) => {
    animatingIndexHeaderForScrolling();
})


// add basket Element with js to documetns:
let basket_container;
let basket_items_contianer;
function appenBasketElement(event) {
    const parentElement = event.target.body;

    const basketElement00 = document.createElement('div');
    basketElement00.className = 'basket_contianer';

    basketElement00.innerHTML += `
        <h2>Cart</h2>
        <div class="basket_list">
            <div class="basket_item">
                <div class="basket_item_image_Container">
                    <img src="images/[fpdl.in]_closeup-classic-fresh-espresso-served-dark-surface_1220-5376_full.jpg"
                        alt="" class="basket_item_image image_fit">
                </div>
                <div class="basket_item_right_Container">
                    <h4>product name</h4>
                    <div class="item_div_1">
                        <span class="basket_item_price">10$</span>
                        <div>
                            <i class="bi bi-bag-dash-fill c_p"></i>
                            <span class="basket_item_count">10</span>
                            <i class="bi bi-bag-plus-fill c_p"></i>
                        </div>
                    </div>
                    <div class="item_div_2">
                        <span class="basket_item_final_price">10$</span>
                        <button>remove</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="basket_buttons_container">
            <button class="button_style3" onclick="closeBasket()">Go out</button>
            <button class="button_style2" id="order_button" onclick="openFinalOrderPage()">Order</button>
        </div>
    `;


    parentElement.appendChild(basketElement00);
    basket_container = document.querySelector('.basket_contianer');
    basket_items_contianer = document.querySelector('.basket_list');
    appendFooterElement(parentElement);
    appendFinalOrderPage(parentElement);
}
// add footer Element with js to documetns (function called in appendBasketElement()):
function appendFooterElement(bodyElement) {
    const footerElement = document.createElement('div');
    footerElement.className = 'footer';
    footerElement.innerHTML = `
        <div class="footer_image_container">
            <img src="images/RCPNG.png" class="image_fit">
        </div>
        <p>
            disigned by mahdi hekmati 0 to 100. <br>
            started at 
        </p>
    `;
    bodyElement.appendChild(footerElement);
}
// add final order page Element with js to documetns (function called in appendBasketElement()):
function appendFinalOrderPage(bodyElement) {
    const order_page_container = document.createElement('div');
    order_page_container.className = 'order_page_container';
    order_page_container.innerHTML = `
        <div class="order_page">
            <h3>Final step</h3>
            <div class="order_page_part">
                <label for="order_page_f_name">first name</label>
                <input type="text" id="order_page_f_name" placeholder="your F name" class="order_input_data" required>
            </div>
            <div class="order_page_part">
                <label for="order_page_l_name">last name</label>
                <input type="text" id="order_page_l_name" placeholder="your L name" class="order_input_data" required>
            </div>
            <div class="order_page_part">
                <label for="order_page_phone_number">phone number</label>
                <input type="text" id="order_page_phone_number" placeholder="your Phone number" class="order_input_data" maxlenght='11' required>
            </div>
            <div class="order_page_part">
                <label for="order_page_phone_number">table number</label>
                <select name="number_of_table" id="table_number">
                    <optgroup label="number of your table">
                        <option value="1">table 1</option>
                        <option value="2">table 2</option>
                        <option value="3">table 3</option>
                        <option value="4">table 4</option>
                        <option value="5">table 5</option>
                        <option value="6">table 6</option>
                        <option value="7">table 7</option>
                        <option value="8">table 8</option>
                        <option value="9">table 9</option>
                        <option value="10">table 10</option>
                    </optgroup>
                </select>
            </div>
            <h5>here will be paying portable</h5>
            <div class="order_page_buttons">
                <button class="order_page_goOut_button button_style3" onclick="closeFinalOrderPage()">back</button>
                <button class="order_page_order_button button_style3" disabled onclick="finalOrder()">order</button>
            </div>
        </div>
    `;
    bodyElement.appendChild(order_page_container);
}

// -----------------------------
// animating main index header when body loaded
const header_bg_type = document.querySelector('.header_bg_type')
function animatingIndexHeader() {
    setTimeout(() => {
        header_bg_type.style.transform = 'scale(.6)';
        header_bg_type.style.opacity = '1';
    }, 200);

    setTimeout(() => {
        header_bg_type.style.transition = '0s linear'
    }, 1200);
}

function animatingIndexHeaderForScrolling() {
    let SY = window.scrollY;
    if (SY < 400)
        header_bg_type.style.top = `${SY / 2}px`;
}


// -----------------------------
// open or close hidden navigation bahdling
const hiddenNav = document.querySelector('.hidden_navigation_container');
const open_hidden_nav_btn = document.querySelector('.open_hidden_nav_btn');
let is_hiddenNav_open = false;
function openHiddenNav(e) {
    if (!is_hiddenNav_open) {
        hiddenNav.style.left = 0;
        e.target.style.opacity = 0;
        setTimeout(() => {
            e.target.style.display = 'none';
        }, 100);
        is_hiddenNav_open = true;
    }
}

function closeHiddenNav() {
    if (is_hiddenNav_open) {
        open_hidden_nav_btn.style.display = 'block';
        open_hidden_nav_btn.style.opacity = 1;
        hiddenNav.style.left = '-80px';
        is_hiddenNav_open = false;
    }
}


// -----------------------------
// handling open or close basket:
let is_basket_open = false;

let top_navigatins = document.querySelector('.topNavigation00');

// open basket handling
function openBasket() {
    if (!is_basket_open) {
        if (is_hiddenNav_open) {
            closeHiddenNav();
        }

        basket_container.style.display = 'block';
        basket_container.style.opacity = '1';

        setTimeout(() => {
            basket_container.children[0].style.left = '0';
            basket_container.children[0].style.opacity = '1';
        }, 200);
        setTimeout(() => {
            basket_container.children[1].style.left = '0';
            basket_container.children[1].style.opacity = '1';
        }, 300);
        setTimeout(() => {
            basket_container.children[2].style.left = '0';
            basket_container.children[2].style.opacity = '1';
        }, 400);
        is_basket_open = true;

        // hiding navigaion bar:
        top_navigatins.style.opacity = '0';

        loadBasketList();
    } else {
        closeBasket();
        console.log("tttttttttttttttttttttt");
        is_basket_open = false;
    }
}

// close basket handling
function closeBasket() {
    for (const el of basket_container.children) {
        el.style.opacity = '0';
        el.style.left = '-20px';
    }

    // showing top navigation bar:
    top_navigatins.style.opacity = '1';
    // ------

    basket_container.style.opacity = '0';
    setTimeout(() => {
        basket_container.style.display = 'none';
    }, 300);

    is_basket_open = false;
}


/**
 * a functino to get object of product code
 * you only have to call it with code parameter
 * @param {string} code 
 */
function getProductObjectByCode(code) {
    for (const object of iceDrinks) {
        if (object.product_code == code) {
            return object;
        }
    }
    for (const object of hotDrinks) {
        if (object.product_code == code) {
            return object;
        }
    }
    for (const object of cakes) {
        if (object.product_code == code) {
            return object;
        }
    }
}

function finalOrder() {
    if (id_order_page_fields_ready()) {
        localStorage.setItem('userFname', fn_field_order.value);
        localStorage.setItem('userLname', ln_field_order.value);
        localStorage.setItem('userPhNumber', ph_field_order.value);
        localStorage.setItem('costomerTableNumber', parseInt(document.querySelector('#table_number').value));

        let ad = new AlertDisingned(document.body);
        ad.showAlertGetOk('order seccessfull').addEventListener('click', () => {
            setTimeout(() => {
                resetAllParameters();
            }, 300);
        });
    }
}

// openning and close final order page function:
function openFinalOrderPage() {
    let order_page_container = document.querySelector('.order_page_container');
    order_page_container.style.display = 'flex';
    setTimeout(() => {
        order_page_container.style.opacity = '1';
    }, 10);

    fn_field_order = document.getElementById('order_page_f_name');
    ln_field_order = document.getElementById('order_page_l_name');
    ph_field_order = document.getElementById('order_page_phone_number');


    // checking form:
    // let alert_disigned = new AlertDisingned(document.body);
    fn_field_order.addEventListener('keypress', (event) => {
        checkingIf(event);
    })

    ln_field_order.addEventListener('keypress', (event) => {
        checkingIf(event);
    })

    ph_field_order.addEventListener('keypress', (event) => {
        let v = event.target.value;
        if (!parseInt(event.key) && event.key != '0') {
            event.preventDefault();
        }
        if (event.key == " ") {
            event.preventDefault();
        }
        if (v.length >= 11) {
            event.preventDefault();
        }
    })


    fn_field_order.addEventListener('blur', (event) => {
        let v = event.target.value;
        console.log("ENTERED");
        if (v.length == 0) {
            order_page_field1_ready = false;
        } else {
            order_page_field1_ready = true;
        }
        id_order_page_fields_ready();
    });

    ln_field_order.addEventListener('blur', (event) => {
        let v = event.target.value;
        if (v.length == 0) {
            order_page_field2_ready = false;
        } else {
            order_page_field2_ready = true;
        }
        id_order_page_fields_ready();
    });

    ph_field_order.addEventListener('blur', (event) => {
        let v = event.target.value;
        if (v.length == 0) {
            order_page_field3_ready = false;
        } else {
            order_page_field3_ready = true;
        }
        if (!v.startsWith('09')) {
            order_page_field3_ready = false;
        } else {
            order_page_field3_ready = true;
        }
        id_order_page_fields_ready();
    });

}
function closeFinalOrderPage() {
    let order_page_container = document.querySelector('.order_page_container');
    order_page_container.style.opacity = '0';
    setTimeout(() => {
        order_page_container.style.display = 'none';
    }, 500);
}

// a MAP for getting ready datas that we client want to send
let finalSendingData = new Map();
// getting ready all of data to send and reset alll parmeters like clearing localStorage and text field and ...
function resetAllParameters() {
    // fill the MAP that we client want to send (finalSendingData)
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let val = localStorage.getItem(key);

        finalSendingData.set(key, val);
    }

    closeBasket();
    closeFinalOrderPage();

    setTimeout(() => {
        // resetting :
        fn_field_order.value = '';
        ln_field_order.value = '';
        ph_field_order.value = '';
        localStorage.clear();

        window.location.reload();
    }, 400);

    console.log(finalSendingData);
}



let isShortAccessMenuOpne = false;
function showOrHideShortAccessMenu() {
    let menuePageTitles = ['hot Drinks', 'iced Drinks', 'cakes'];
    const shotAccessMenuContainer = document.querySelector('.shortAccessOtherMenueContainer');
    if (!isShortAccessMenuOpne) {
        // open short access menu
        // loading content:
        shotAccessMenuContainer.innerHTML = '';
        let names = [];
        for (let i = 0; i < menuePageTitles.length; i++) {
            if (menuePageTitles[i] == document.title) {
                continue;
            } else {
                names.push(menuePageTitles[i]);
            }
        }
        for (let i = 0; i < names.length; i++) {
            switch (names[i]) {
                case menuePageTitles[0]: //hot drinks:
                    shotAccessMenuContainer.innerHTML += `<button class="btn button_style3" onclick="window.open('hotDrinks.html' , '_self')">Hot drinks</button>`;
                    break;
                case menuePageTitles[1]: //iced dringks:
                    shotAccessMenuContainer.innerHTML += `<button class="btn button_style3" onclick="window.open('iceDrinks.html' , '_self')">Iced drinks</button>`;
                    break;
                case menuePageTitles[2]: //cakes:
                    shotAccessMenuContainer.innerHTML += `<button class="btn button_style3" onclick="window.open('cakes.html' , '_self')">Cakes</button>`;
                    break;
            }
        }
        // showing:
        shotAccessMenuContainer.style.display = 'flex';
        shotAccessMenuContainer.style.opacity = '1';
        isShortAccessMenuOpne = true;
    } else {
        // close short access menu
        shotAccessMenuContainer.style.opacity = '0';
        setTimeout(() => {
            shotAccessMenuContainer.style.display = 'none';
        }, 300)
        isShortAccessMenuOpne = false;
    }
}

// tow event listener for when clicking or scrolling window 
// it useful when we need to close/hide the menu that opened like pop up
document.body.addEventListener('scroll', () => {
    if (isShortAccessMenuOpne) {
        showOrHideShortAccessMenu();
    }
})
document.body.addEventListener('click', (e) => {
    if (isShortAccessMenuOpne) {
        showOrHideShortAccessMenu();
    }
}, true)


