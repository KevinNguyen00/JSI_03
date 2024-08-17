document.addEventListener("submit", function (f) {
    f.preventDefault();
    var imel = document.getElementById("imeol").value.trim();
    var security = document.getElementById("pass").value;
    let us = localStorage.getItem("USER");
    us = JSON.parse(us);
    console.log(us);
    firebase
        .auth()
        .signInWithEmailAndPassword(imel, security)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            Swal.fire({
                icon: "success",
                title: "You have signed in successfully!",
                text: "Have a good experience!",
                didClose: function () {
                    window.location.href = "homepage.html";
                },
            });
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            Swal.fire({
                icon: "error",
                title: "Let's check again the email or the password!",
                text: "Bear in mind ",
            });
        });
});
