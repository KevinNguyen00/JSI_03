function showForm() {
    var right = document.querySelector(".right");
    right.classList.remove("undisplayed");
}
function hideForm() {
    var right = document.querySelector(".right");
    right.classList.add("undisplayed");
}

var data_user = [];
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/v8/firebase.User
        var uid = user.uid;
        data_user = user;
        // ...
    } else {
        // User is signed out
        // ...
    }
});
console.log(data_user);

document.getElementById("nutdangbai").addEventListener("click", function (display) {
    display.preventDefault();

    var img_url = document.getElementById("input_image").value;
    var content_url = document.getElementById("input_content").value;
    var current_name = document.querySelector(".name-user");
    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    var newPost = {
        name: data_user.displayName || data_user.email,
        img_url: img_url,
        content_url: content_url,
        timestamp: new Date().toLocaleString(),
    };
    console.log(newPost);
    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));
    // call out the displayed container
});
