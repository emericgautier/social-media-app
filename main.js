// form validation | target all the ID selectors from the HTML
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

// build a submit event listener for the form to prevent the default behaviour
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("button clicked");

formValidation();
});

// prevent users from submitting blank input fields
let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("failure");
    } else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
};


let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
};











