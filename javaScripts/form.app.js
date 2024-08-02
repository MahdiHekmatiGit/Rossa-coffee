// handling server text animation: 
// if we are in contact us page:
let contactUs_form;
let fn_field;
let ln_field;
let ph_field;
let comment_field;

if (document.title == 'contact us') {
    const form_massage_container = document.querySelector('#contactUs_form_message_container');
    let form_massage_counter = 0;
    let form_massage_height = 42;
    setInterval(() => {
        if (form_massage_counter == form_massage_container.children.length) {
            form_massage_counter = 0;
            form_massage_container.children[0].style.top = '0'
        } else {
            for (const i of form_massage_container.children) {
                // form_massage_container.children[0].style.top = '-' + (form_massage_height * (form_massage_counter + 1)) + 'px';
                i.style.top = '-' + (form_massage_height * (form_massage_counter)) + 'px';
            }
            form_massage_counter++;
        }
    }, 2500);


    // contack us form element:
    contactUs_form = document.forms.contactUsForm;
    fn_field = document.querySelector('#contactUs_form_firstName');
    ln_field = document.querySelector('#contactUs_form_lastName');
    ph_field = document.querySelector('#contactUs_form_phoneNumber');
    comment_field = document.querySelector('#contactUs_comment_txtArea');

    // checking form:
    let alert_disigned = new AlertDisingned(document.body);
    fn_field.addEventListener('keypress', (event) => {
        checkingIf(event);
    })

    ln_field.addEventListener('keypress', (event) => {
        checkingIf(event);
    });

    contactUs_form.addEventListener('submit', (event) => {
        let v = ph_field.value;
        if (v.toString().length < 11 || v.toString().length > 11) {
            event.preventDefault();
            alert_disigned.showAlert("the number that enter is short!");
            return;
        }
        if (!v.startsWith("09")) {
            event.preventDefault();
            alert_disigned.showAlert("probably the phone number that you entred is wrong!");
            return;
        }
        event.preventDefault();
        alert_disigned.showAlertGetOk("thank you, we will see your comment soon!").onclick = () => {
            setTimeout(()=>{
                contactUs_form.submit();
            },300)
        }
    })
}



// order form element:
let fn_field_order;
let ln_field_order;
let ph_field_order;

let order_page_field1_ready;
let order_page_field2_ready;
let order_page_field3_ready;

function id_order_page_fields_ready() {
    if (order_page_field1_ready && order_page_field2_ready && order_page_field3_ready) {
        document.querySelector('.order_page_order_button').removeAttribute('disabled');
        return true;
    } else {
        return false;
    }
}

function checkingIf(event) {
    if (
        event.key == "0" ||
        event.key == "1" ||
        event.key == "2" ||
        event.key == "3" ||
        event.key == "4" ||
        event.key == "5" ||
        event.key == "6" ||
        event.key == "7" ||
        event.key == "8" ||
        event.key == "9" ||
        event.key == "`" ||
        event.key == "-" ||
        event.key == "=" ||
        event.key == "+" ||
        event.key == "_" ||
        event.key == "~" ||
        event.key == "!" ||
        event.key == "@" ||
        event.key == "#" ||
        event.key == "$" ||
        event.key == "%" ||
        event.key == "^" ||
        event.key == "&" ||
        event.key == "*" ||
        event.key == "(" ||
        event.key == ")" ||
        event.key == "\\" ||
        event.key == "|" ||
        event.key == "}" ||
        event.key == "{" ||
        event.key == "\"" ||
        event.key == "\'" ||
        event.key == ":" ||
        event.key == ";" ||
        event.key == ">" ||
        event.key == "<" ||
        event.key == "." ||
        event.key == "?" ||
        event.key == "]" ||
        event.key == "[" ||
        event.key == "," ||
        event.key == "/"
    ) event.preventDefault();
}