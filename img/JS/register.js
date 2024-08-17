document.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var checking = document.getElementById("checking").value;
    console.log(name, email, password);
    let lowerCaseLetter = /[a-z]/g;
    let upperCaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (name.length < 6) {
        alert("Username must be at least 6 characters");
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters");
    } else if (!password.match(lowerCaseLetter)) {
        alert("Password must contain lowercase letter");
    } else if (!password.match(upperCaseLetter)) {
        alert("Password must contain uppercase letter");
    } else if (!password.match(numbers)) {
        alert("Password must contain a number or special character");
    } else if (password !== checking) {
        alert("Password is not confirmed correctly");
    } else {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                let USER = {
                    name: name,
                    email: email,
                    password: password,
                    checking: checking,
                };
                localStorage.setItem("user", JSON.stringify(USER));
                var user = userCredential.user;
                console.log(userCredential);
                Swal.fire({
                    icon: "success",
                    title: "You have signed up successfully!",
                    text: "Have a good experience!",
                    didClose: () => {
                        window.location.href = "login.html";
                    },
                });
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }
});
