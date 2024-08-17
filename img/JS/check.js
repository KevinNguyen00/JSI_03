document.addEventListener("DOMContentLoaded", function (a) {
    a.preventDefault();
    var profile = document.querySelector(".dropdown");
    var joinus = document.querySelector(".joinus");
    var username = document.getElementById("nguoidung");
    // var original_avatar = document.querySelector(".user-avatar");
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log(user);
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/v8/firebase.User
            Swal.fire({
                icon: "success",
                title: "Enjoy our service!",
                text: "Have a good experience!",
            });
            var uid = user.uid;
            joinus.classList.add("hidden");
            profile.classList.remove("hidden");
            username.innerHTML = user.email;
            // original_avatar.src = user.photoURL;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
    document.getElementById("signout").addEventListener("click", function (logout) {
        firebase
            .auth()
            .signOut()
            .then(() => {
                // Sign-out successful.
                Swal.fire({
                    title: "Goodbye",
                    text: "See you again !",
                });
                profile.classList.add("hidden");
                joinus.classList.remove("hidden");
            })
            .catch((error) => {
                // An error happened.
            });
    });
});
