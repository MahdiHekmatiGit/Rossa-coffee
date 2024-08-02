// comments is a array of comment :
// let comment = [
//     {
//         username : "name of user" ,
//         usetImage: "path of user image",
//         commnet: "comment of use"
//     }
// ] 

const comment_container = document.querySelector('.section_customers');

if (comment_container.innerHTML != null) {
    comment_container.innerHTML = "";
}

for (const c of comments) {
    comment_container.innerHTML += `
        <div class="customers_comment_item">
            <div class="comment_item_image_container">
                <img src="${c.usetImage}" class="image_fit comment_item_image">
            </div>
            <div class="comment_item_text_content">
                <h2 class="comment_item_userName">${c.username}</h2>
                <p class="comment_item_comment"> ${c.comment} </p>
            </div>
        </div>
    `;
}