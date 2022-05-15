



















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

// accept data from input fields
// store them in the object data
let data = {};

// function
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

// create template literals | parent div, input, options div that carries icons
let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    input.value = "";
};
